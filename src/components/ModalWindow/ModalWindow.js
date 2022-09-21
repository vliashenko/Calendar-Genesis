import { createPortal } from "react-dom";
import { Overlay, Modal, CloseButton } from "./ModalWindow.styled.js";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

const ModalWindow = ({ children, onClose }) => {
    
    const handleClick = () => {
        onClose();
        localStorage.setItem("UpdateFormValues", JSON.stringify(""));
    } 
    
    return createPortal (
        <Overlay>
            <Modal 
                onClick={(e) => e.stopPropagation()}
            >
                <CloseButton
                    onClick={handleClick}
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
    onClose: PropTypes.func.isRequired
}

export default ModalWindow;