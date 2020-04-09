import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppLeftContent from './components/appLeftContent';
import AppRightContent from './components/appRightContent';

import './css/photon.min.css';
import './css/index.scss';

const ipc = require("electron").ipcRenderer;

interface AppProps {
}

interface AppState {
    // left content state
    searchText: string
    passwdList?: {}[]
    isAddButtonClick: boolean
    clickedPasswdListItemID?: number
    // right content state
    passwdInfo?: {}
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props)

        this.state = {
            searchText: "",
            isAddButtonClick: false,
            clickedPasswdListItemID: 0,
            passwdList: [],
            passwdInfo: {},
        }
    }

    // After the component did mount, we set the state each second.
    componentDidMount() {
        // list all passwd record with empty search
        this.listPasswd("");
    }

    // for left content list passwd info from db with the search text
    listPasswd = (searchText: string) => {
        console.log("====listPasswd: " + searchText)
        const app = this

        app.setState({
            searchText: searchText,
            isAddButtonClick: false,
            clickedPasswdListItemID: 0,
            passwdInfo: {},
        });

        ipc.send("listPassRecord", searchText);
        ipc.on("passlist", function (evt, recordList) {
            // console.log(evt);
            // console.log(recordList);

            app.setState({
                passwdList: recordList.map(function (item) {
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

    // for left content add button click
    prepareNewPasswd = (prevAddButtonState: boolean) => {
        console.log("=======prepareNewPasswd: ")
        const app = this

        if (prevAddButtonState) {
            app.setState({
                isAddButtonClick: false,
                clickedPasswdListItemID: 0,
                passwdInfo: {},
            });
        } else {
            app.setState({
                isAddButtonClick: true,
                clickedPasswdListItemID: 0,
                passwdInfo: {
                    "id": 0,
                    "title": "",
                    "site_or_app": "",
                    "login_name": "",
                    "login_pass": "",
                    "remarks": "",
                },
            });
        }
    }

    // for left content passwd list item click
    passwdListItemClick = (itemID: number) => {
        console.log("=======passwdListItemClick: " + itemID)
        const app = this

        app.setState(prevState => {
            let iteminfo = {}
            prevState.passwdList.forEach((item) => {
                if (item["id"] == itemID) {
                    iteminfo = {
                        "id": item["id"],
                        "title": item["title"],
                        "site_or_app": item["site_or_app"],
                        "login_name": item["login_name"],
                        "login_pass": item["login_pass"],
                        "remarks": item["remarks"],
                    };
                    // todo: break loop
                }
            });
            return {
                isAddButtonClick: false,
                clickedPasswdListItemID: itemID,
                passwdInfo: iteminfo,
            };
        });
    }

    // for right content save button click
    savePass = (data) => {
        console.log("====savePass: ");
        // console.log(data);

        if (data.id > 0) {
            ipc.send("updatePassRecord", {
                "id": data.id,
                "title": data.title,
                "site_or_app": data.siteOrApp,
                "login_name": data.loginName,
                "login_pass": data.loginPass,
                "remarks": data.remarks,
            });
        } else {
            ipc.send("addPassRecord", {
                "title": data.title,
                "site_or_app": data.siteOrApp,
                "login_name": data.loginName,
                "login_pass": data.loginPass,
                "remarks": data.remarks,
            });
        }

        this.listPasswd(data["title"])
    }

    // for right content cancel button click
    savePassCancel = () => {
        console.log("====savePassCancel: ")
        const app = this

        app.setState({
            isAddButtonClick: false,
            clickedPasswdListItemID: 0,
            passwdInfo: {},
        });
    }

    // render page
    render() {
        return (
            <div className="window">
                <div className="window-content">
                    <div className="pane-group">
                        <div className="pane-one-third">
                            <AppLeftContent searchText={this.state.searchText} searchCallback={this.listPasswd} addButtonClickCallback={this.prepareNewPasswd} addButtonActive={this.state.isAddButtonClick} list={this.state.passwdList} listItemClickCallback={this.passwdListItemClick} activeListItemID={this.state.clickedPasswdListItemID} />
                        </div>
                        <div className="pane sidebar">
                            <AppRightContent key={this.state.passwdInfo["id"]} passwdInfo={this.state.passwdInfo} onSaveButtonCallback={this.savePass} onCancelButtonCallback={this.savePassCancel} />
                        </div>
                    </div>
                </div>
            </div>
        );
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
}

ReactDOM.render(<App />, document.getElementById('root'))