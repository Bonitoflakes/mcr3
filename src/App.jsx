import { SnackTable } from "./components/SnacksTable/SnackTable";
import { useState } from "react";
import { snacks as API_SNACKS } from "./api/data";
import { useEffect } from "react";

export const App = () => {
  const [snacks, setSnacks] = useState([]);
  const [query, setQuery] = useState("");

  const filterdSnacks = snacks.filter(({ product_name, ingredients }) => {
    const name = product_name.toLowerCase();
    const search = query.toLowerCase();
    const isPresentInIngredients = ingredients.some((ingredient) => ingredient.toLowerCase().includes(search));

    return name.includes(search) || isPresentInIngredients;
  });

  console.log(filterdSnacks);

  useEffect(() => {
    setSnacks(API_SNACKS);
  }, []);

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ marginBottom: "2rem" }}>Snack Table</h1>

      <input
        type="text"
        placeholder="Search with products or ingredients"
        value={query}
        onChange={onQueryChange}
        style={{ marginBottom: "2rem", padding: "1rem", minWidth: "320px" }}
      />

      <SnackTable snacks={filterdSnacks} />
    </div>
  );
};
