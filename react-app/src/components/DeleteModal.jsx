import "./DeleteModal.scss";
const DeleteModal = ({ accept, close, id }) => {
  return (
    <div className="modal">
      <div className="dialog-box">
        <div
          className="close"
          onClick={() => {
            close(false);
          }}
        >
          <div className="cc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
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
              accept(id);
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
