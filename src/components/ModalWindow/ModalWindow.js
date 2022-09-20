import React from 'react';
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Overlay, Modal, CloseButton } from "./ModalWindow.styled.js";

const modalRoot = document.querySelector("#modal-root");

const ModalWindow = ({ children, onClose }) => {
    return createPortal (
        <Overlay>
            <Modal 
                onClick={(e) => e.stopPropagation()}
            >
                <CloseButton
                    onClick={onClose}
                >
                    &times;
                </CloseButton>

                {children}
            </Modal>
        </Overlay>, modalRoot    
    );
};

Modal.proptypes = {
    url: PropTypes.string.isRequired,
    onclose: PropTypes.func.isRequired
}

export default ModalWindow;