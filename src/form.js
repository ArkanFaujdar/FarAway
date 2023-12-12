import React from "react";

export default function Form({ setItems }) {
  function handleSubmit(event) {
    event.preventDefault();
    if (description === "") {
      return;
    } else {
      setItems((items) => [
        ...items,
        { description, quantity, packed: false, id: Date.now() },
      ]);
      setDescription("");
      setQuantity(1);
    }
  }

  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your Trip?</h3>

      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((optionNum) => (
          <option key={optionNum} value={optionNum}>
            {optionNum}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}
