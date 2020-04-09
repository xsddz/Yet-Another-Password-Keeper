import * as React from 'react';
import Camera from './camera';
import Desktop from './desktop';

const electron = require("electron");
const ipc = electron.ipcRenderer;

interface AppRightBarProps {
    passwdInfo?: {}
    onSaveButtonCallback?: CallableFunction
    onCancelButtonCallback?: CallableFunction
}

interface AppRightBarState {
    id: number
    title: string
    siteOrApp: string
    loginName: string
    loginPass: string
    remarks: string
}


export default class AppRightBar extends React.Component<AppRightBarProps, AppRightBarState> {
    constructor(props: AppRightBarProps) {
        super(props)

        let asIntValue = function(value) {
            return value ? value : 0;
        }
        let asStringValue = function(value) {
            return value ? value : '';
        }

        this.state = {
            id: asIntValue(props.passwdInfo["id"]),
            title: asStringValue(props.passwdInfo["title"]),
            siteOrApp: asStringValue(props.passwdInfo["site_or_app"]),
            loginName: asStringValue(props.passwdInfo["login_name"]),
            loginPass: asStringValue(props.passwdInfo["login_pass"]),
            remarks: asStringValue(props.passwdInfo["remarks"]),
        }
    } 

    titleInputChange = (e) => {
        // console.log(e.target.value, e, this);
        this.setState({ title: e.target.value })
    }
    siteOrAppInputChange = (e) => {
        // console.log(e.target.value, e, this);
        this.setState({ siteOrApp: e.target.value })
    }
    loginNameInputChange = (e) => {
        // console.log(e.target.value, e, this);
        this.setState({ loginName: e.target.value })
    }
    loginPassInputChange = (e) => {
        // console.log(e.target.value, e, this);
        this.setState({ loginPass: e.target.value })
    }
    remarksInputChange = (e) => {
        // console.log(e.target.value, e, this);
        this.setState({ remarks: e.target.value })
    }

    onSavePass = (e) => {
        e.preventDefault();
        this.props.onSaveButtonCallback(this.state)
    }
    onCancelSavePass = (e) => {
        e.preventDefault();
        this.props.onCancelButtonCallback()
    }
    onFormSubmit = (e) => {
        e.preventDefault();
    }

    renderPasswdInfoForm() {
        if (Object.keys(this.props.passwdInfo).length == 0) {
            return (
                <section className="text-center">Enjoy Yourself.</section>
            );
        } else {
            return (
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group" hidden={true}>
                        <label className="form-label text-right">记录ID：</label>
                        <div className="form-label-for">
                            <input type="text" defaultValue={this.state.id} className="form-control" readOnly={true} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">标题：</label>
                        <div className="form-label-for">
                            <input type="text" value={this.state.title} onChange={this.titleInputChange} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">网址或app：</label>
                        <div className="form-label-for">
                            <input type="text" value={this.state.siteOrApp} onChange={this.siteOrAppInputChange} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">登陆账号：</label>
                        <div className="form-label-for">
                            <input type="text" value={this.state.loginName} onChange={this.loginNameInputChange} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">登录密码：</label>
                        <div className="form-label-for">
                            <input type="text" value={this.state.loginPass} onChange={this.loginPassInputChange} className="form-control" />
                            <label title="显示/遮掩密码" className="addon show"><span className="icon icon-lock-open"></span></label>
                            <label title="显示/遮掩密码" className="addon hidden"><span className="icon icon-lock"></span></label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">备注：</label>
                        <div className="form-label-for">
                            <textarea value={this.state.remarks} onChange={this.remarksInputChange} className="form-control" rows={3}></textarea>
                        </div>
                    </div>
                    <div className="sep20"></div>
                    <div className="form-actions">
                        <label className="form-label text-right"></label>
                        <div className="form-label-for">
                            <button onClick={this.onSavePass} className="btn btn-mini btn-form btn-primary">保存</button>
                            <button onClick={this.onCancelSavePass} className="btn btn-mini btn-form btn-default">取消</button>
                        </div>
                    </div>
                </form>
            );
        }
    }

    render() {
        return (
            <div className="right-content">
                {/* <div className="sep20"></div>
                <Camera />
                <div className="sep20"></div>
                <Desktop /> */}
                <div className="sep20"></div>
                <div className="sep20"></div>
                <div className="sep20"></div>
                <div className="sep10"></div>
                {this.renderPasswdInfoForm()}
                <div className="sep10"></div>
                <div className="sep20"></div>
                <div className="sep20"></div>
                <div className="sep20"></div>
            </div>
        );
    }
}
