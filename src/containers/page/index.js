import React from 'react';
import LayoutMain from 'containers/layout/index';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <LayoutMain/>
            </div>
        );
    }
}


export default Home;
