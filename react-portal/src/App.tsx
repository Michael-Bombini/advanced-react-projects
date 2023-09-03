import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Open Modal</button>
      <Modal show={show} closeModal={() => setShow(false)} />
    </div>
  );
}
