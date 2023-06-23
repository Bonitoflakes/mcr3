/* eslint-disable react/prop-types */
import "./SnackTable.css";
import { useState } from "react";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

export const SnackTable = ({ snacks }) => {
  const [sortOrder, setSortOrder] = useState(0);
  const [sortType, setSortType] = useState("id");

  const sortedSnacks = [...snacks].sort((a, b) => {
    if (sortOrder === 0) {
      console.log("Default Sort");
      return 0;
    }

    if (sortOrder === 1) {
      return b[sortType] > a[sortType] ? 1 : -1;
    }

    if (sortOrder === 2) {
      return a[sortType] > b[sortType] ? 1 : -1;
    }
  });

  const handleSortClick = (sortType) => {
    setSortType(sortType);

    console.log(sortType, "sortType");
    console.log(sortOrder, "sortOrder");

    switch (sortOrder) {
      case 0:
        return setSortOrder(1);
      case 1:
        return setSortOrder(2);
      case 2:
        return setSortOrder(0);

      default:
        console.error("Unknown sort order!!!");
        break;
    }
  };

  return (
    <div>
      <table>
        <TableHead handleSortClick={handleSortClick} sortOrder={sortOrder} sortType={sortType} />
        <TableBody snacks={sortedSnacks} />
      </table>
    </div>
  );
};
