import type { Dispatch } from "react";

function BusModal({
  setState,
}: {
  setState: Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="modal__background">
      <div className="modal__container">
        <button onClick={() => setState(false)} className="modal__close">
          X
        </button>
        <div className="modal__title mb-5">
          <h1>Horários dos Ônibus</h1>
        </div>
        <div className="modal__body">busão</div>
      </div>
    </div>
  );
}

export default BusModal;
