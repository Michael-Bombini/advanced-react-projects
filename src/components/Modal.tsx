import { useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  show: boolean;
  closeModal: () => void;
}

export default function Modal({ show, closeModal }: Props) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!show) {
    return null;
  }
  const portalNode = document.getElementById("portal");
  if (!portalNode) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay" onClick={closeModal}></div>
      <div className="content">
        <h2>Simple Modal</h2>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>,
    portalNode
  );
}
