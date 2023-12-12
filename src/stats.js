import React from "react";

export default function Stats({ items }) {
  const length = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / length) * 100);
  return (
    <footer className="stats">
      <em>
        {length === 0
          ? "Start Adding Items"
          : percentage === 100
          ? "You are all set to go. Enjoy!!😉"
          : ` You have ${length} list of items on your list, and you already packed
          ${packed} (${percentage} %) items`}
      </em>
    </footer>
  );
}
