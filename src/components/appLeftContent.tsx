import * as React from 'react';

interface AppLeftBarProps {
    searchText?: string
    searchCallback?: CallableFunction
    addButtonClickCallback?: CallableFunction
    addButtonActive?: boolean
    list?: {}[]
    listItemClickCallback?: CallableFunction
    activeListItemID?: number
}

interface AppLeftBarState {
}

export default class AppLeftBar extends React.Component<AppLeftBarProps, AppLeftBarState> {
    constructor(props) {
        super(props);
    }

    searchInputChange = (e) => {
        // console.log(e.target.value, e, this);
        this.props.searchCallback(e.target.value);
    }

    listItemClick = (e) => {
        this.props.listItemClickCallback(e.currentTarget.dataset.id)
    }

    addButtonClick = (e) => {
        this.props.addButtonClickCallback(this.props.addButtonActive)
    }

    renderListItem(itemID, itemIcon, itemTitle, itemDesc) {
        return (
            <li key={itemID} data-id={itemID} onClick={this.listItemClick} className={this.props.activeListItemID == itemID ? "list-group-item active" : "list-group-item"}>
                <img className="img-circle media-object pull-left" src={itemIcon} width="32" height="32" />
                <div className="media-body">
                    <strong>{itemTitle}</strong>
                    <p><small>{itemDesc}</small></p>
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
                            <input type="search" value={this.props.searchText} onChange={this.searchInputChange} className="form-control" placeholder="Search..." />
                        </div>

                        <div className="btn-group pull-right">
                            <button onClick={this.addButtonClick} className={this.props.addButtonActive ? "btn btn-mini btn-default active" : "btn btn-mini btn-default"}>
                                <span className="icon icon-plus"></span>
                            </button>
                            <button className="btn btn-mini btn-default">
                                <span className="icon icon-cog"></span>
                            </button>
                        </div>
                    </div>
                </header>
                <ul className="list-group">
                    {this.props.list.map((item) => this.renderListItem(item["id"], item["icon"], item["title"], "更新于 " + item["updated_at"]) )}
                </ul>
            </div>
        )
    }
}
