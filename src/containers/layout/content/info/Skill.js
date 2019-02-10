import React from 'react';
import ProgrammingLanguageInfo from './image/ProgrammingLanguages.png';

import './index.scss';
class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="cv-content-profile__sumary">
                <h2 className="pf-sumary__title">Skill</h2>
                <div className="pf-skill__hardskill">
                    <img src={ProgrammingLanguageInfo} alt="Programming languages" />
                    <img src={ProgrammingLanguageInfo} alt="Programming languages" />
                    <img src={ProgrammingLanguageInfo} alt="Programming languages" />
                    <span className="pf-sumary__description"></span>
                </div>
            </div>
        );
    }
}


export default Work;
