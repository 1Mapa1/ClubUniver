import React from 'react';

const Modal = ({ children, showModal, toggleModal }) => {
  const modalStyle = {
    display: showModal ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 9999,
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={modalStyle} onClick={toggleModal}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export { Modal };