import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
    if (!props.selectedGif) {
        return <div></div>;
    }
    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={() => props.onRequestClose()}>
            <div className="gif-modal">
                <img src={props.selectedGif.images.original.url} />
                <button
                    onClick={() => props.onRequestClose(props.selectedGif.images.original.url)}>close</button>
            </div>
        </Modal>
    );
};

export default GifModal;