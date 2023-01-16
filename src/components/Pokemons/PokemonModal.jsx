import React, { Fragment } from "react";
import "../../../UI/PokemonModal.css";
import ReactDOM from "react-dom";
function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClose} />;
}

function PokemonOverlay(props) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}
const PortalElement = document.getElementById("overlays");

function PokemonModal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        PortalElement
      )}
      {ReactDOM.createPortal(
        <PokemonOverlay>{props.children}</PokemonOverlay>,
        PortalElement
      )}
    </Fragment>
  );
}

export default PokemonModal;
