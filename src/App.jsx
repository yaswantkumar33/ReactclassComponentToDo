import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Listing from "./components/listing";
import Input from "./components/input";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const txtvalue = event.target.value;
    setInputText(txtvalue);
    // console.log(event.target.value);
  }
  function addItem() {
    if (inputText == "") {
      alert("fill the todo");
    } else {
      setItems((prevdata) => {
        return [...prevdata, inputText];
      });
      setInputText("");
    }
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
        <Input
          changehandeler={handleChange}
          text={inputText}
          additem={addItem}
        />
      </div>

      {/* <div>
        <h4>List</h4>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div> */}
      <Listing text={inputText} items={items} ondele={deleteItem} />
    </div>
  );
}

export default App;
