
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [item, setItems] = useState([]);
  const [name,setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAddItem = ()=> {
    if(name && price){
      const newItem = {
        name: name,
        price: price
      }
      setItems([...item, newItem]);
      setName('');
      setPrice('');
    }
  }

  const handleRemoveItem = (index) => {
    const updatedItems = [...item];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
        <h1>Parent Component</h1>

        <label htmlFor="itemName">Item Name:</label>
        <input type="text" id="itemName" value={name} onChange={handleNameChange} />
       
        <label htmlFor="itemPrice">Item Price:</label>
        <input type="text" id="itemPrice" value={price} onChange={handlePriceChange}/>

        <button onClick={handleAddItem}>Add Item</button>
        <div className="child1">
          <h1>Child Component 1</h1>



          {/* <div id="items"> */}
          {/* list will be added here */}
          <ul>
        {item.map((item1, index) => (
          <li key={index}>
            <span>Name: {item1.name + "-"}</span>
            <span>Price: {item1.price}</span>
            <button onClick={() => handleRemoveItem(index)}>remove</button>
          </li>
        ))}
      </ul>
          {/* </div> */}

        </div>
      </div>
    </div>
  )
}

export default App
