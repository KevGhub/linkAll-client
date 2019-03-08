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
                <img className="gifimg" src={props.selectedGif.images.downsized.url} />
                <button className="btn btn-primary btnviolet"
                    onClick={() => {
                        console.log("AAAAAAAAAAAAAAAAAA", props.selectedGif.images.downsized.url );
                     return props.onRequestClose(props.selectedGif.images.downsized.url)}}>Send</button>
            </div>
        </Modal>
    );
};

export default GifModal;