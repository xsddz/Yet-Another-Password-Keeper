import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppLeftContent from './components/appLeftContent';
import AppRightContent from './components/appRightContent';

import './css/photon.min.css';
import './css/index.scss';

class App extends React.Component {
    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-group">
                        <div className="pane-one-third">
                            <AppLeftContent />
                        </div>
                        <div className="pane sidebar">
                            <AppRightContent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))