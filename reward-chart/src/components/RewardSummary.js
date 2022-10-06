import React from "react";
import PersonalSummary from "./PersonalSummary";

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
    <div className=" container ui">
      <table>
        <tr>
          <th>name</th>
          <th>reward</th>
        </tr>
        {render}
      </table>
    </div>
  );
};

export default RewardSummary;
