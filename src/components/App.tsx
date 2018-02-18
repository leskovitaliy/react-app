import * as React from 'react';
import Dropdown from "./Dropdown";
import Header from "./Header";
import Menu from "./Menu";

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
                <Menu />
                {/*<Header name="Tom" />*/}
                <Header items={menu} />
                <Dropdown/>
            </div>
        );
    }
}

export default App;
