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
                <h1 className="modal-title">Behold! <br /> The Future is Here! 🚀</h1>
                <p className="modal-text">
                    Scientists said it was impossible. Hollywood made movies about it.
                    But guess what? I defied all odds, broke all laws of physics,
                    and emerged in glorious 3D! 🤯
                </p>
                <p className="modal-text">
                    Click below before the government tries to shut this down! 👀
                </p>
                <a
                    href={"https://vikasshh.netlify.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button"
                    onClick={() => setIsOpen(false)}
                >
                    Witness the Magic! ✨
                </a>
            </div>
        </Modal>
    );
};

export default ThreeDModal;
