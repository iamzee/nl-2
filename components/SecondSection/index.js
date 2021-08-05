import React from 'react';

import './index.scss';

const SecondSection = () => {
    return (
        <div className="ss" id="subscribe">
            <div className="ss-main">
                <div className="ss-tabs">
                    <div className="ss-tab">
                        <div className="ss-tab__icon">
                            <i className="fas fa-globe"></i>
                        </div>
                        <p className="ss-tab__text">Watch Online</p>
                    </div>
                    <div className="ss-tab">
                        <div className="ss-tab__icon">
                            <i className="fas fa-user-tie"></i>
                        </div>
                        <p className="ss-tab__text">20+ Journos</p>
                    </div>
                    <div className="ss-tab">
                        <div className="ss-tab__icon">
                            <i className="far fa-smile"></i>
                        </div>
                        <p className="ss-tab__text">Free to attend</p>
                    </div>
                </div>
                <div className="ss-subscribe">
                    <div className="ss-subscribe__container">
                        <input placeholder="Email Address" className="ss-subscribe__input" />
                        <button className="ss-subscribe__button">Subscribe</button>
                    </div>
                    <p className="ss-subscribe__alert">Subscribe to our mailing list to stay tuned on our latest updates.</p>
                </div>
            </div>
        </div>
    );
}

export default SecondSection