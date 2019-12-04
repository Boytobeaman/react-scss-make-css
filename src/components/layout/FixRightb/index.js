import React from 'react';
import './index.scss'

// using margin right 
class Home extends React.Component {
    render() {
        return (
            <div className="App">
              <div className="parent-content-wrap">
                    <div className="left-content">
                        <div className="list-content">
                        
                        </div>
                        <div className="list-content">
                        
                        </div>
                        <div className="list-content">
                        
                        </div>
                    </div>
                </div>
                <div className="right-content">
                    right fix content
                </div>
            </div>
        )
    }
}
export default Home;