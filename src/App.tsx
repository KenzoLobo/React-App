import Alert from "./componenets/Alert";
import Button from "./componenets/Button";
import ListGroup from "./componenets/ListGroup/ListGroup";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      <ListGroup
        items={["New York", "San Francisco", "Tokyo", "London"]}
        heading="Cities"
        onSelectItem={(item) => console.log(item)}
      ></ListGroup>
    </div>
  );
}

export default App;
