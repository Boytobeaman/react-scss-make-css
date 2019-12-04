import React from 'react';
import './index.scss'


class Home extends React.Component {
    render() {
        return (
            <div className="App">
              <div className="parent-content-wrap">
                    <div className="left-content">
                        left fix content
                    </div>
                    <div className="right-content">
                        content
                    </div>
                </div>
                <div>content</div>
            </div>
        )
    }
}
export default Home;