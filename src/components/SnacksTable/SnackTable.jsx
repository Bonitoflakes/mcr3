/* eslint-disable react/prop-types */
import "./SnackTable.css";
import { useState } from "react";
import { TableBody } from "./TableBody";

const emotes = ["", "👇", "👆"];

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
        <thead>
          <th onClick={() => handleSortClick("id")}>ID {sortType === "id" && emotes[sortOrder]}</th>
          <th onClick={() => handleSortClick("product_name")}>
            Product Name {sortType === "product_name" && emotes[sortOrder]}{" "}
          </th>
          <th onClick={() => handleSortClick("product_weight")}>
            Product Weight {sortType === "product_weight" && emotes[sortOrder]}{" "}
          </th>
          <th onClick={() => handleSortClick("price")}>
            Price (INR) {sortType === "price" && emotes[sortOrder]}{" "}
          </th>
          <th onClick={() => handleSortClick("calories")}>
            Calories {sortType === "calories" && emotes[sortOrder]}{" "}
          </th>
          <th onClick={() => handleSortClick("ingredients")}>
            Ingredients {sortType === "ingredients" && emotes[sortOrder]}{" "}
          </th>
        </thead>
        <TableBody snacks={sortedSnacks} />
      </table>
    </div>
  );
};
