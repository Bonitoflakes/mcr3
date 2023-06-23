/* eslint-disable react/prop-types */
import "./SnackTable.css";
import { useState } from "react";

export const SnackTable = ({ snacks }) => {
  const [sort, setSort] = useState(0);
  const [sortType, setSortType] = useState("id");
  //   const [sortedSnacks, setSortedSnacks] = useState(0);

  const sortsnacks = [...snacks].sort((a, b) => {
    if (sort === 0) {
      console.log("Default Sort");
      return snacks;
    }

    if (sort === 1) {
      console.log("Sort by ASC");
      console.log(a[sortType], "a[sortType]");
      console.log(b[sortType], "b[sortType]");
      return a[sortType] - b[sortType];
    }

    if (sort === -1) {
      console.log("Sort by DESC");
      return b[sortType] - a[sortType];
    }
  });

  const handleSortClick = (sortType) => {
    setSortType(sortType);
    console.log(sortType, "sortType");
    console.log(sort, "sortOrder");

    switch (sort) {
      case 0:
        setSort(1);
        break;
      case 1:
        setSort(-1);
        break;
      case -1:
        setSort(0);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSortClick("id")}>ID</th>
            <th onClick={() => handleSortClick("product_name")}>Product Name</th>
            <th onClick={() => handleSortClick("product_weight")}>Product Weight</th>
            <th onClick={() => handleSortClick("price")}>Price (INR)</th>
            <th onClick={() => handleSortClick("calories")}>Calories</th>
            <th onClick={() => handleSortClick("ingredients")}>Ingredients</th>
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
