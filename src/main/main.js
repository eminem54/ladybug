import React from 'react';
import MenuBar from './menubar/menubar.js';
import MustSee from './mustSee/mustSee.js'
import NowShowing from './nowshowing/nowshowing.js';

class Main extends React.Component{
    render() {
        return (
            <div className="main">
                <MenuBar />
                <MustSee />
                <NowShowing />
            </div>
        )
    }
}

export default Main;