import React from 'react';
import './index.scss'


class Home extends React.Component {
    render() {
        return (
            <div className="App">
              <div className="parent-content-wrap">
                    <div className="left-content">
                      left content
                    </div>
                    <div className="right-content">
                      right content
                    </div>
                    <div className="center-content">
                      fix  center content
                    </div>
                </div>
                {/* <div>content</div> */}
            </div>
        )
    }
}
export default Home;