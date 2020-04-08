import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppLeftContent from './components/appLeftContent';
import AppRightContent from './components/appRightContent';

import './css/photon.min.css';
import './css/index.scss';

const electron = require("electron");
const ipc = electron.ipcRenderer;

interface AppProps {
}

interface AppState {
    search?: string
    list?: {}[]
    passinfo?: {}
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)

        this.state = {
            search: "",
            list: [],
            passinfo: {},
        }
    }

    // generate icon based on first char of string s
    genTextIcon(size: number[], s: string) {
        let tranColor = (name) => {
            var str = '';
            for (var i = 0; i < name.length; i++) {
                str += parseInt(name[i].charCodeAt(0), 10).toString(16);
            }
            return '#' + str.slice(1, 4);
        }
        // let colors = [
        //     "rgb(239,150,26)", 'rgb(255,58,201)', "rgb(111,75,255)", "rgb(36,174,34)", "rgb(80,80,80)"
        // ];

        let cvs = document.createElement("canvas");
        cvs.setAttribute('width', size[0].toString());
        cvs.setAttribute('height', size[1].toString());
        let ctx = cvs.getContext("2d");
        ctx.fillStyle = tranColor(s); // colors[Math.floor(Math.random() * (colors.length))];
        ctx.fillRect(0, 0, size[0], size[1]);
        ctx.fillStyle = 'rgb(255,255,255)';
        ctx.font = size[0] * 0.6 + "px Arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText(s.substring(1, 0), size[0] / 2, size[1] / 2);

        return cvs.toDataURL('image/jpeg', 1);
    }

    // list pass info from db with the search text
    listPass(search: string) {
        const app = this

        app.setState({
            search: search,
            passinfo: {},
        });

        ipc.send("listPassRecord", search);
        ipc.on("passlist", function (evt, recordList) {
            // console.log(evt);
            // console.log(recordList);

            app.setState({
                list: recordList.map(function(item) {
                    return {
                        "id": item["id"],
                        "icon": app.genTextIcon([128, 128], item["title"]),
                        "title": item["title"],
                        "site_or_app": item["site_or_app"],
                        "login_name": item["login_name"],
                        "login_pass": item["login_pass"],
                        "remarks": item["remarks"],
                        "updated_at": item["updated_at"],
                    }
                }),
            });
        });
    }

    // After the component did mount, we set the state each second.
    componentDidMount() {
        // list all passwd record with empty search
        this.listPass("");
    }

    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-group">
                        <div className="pane-one-third">
                            <AppLeftContent searchText={this.state.search} passList={this.state.list} />
                        </div>
                        <div className="pane sidebar">
                            <AppRightContent passInfo={this.state.passinfo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))