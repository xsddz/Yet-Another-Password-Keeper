import * as React from 'react';
import Camera from './camera';
import Desktop from './desktop';

export default class AppRightBar extends React.Component {
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
                <form>
                    <div className="form-group">
                        <label className="form-label text-right">标题：</label>
                        <div className="form-label-for">
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">登陆账号：</label>
                        <div className="form-label-for">
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">密码：</label>
                        <div className="form-label-for">
                            <input type="text" className="form-control" placeholder="" />
                            <label title="显示/遮掩密码" className="addon show"><span className="icon icon-lock-open"></span></label>
                            <label title="显示/遮掩密码" className="addon hidden"><span className="icon icon-lock"></span></label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">网址：</label>
                        <div className="form-label-for">
                            <input type="text" className="form-control" placeholder="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label text-right">备注：</label>
                        <div className="form-label-for">
                            <textarea className="form-control" rows={3}></textarea>
                        </div>
                    </div>
                    <div className="sep20"></div>
                    <div className="form-actions">
                        <label className="form-label text-right"></label>
                        <div className="form-label-for">
                            <button type="submit" className="btn btn-mini btn-form btn-primary">保存</button>
                            <button type="submit" className="btn btn-mini btn-form btn-default">取消</button>
                        </div>
                    </div>
                </form>
                <div className="sep10"></div>
                <div className="sep20"></div>
                <div className="sep20"></div>
                <div className="sep20"></div>
            </div>
        )
    }
}