import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppLeftBar from './components/appLeftBar';
import AppRightBar from './components/appRightBar';
import './css/index.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app-left-bar">
                    <AppLeftBar />
                </div>
                <div className="app-right-bar">
                    <AppRightBar />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))