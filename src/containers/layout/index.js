import React from 'react';
import { Button } from 'semantic-ui-react'
class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Button>Click Here</Button>
            </div>
        );
    }
}


export default MainLayout;
