import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
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
