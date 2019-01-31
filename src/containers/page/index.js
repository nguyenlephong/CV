import React from 'react';
import { Button } from 'semantic-ui-react';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Hello world
                <Button>Click Here</Button>
            </div>
        );
    }
}


export default Home;
