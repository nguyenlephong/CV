import React from 'react';
import ProgrammingLanguageInfo from './image/ProgrammingLanguages.png';
import Frameworks from './image/FrameWorks.png';
import Databases from './image/Database.png';

import { Grid,  } from 'semantic-ui-react';
import './index.scss';
class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="cv-content-profile__skill">
                <h2 className="pf-skill__title">Skill</h2>
                <div className="pf-skill__hardskill">
                    
                    <Grid padded columns={1} relaxed>
                        <Grid.Row columns={2} className="content-block_language">
                            <Grid.Column className="img-description"
                                mobile={16} tablet={5} computer={5}
                                >
                                    <img src={ProgrammingLanguageInfo} alt="Programming languages" />
                            </Grid.Column>
                            <Grid.Column className="text-description"
                                mobile={16} tablet={11} computer={11}
                                >
                                       <div>- Đã trải qua 7 học kỳ học ngôn ngữ lập trình <strong>JAVA</strong> tại trường, tự tin sử dụng tốt ngôn ngữ này.</div>
                                       <div>- Biết sử dụng ngôn ngữ lập trình <strong>HTML</strong>, hiểu được cấu trúc ngữ nghĩa của các thẻ HTML.</div>
                                       <div>- Sử dụng tốt <strong>CSS</strong> trong quá trình làm đẹp trang web, thành thạo các <strong>CSS preprocessor</strong> như: SCSS, SASS, LESS.</div>
                                       <div>- Có hiểu biết về ngôn ngữ <strong>Javascript</strong>, và đây là ngôn ngữ mà tôi rất thích.</div>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={2} className="content-block_language">
                            <Grid.Column className="img-description"
                                mobile={16} tablet={5} computer={5}
                                >
                                    <img src={Frameworks} alt="Frameworks" />
                            </Grid.Column>
                            <Grid.Column className="text-description"
                                mobile={16} tablet={11} computer={11}
                                >
                                       <div>- Sử dụng <strong>ReactJS</strong> trong 4 tháng liên tiếp với dự án thật. </div>
                                       <div>- Sử dụng thành thạo các thư viện hỗ trợ UI/UX cho React như <strong>Ant Design</strong>, <strong> React semantic</strong>, <strong>React Bootstrap</strong>.</div>
                                       <div>- Thường xuyên sử dụng các thư viện bên thứ ba như <strong>Axios</strong>, <strong>Fetch API</strong>, <strong>React router</strong>, <strong>Redux</strong>, <strong>Redux thunk</strong>...</div>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns={2} className="content-block_language">
                            <Grid.Column className="img-description"
                                mobile={16} tablet={5} computer={5}
                                >
                                    <img src={Databases} alt="Databases" />
                            </Grid.Column>
                            <Grid.Column className="text-description"
                                mobile={16} tablet={11} computer={11}
                                >
                                       <div>- Sử dụng thành thạo hệ quản trị cơ sở dữ liệu <strong>Microsoft SQL Server</strong>.</div>
                                       <div>- Am hiểu mức độ cơ bản về MySql thông qua các đồ án môn học, và các website wordpress.</div>
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>

                </div>
            </div>
        );
    }
}


export default Work;
