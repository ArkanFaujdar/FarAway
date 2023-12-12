import "./index.css";
import React from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = React.useState([]);
  let [currentSort, setCurrentSort] = React.useState("input");

  function handleCheckBox(description) {
    setItems((items) =>
      items.map((item) =>
        item.description === description
          ? { ...item, packed: !item.packed }
          : item
      )
    );
  }

  function handleDelete(item, setItems) {
    setItems((items) => items.filter((items) => items.description !== item));
  }

  function handleReset() {
    setItems([]);
    setCurrentSort("input");
  }

  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackingList
        items={items}
        setItems={setItems}
        handleCheckBox={handleCheckBox}
        handleReset={handleReset}
        handleDelete={handleDelete}
        currentSort={currentSort}
        setCurrentSort={setCurrentSort}
      />
      <Stats items={items} />
    </div>
  );
}
