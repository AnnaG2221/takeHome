import React from "react";

const RewardSummary = ({ summary }) => {
  const render = summary.map((e, i) => {
    return (
      <tr>
        <td>{e[0]}</td>
        <td>{e[1]}</td>
      </tr>
    );
  });
  return (
    <div className=" ui table">
      <table className="ui cell table striped  ">
        <tr>
          <th>Name</th>
          <th>Reward</th>
        </tr>
        {render}
      </table>
    </div>
  );
};

export default RewardSummary;
