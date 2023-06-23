/* eslint-disable react/prop-types */

export const TableBody = ({ snacks }) => {
  return (
    <tbody>
      {snacks.map(({ id, product_name, product_weight, price, calories, ingredients }) => {
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
  );
};
