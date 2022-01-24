import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterBy, setFilterBy] = useState("");
  const [itemsList, setItemsList] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event){
    setFilterBy(event.target.value)
  }

  function addElement(item){
    setItemsList([...itemsList,item])
  }

  function onItemFormSubmit(){
    console.log()
  }

  const itemsToDisplay = itemsList.filter((item) => { return item.name.includes(filterBy) })
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}  addElement={addElement}/>
      <Filter onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
