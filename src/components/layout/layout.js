import React from 'react';
// import FixRight from './FixRight/index';
// import FixRightb from './FixRightb/index';
import FixLeft from './FixLeft/index';
import FixLeftRight from './FixLeftRight/index';

// using margin right 
class Home extends React.Component {
    render() {
        return (
            <div className="layout">
              {/* <FixRight /> */}
              {/* <hr /> */}
              {/* <FixRightb /> */}
              {/* <hr /> */}
              {/* <FixLeft /> */}
              {/* <hr /> */}
              <FixLeftRight />
            </div>
        )
    }
}
export default Home;