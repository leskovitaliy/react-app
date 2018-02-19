import * as React from 'react';
import Dropdown from "./Dropdown";
import Header from "./Header";
import Menu from "./Menu";
import todoStore from '../stores/ToDoStore';
import ToDo from "./ToDo";
import ItemsStore from "../stores/ItemsStore";
import Items from "./Items";
import {Provider} from "mobx-react";

const menu = [
    {
        link: '/articles',
        label: 'Articles'
    },
    {
        link: '/contacts',
        label: 'Contacts'
    },
    {
        link: '/posts',
        label: 'Posts'
    }
];

class App extends React.Component {
    render() {
        return (
            <div>
                <Provider ItemsStore={ItemsStore}>
                    <Menu />
                    {/*<Header name="Tom" />*/}
                    <Header items={menu} />
                    <Dropdown/>
                    <ToDo todo={todoStore}/>
                    <Items />
                </Provider>
            </div>
        );
    }
}

export default App;
