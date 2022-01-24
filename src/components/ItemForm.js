import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({addElement}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce",
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function onItemFormSubmit() {
    addElement({
      ...formData,
      id: uuid()
    })
    setFormData({
      name: "",
      category: "Produce",
    })
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
