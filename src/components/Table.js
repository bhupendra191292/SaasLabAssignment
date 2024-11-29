import React from "react";

const Table = ({ records }) => {
  return (
    <table role="table" aria-label="Kickstarter Projects">
      <thead>
        <tr>
          <th role="columnheader" scope="col">S.No.</th>
          <th role="columnheader" scope="col">Percentage Funded</th>
          <th role="columnheader" scope="col">Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {records.map((project) => (
          <tr key={project["s.no"]}>
            <td role="cell">{project["s.no"]}</td>
            <td role="cell">{project["percentage.funded"]}</td>
            <td role="cell">{project["amt.pledged"].toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
