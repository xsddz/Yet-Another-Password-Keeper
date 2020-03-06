import * as React from 'react';

import itemImgA from '../img/a.png';
import itemImgB from '../img/b.png';

export default class AppLeftBar extends React.Component {
    render() {
        return (
            <div className="left-content">
                <header className="toolbar toolbar-header">
                    <div className="toolbar-actions">
                        <label className="toolbar-input">
                            <span className="icon icon-search"></span>
                            <input type="search" className="form-control" placeholder="Search..." />
                        </label>

                        <div className="btn-group pull-right">
                            <button className="btn btn-default">
                                <span className="icon icon-plus"></span>
                            </button>
                            <button className="btn btn-default">
                                <span className="icon icon-cog"></span>
                            </button>
                        </div>
                    </div>
                </header>
                <ul className="list-group">
                    <li className="list-group-item">
                        <img className="img-circle media-object pull-left" src={itemImgA} width="32" height="32" />
                        <div className="media-body">
                            <strong>List item title</strong>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <img className="img-circle media-object pull-left" src={itemImgB} width="32" height="32" />
                        <div className="media-body">
                            <strong>List item title</strong>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        )
    }
}
