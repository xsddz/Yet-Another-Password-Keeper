import * as React from 'react';

export default class AppLeftBar extends React.Component {
    render() {
        return (
            <div className="box center-block">
                <SearchItem />
                <ItemList />
            </div>
        )
    }
}

class SearchItem extends React.Component {
    render() {
        return (
            <div className="search-item">
                <input type="text"/>
            </div>
        )
    }
}

class ItemList extends React.Component {
    render() {
        return (
            <div className="item-list">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        )
    }
}

class Item extends React.Component {
    render() {
        return (
            <div className="item">
                an item name
            </div>
        )
    }
}