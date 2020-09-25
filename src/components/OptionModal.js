import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');
const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.btnModalOK}
        contentLabel="Selected Option"
    >
        <h3>You should do</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.btnModalOK}>OK</button>
    </Modal>
);

export default OptionModal;