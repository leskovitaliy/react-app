import * as React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log('items', this.props['items']);
        return (
            <div>
                {/*<p>Имя: {this.props['name']}</p>*/}
                {this.props['items'].map((item, index) =>
                    <a href={item.link} key={index}>{item.label}</a>
                )}
            </div>
        )
    }
}


export default Header;
