import Alert from "./componenets/Alert";
import Button from "./componenets/Button";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
      <Button onClick={() => setShowAlert(true)} color="secondary">
        New Button
      </Button>
    </div>
  );
}

export default App;
