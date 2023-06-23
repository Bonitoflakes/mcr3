/* eslint-disable react/prop-types */
const emotes = ["👁️", "👇", "👆"];

const head = [
  {
    id: "id",
    title: "ID",
  },
  {
    id: "product_name",
    title: "Product Name",
  },
  {
    id: "product_weight",
    title: "Product Weight",
  },
  {
    id: "price",
    title: "Price (INR)",
  },
  {
    id: "calories",
    title: "Calories",
  },
  {
    id: "ingredients",
    title: "Ingredients",
  },
];

export const TableHead = ({ handleSortClick, sortOrder, sortType }) => {
  return (
    <>
      <thead>
        {head.map(({ id, title }) => (
          <th key={id} onClick={() => handleSortClick(id)}>
            {title} {sortType === id && emotes[sortOrder]}
          </th>
        ))}
        {/* <th onClick={() => handleSortClick("id")}>ID {sortType === "id" && emotes[sortOrder]}</th>

        <th onClick={() => handleSortClick("product_name")}>
          Product Name {sortType === "product_name" && emotes[sortOrder]}
        </th>

        <th onClick={() => handleSortClick("product_weight")}>
          Product Weight {sortType === "product_weight" && emotes[sortOrder]}
        </th>

        <th onClick={() => handleSortClick("price")}>
          Price (INR) {sortType === "price" && emotes[sortOrder]}
        </th>

        <th onClick={() => handleSortClick("calories")}>
          Calories {sortType === "calories" && emotes[sortOrder]}
        </th>

        <th onClick={() => handleSortClick("ingredients")}>
          Ingredients {sortType === "ingredients" && emotes[sortOrder]}
        </th> */}
      </thead>
    </>
  );
};
