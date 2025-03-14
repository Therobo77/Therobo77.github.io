import React, { useState } from "react";
import { Modal } from "antd";
import "./ThreeDModal.css";

const ThreeDModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal
            centered
            open={isOpen}
            onCancel={() => setIsOpen(false)}
            footer={null}
            closable={true}
            className="custom-modal"
            closeIcon={<span className="custom-close">&times;</span>}
        >
            <div className="modal-content">
                <h1 className="modal-title">Experience Me in 3D!</h1>
                <p className="modal-text">They said it couldn’t be done... But here I am, in full 3D glory! Click below and behold greatness!</p>
                <a
                    href={"https://vikasshh.netlify.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button"
                    onClick={() => setIsOpen(false)}

                >
                    Open 3D Model
                </a>
            </div>
        </Modal>
    );
};

export default ThreeDModal;