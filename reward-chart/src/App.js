import logo from "./logo.svg";
import "./App.css";
import RewardSummary from "./components/RewardSummary";
import Transactions from "./components/Transactions";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [summary, setSummary] = useState([]);
  const [showTransation, setShowTransation] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [reward, setReward] = useState(false);

  // caculate reward function
  const countReward = (num) => {
    if (num <= 50) return 0;
    if (num <= 100) return num - 50;
    return (num - 100) * 2 + 50;
  };
  //  show Summary button click handeler
  const summaryClick = () => {
    const total = {};
    for (var i of data) {
      if (total[i.name] === undefined) {
        total[i.name] = countReward(i.number);
      } else {
        total[i.name] = total[i.name] + countReward(i.number);
      }
    }
    // console.log(total.entrise());
    setSummary(Object.entries(total));
    setShowTransation(false);
    setShowSummary(true);
  };

  // showReward button click handler
  const showRewardClick = () => {
    setReward(true);
  };

  //  rest button handler
  const resetClick = () => {
    setReward(false);
    setShowTransation(true);
    setShowSummary(false);
    setData([...data]);
  };

  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    const tem = data.filter((e) => e.name === value);
    console.log(tem);
    setData(tem);
  };

  //change Handler
  const changeHandler = () => {
    setValue(value);
  };

  //call api get data and set it in state data.
  useEffect(() => {
    const getTransaction = async () => {
      // console.log("runs");
      try {
        const res = await axios.get(
          "https://my.api.mockaroo.com/transaction.json?key=dff01a30"
        );
        setData([...res.data]);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getTransaction();
  }, []);
  console.log(data);

  return (
    <div className="ui container segment App">
      <h1>Transaction info</h1>
      <div className="">
        <button className="ui primary button basic " onClick={summaryClick}>
          Show Summary
        </button>
        {showTransation && (
          <button
            className="ui button primary basic "
            onClick={showRewardClick}
          >
            Show Reward
          </button>
        )}
        <button className="ui button primary basic " onClick={resetClick}>
          reset
        </button>
      </div>
      <div className="ui container table">
        {showTransation && (
          <Transactions data={data} countReward={countReward} reward={reward} />
        )}
        {showSummary && <RewardSummary summary={summary} />}
      </div>
    </div>
  );
}

export default App;
