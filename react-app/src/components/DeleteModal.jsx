import "./DeleteModal.scss";
const DeleteModal = ({ close }) => {
  return (
    <div className="modal">
      <div className="dialog-box">
        <div
          className="close"
          onClick={() => {
            close(false);
          }}
        >
          <div className="cc">x</div>
        </div>

        <h1>Are You Sure?</h1>
        <div>
          {" "}
          <p>Do You really want to delete employee?</p>
        </div>
        <div className="button-box">
          <button
            id="blue"
            onClick={() => {
              close(false);
            }}
          >
            Confirm
          </button>
          <button
            id="white"
            onClick={() => {
              close(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
