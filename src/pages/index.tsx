import * as React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';

class State {

}

@observer
class IndexPage extends React.Component<{}, State> {
    private model = new State();

    componentDidMount() {
    }

    render() {
        return (
            <div>
                Coming soon..
                {/*<a href="https://sp-dev.itrex.io">Staff portal</a>*/}
            </div>
        );
    }
}

export default IndexPage;
