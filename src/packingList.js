import React from "react";

export default function PackingList({
  items,
  setItems,
  handleDelete,
  handleCheckBox,
  handleReset,
  currentSort,
  setCurrentSort,
}) {
  let sortItems = items;

  function handleSort(e) {
    setCurrentSort(e.target.value);
  }
  if (currentSort === "input") {
    sortItems = items;
  }
  if (currentSort === "description") {
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (currentSort === "packed") {
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortItems.map((items) => (
          <Item
            item={items}
            setItems={setItems}
            handleCheckBox={handleCheckBox}
            handleDelete={handleDelete}
            handleReset={handleReset}
            key={items.description}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={currentSort} onChange={handleSort}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed</option>
        </select>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  );
}

function Item({ item, setItems, handleDelete, handleCheckBox }) {
  return (
    <div className="list">
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => handleCheckBox(item.description)}
        ></input>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} - {item.description}
          {console.log(item.packed)}
        </span>
        <button onClick={() => handleDelete(item.description, setItems)}>
          ❌
        </button>
      </li>
    </div>
  );
}
