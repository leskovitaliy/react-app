import * as React from 'react';
import Dropdown from "./Dropdown";
import Header from "./Header";

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
                {/*<Header items={menu} />*/}
                <Dropdown/>
            </div>
        );
    }
}

export default App;
