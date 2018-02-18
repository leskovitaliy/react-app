import * as React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleState() {
        this.setState({isOpen: !this.state['isOpen'] });
    }

    render() {
        console.log('isOpened', this.state['isOpen']);
        let dropdownText;
        if (this.state['isOpen']) {
            dropdownText = <div>Here is what is show in dropdown</div>
        }

        return <div onClick={this.toggleState.bind(this)}>
            Its dropdown component
            {dropdownText}
        </div>
    }
}

export default Dropdown;
