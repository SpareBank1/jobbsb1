import React, { useState } from 'react';
import Modal from "./smudtech-modal";

export default function ProgramCard(
    {
        title,
        description,
        time,
        track,
        presenters,
        selectedTrack
    }
) {

    const [showModal, setShowModal] = useState(false);
    const hasPresenters = presenters !== undefined;
    const moreThanOnePresenter = hasPresenters && presenters.length > 1;

    if (!time) {
        return null;
    }

    const trackClassPostfix = track === "all" || track === "intro" || track === "pause" || track === "paneldebatt" || track === "workshop" ? 'fill-width' : track;
    function addImages(hasPresenters, moreThanOnePresenter) {
        if (hasPresenters && presenters.length > 1) {
            return <div className="double-img--container">
                {presenters.map((presenter) => (<img src={`/images/smudtech/2023/speakers/${presenter.image}`} className="circleImg" alt=""></img>))}
            </div>;
        } else if (hasPresenters && presenters.length === 1) {
            return <img src={`/images/smudtech/2023/speakers/${presenters[0].image}`} className="circleImg" alt=""></img>
        }
    }

    function addNames(hasPresenters) {
        if (hasPresenters) {
            return <span className="session-presenter">
                {presenters.map((presenter, index) => (<h5>{presenter.name}
                    {presenters.length > 1 && (index === presenters.length - 2) ? '' : ''}
                    {presenters.length > 2 && (index === presenters.length - 3) ? '' : ''}</h5>))}
            </span>
        }

    }

    const handleEvent = () => {
        if (track !== "intro" && track !== "pause" && track !== "paneldebatt") {
            setShowModal(!showModal);
        }
    }
    const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleEvent(e);
    };
    const onKeyUp = (e) => {
        if(e.key === 'Enter'){
            handleEvent();
        }
    }

    return (
        <div className={`session session-1 track-1 track-name-${trackClassPostfix} ${selectedTrack === track ? 'track-visible' : ''}`}
            style={{ gridRow: `time-${time.start}`, gridRowEnd: (time.end && time.duration === 45 ? `time-${time.end}` : '') }}>

            <a href="#" className={`session--content session-type-${track}`} onClick={(e) => onClick(e)} onKeyUp={(e) => onKeyUp(e)}>

                {track === 'workshop' &&
                    <>
                        <img src={'/images/smudtech/workshop-bg.jpg'} className={`workshop-logo`} />
                        <h4 className="session-title">{title}</h4>
                        {addNames(hasPresenters, moreThanOnePresenter)}
                        <p>{description}</p>
                    </>
                    ||
                    <>
                    <img src={'/images/smudtech/Lyntale.png'} className={`session-logo ${track !== 'pause' && (time.duration === 10 || time.duration === 15) ? 'session-lightning' : ''}`}></img>
                    {addImages(hasPresenters, moreThanOnePresenter)}
                    <h4 className="session-title">{title}</h4>

                    {track === 'paneldebatt' ? <div className="paneldebatt-members">
                        { presenters.map((presenter, index) => (<h5 className="small-heading">{ presenter.name }<span className="text-faded"> - { presenter.bio }</span></h5>))}
                        </div>
                        :
                        addNames(hasPresenters, moreThanOnePresenter)
                    }
                    </>
                }

                {(track === 'intro' || track === 'paneldebatt') &&
                    <div className="stream-description">
                        { track === 'intro' ? <p className="stream-description-text" dangerouslySetInnerHTML={ {__html: description } } /> : <></> }
                    </div>
                }

                {track === 'workshop' &&
                    <span className="session-time">
                        <span className="label-pink" style={{ marginRight: '10px' }}>{"Rom 1.14-1.15"}</span>
                        <span className="label-pink">kl {time.startEnd}</span>
                    </span>
                    ||
                    <span className="session-time"><span className="label-pink">kl {time.startEnd}</span></span>
                }

                <Modal title={title} description={description} presenters={presenters} images={addImages(hasPresenters, moreThanOnePresenter)} show={showModal} />
            </a>
        </div>
    );
}