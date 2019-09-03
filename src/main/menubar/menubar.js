import React from 'react';
import styles from './menubar.css'

class MenuBar extends React.Component{
    render() {
        return (
            <div className="menubar">
                    <div className="top-menu-bar">
                        <span>
                            메뉴
                        </span>
                        <span>
                            오머나
                        </span>
                        <span>
                            설정
                        </span>
                    </div>
                    <hr />
                    <div className="bottom-menu-bar">
                        <button>
                            HOME
                        </button>
                        <button>
                            상세검색
                        </button>
                    </div>
                </div>
        )
    }
}

export default MenuBar;