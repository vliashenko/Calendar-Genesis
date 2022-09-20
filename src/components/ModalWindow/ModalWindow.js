import { createPortal } from "react-dom";
import { Overlay, Modal, CloseButton } from "./ModalWindow.styled.js";
import PropTypes from "prop-types";

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
    children: PropTypes.node.isRequired,
    onclose: PropTypes.func.isRequired
}

export default ModalWindow;