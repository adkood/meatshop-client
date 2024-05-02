import React, { Children } from 'react';

const Modal = ({ width = "100%", height = "100%", isOn, bgColor = "white", color, children }) => {

    if (!isOn) {
        return null;
    }

    return (
        <section
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                backgroundColor: 'rgba(0, 1, 0, 0.5)',
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                top: 0,
                left: 0,
            }}
        >
            <section
                style={{
                    border: `2px solid ${color}`,
                    boxShadow: `2px 1px 4px ${color}`,
                    borderRadius: "5px",
                    width: `${width}`,
                    height: `${height}`,
                    backgroundColor: `${bgColor}`,
                    color: `${color}`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {children}
            </section>
        </section>
    );
}

export default Modal;
