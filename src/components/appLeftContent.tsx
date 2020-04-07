import * as React from 'react';

interface AppLeftBarProps {
    searchText?: string
    passList?: {}[]
}

interface AppLeftBarState {
}

export default class AppLeftBar extends React.Component<AppLeftBarProps, AppLeftBarState> {
    constructor(props) {
        super(props);
    }

    searchChange = (e) => {
        console.log(e, this);
    }

    renderListItem(itemID, itemIcon, itemTitle, itemDesc){
        return (
            <li key={itemID} className="list-group-item">
                <img className="img-circle media-object pull-left" src={itemIcon} width="32" height="32" />
                <div className="media-body">
                    <strong>{itemTitle}</strong>
                    <p>{itemDesc}</p>
                </div>
            </li>
        );
    }

    render() {
        return (
            <div className="left-content">
                <header className="toolbar toolbar-header">
                    <div className="toolbar-actions">
                        <div className="form-icon-text-group">
                            <span className="icon icon-search"></span>
                            <input type="search" value={this.props.searchText} onChange={this.searchChange} className="form-control" placeholder="Search..." />
                        </div>

                        <div className="btn-group pull-right">
                            <button className="btn btn-mini btn-default active">
                                <span className="icon icon-plus"></span>
                            </button>
                            <button className="btn btn-mini btn-default">
                                <span className="icon icon-cog"></span>
                            </button>
                        </div>
                    </div>
                </header>
                <ul className="list-group">
                    {this.props.passList.map((item) => this.renderListItem(item["id"], item["icon"], item["title"], item["desc"]) )}
                </ul>
            </div>
            
        )
    }
}
