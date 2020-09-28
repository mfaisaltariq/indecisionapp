import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.btnModalOK}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__option">{props.selectedOption}</p>}
        <button className="button" onClick={props.btnModalOK}>OK</button>
    </Modal>
);

export default OptionModal;