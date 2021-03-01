import ReactDOM from 'react-dom'
import { useState } from 'react';

const modalRoot = document.getElementById('modal-root')

const rootStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)'
}

const modalStyle = {
    width: 240,
    borderRadius: 10,
    padding: '24px 36px',
    backgroundColor: 'white'
}

export const Modal = ({ onClose }) => {
    return ReactDOM.createPortal(
        <div style={rootStyle}>
            <div style={modalStyle}>
                <p> Modal</p>
                <button onClick={() => onClose()}>Close</button>
            </div>
        </div>,
        modalRoot
    )
}

export const ModalContainer = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (<div>
        <button onClick={() => setIsVisible(!isVisible)}>Show modal</button>
        { isVisible && <Modal onClose={() => setIsVisible(!isVisible)} />}
    </div>)
}
