/* eslint-disable react/prop-types */
import "./SnackTable.css";
import { useState } from "react";

const emotes = ["", "👇", "👆"];

export const SnackTable = ({ snacks }) => {
  const [sortOrder, setSortOrder] = useState(0);
  const [sortType, setSortType] = useState("id");
  //   const [sortedSnacks, setSortedSnacks] = useState(0);

  const sortsnacks = [...snacks].sort((a, b) => {
    if (sortOrder === 0) {
      console.log("Default Sort");
      return 0;
    }

    if (sortOrder === 1) {
      console.log("Sort by DESC");
      console.log(a[sortType], "a[sortType]");
      console.log(b[sortType], "b[sortType]");

      return b[sortType] > a[sortType] ? 1 : -1;
    }

    if (sortOrder === 2) {
      console.log("Sort by ASC");
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
          <tr>
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
          </tr>
        </thead>
        <tbody>
          {sortsnacks.map(({ id, product_name, product_weight, price, calories, ingredients }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{product_name}</td>
                <td>{product_weight}</td>
                <td>{price}</td>
                <td>{calories}</td>
                <td>
                  {ingredients.map((ingredient, index) => (
                    <span key={index}>{index === -1 ? ingredient : ingredient + ", "}</span>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
