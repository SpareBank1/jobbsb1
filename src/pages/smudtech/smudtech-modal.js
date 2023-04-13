import React from 'react';

export default function Modal({title, show, presenters, images, description}) {
    /*const onClose = e => {
        //this.props.onClose && this.props.onClose(e);
    };*/

    if (!show) {
        return null;
    }

    return (
        <>
            <div className="modal" id="modal">
                { images }
                { presenters.map(presenter => (
                    <>
                    <h2>{presenter.name}</h2>
                    <p className="modal-about">{presenter.bio}</p>
                    </>
                ))}
                <p className="modal-title">{title}</p>
                <p className="modal-description" dangerouslySetInnerHTML={ {__html: description } } />
                {/*<div class="content">{this.props.children}</div>*/}
                <div className="actions">
                {/*<button class="toggle-button" onClick={onClose}>
                    close
                </button>*/}
                </div>
            </div>
            <div className="backdrop"></div>
        </>  
    );
}
