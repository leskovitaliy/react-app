import * as React from 'react';
import {inject, observer} from "mobx-react";

interface IItems {
    ItemsStore: any;
}

@inject('ItemsStore')
@observer
class Items extends React.Component<IItems, {}> {
    componentWillMount() {
        // this.props.ItemsStore.makeItemActive(1);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const item = this.item.value;
        this.props.ItemsStore.addItem(item);
        this.item.value = '';
    }

    render() {
        const {ItemsStore} = this.props;
        return (
            <div>
                <div>{ItemsStore.birdCount}</div>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <input type="text" placeholder="tetw" ref={input => this.item = input} />
                    <button>add</button>
                </form>
            </div>
        )
    }
}

export default Items;
