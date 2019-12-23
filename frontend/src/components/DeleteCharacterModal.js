import React from 'react';

import Modal from './Modal';

function DeleteCharacterModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteCharacterModal">
        <h1>Are You Sure?</h1>
        <p>You are about to delete this character.</p>

        <div>
          <button onClick={props.onDeleteCharacter} className="btn btn-danger mr-4">
            Delete
          </button>
          <button onClick={props.onClose} className="btn btn-primary">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteCharacterModal;
