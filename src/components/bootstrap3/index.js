import React from 'react';
import Header from '../bootstrap3header/index';
import Bs3button from '../bs3button/index';
import VideoShow from '../videoShow/index';
import TextShow from '../textShow/index';
import Layout from '../layout/layout';
import '../../scss/joinstyle.scss';
class Bootstrap3 extends React.Component {
  componentWillMount() {

  }
  
  render() {
    return ( 
      <div> 
        <Header/> 
        <div className="out-wrap hidden">
          <div className="container-fluid"> 
            <div className="row"> 
              <div className="col-sm-6"> 
                <div className="panel panel-default"> 
                  <div className="panel-heading"> Theme color </div> 
                  <div className="panel-body">
                    <div className="jumbotron theme-color-bg text-white">
                      theme color bg
                    </div>
                  </div> 
                </div> 
              </div> 
              <div className="col-sm-6"> 
                <div className="panel panel-default"> 
                  <div className="panel-heading"> Button style </div> 
                  <div className="panel-body">
                    <Bs3button/>
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>
        </div>
        <div>
          {/* <VideoShow/> */}
        </div>
        <div>
          {/* <TextShow/> */}
        </div>



        <div className="layout-wrap">
          <div>
            <Layout />
          </div>
        </div>
        
      </div>
    )
  }
}
export default Bootstrap3;