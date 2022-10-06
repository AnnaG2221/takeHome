import React from "react";
import { useEffect, useState } from "react";

const Transactions = ({ data, countReward, reward }) => {
  // console.log(countReward(120));
  const [each, setEach] = useState(data);
  // click name handler
  const nameClickHandler = (name) => {
    const tem = data.filter((e) => {
      return e.name === name;
    });
    setEach(tem);
  };
  console.log(each);

  var mapData = each
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((e, i) => {
      return (
        <tr className="ui table" key={e.id}>
          <td onClick={() => nameClickHandler(e.name)}>{e.name}</td>
          <td>{e.product}</td>
          <td>{e.date}</td>
          <td>{"$" + e.number.toString()}</td>
          {reward && <td>{countReward(e.number)}</td>}
        </tr>
      );
    });
  useEffect(() => {
    setEach(data);
  }, [data]);

  return (
    <div className="App container ui">
      <table className="ui container">
        <tbody>
          <tr>
            <th>name</th>
            <th>product</th>
            <th>date</th>
            <th>amount</th>
            {reward && <th>reward</th>}
          </tr>
          {mapData}
        </tbody>
      </table>

      {mapData}
    </div>
  );
};

export default Transactions;
