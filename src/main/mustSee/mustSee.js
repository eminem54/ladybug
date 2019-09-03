import styles from './mustSee.css';
import React from 'react';

class MustSee extends React.Component{
    render() {
        return (
            <div className="must-see-container">
                <div className="must-see-title">
                    오머나! 이건 꼭 봐야해!
                </div>
                <div className="must-see-items">
                    대략사진과설명
                </div>
            </div>
        )
    }
}

export default MustSee;