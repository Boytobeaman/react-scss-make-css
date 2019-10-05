import React from 'react';
import './video.scss'

class VideoShow extends React.Component{
	render(){
		return (
      <section className="video-section">
        <div className="video-wrap">
					<div className="video-bg-img video-bg-img-a">
						<div className="video-bg-overlay"></div>
							<div className="video-text">
								<h1 className="h2 video-text-header hidden-xs">
									Wholesale plastic products
								</h1>
								<h1 className="h2 video-text-header visible-xs">
									<span className="h1 text-danger" style={{fontSize: "55px",fontWeight:"bold"}}>
										Wholesale
									</span>
									<br/>
									<span className="h4">
										Plastic crates
									</span>
									<br/>
									<span className="h4">
										Plastic pallet boxes
									</span>
									<br/>
									<span className="h4">
										Plastic moving boxes
									</span>
									<br/>
									<span className="h4">
										Stacking plastic boxes
									</span>
									<br/>
									<span className="h3">
										... etc.
									</span>
									<br/>
								</h1>
								<h4 className="h3 video-text-detail hidden-xs">Look no further, we strive for mutual benefit and look to build a long lasting business relationship.</h4>
								<div className="h3 btn-wrap">
									<button type="button" className="btn btn-danger">Realiable Manufacturer</button>
									<button type="button" className="btn btn-danger">Quality Assurance</button>
									<button type="button" className="btn btn-danger">Trade Assurance</button>
								</div>

							</div>
							<div className="video-inner-wrap">
								<video width="100%" controls>
									<source src="https://www.chinaboxsale.com/wp-content/uploads/2019/10/joinplastic-factory-show.mp4" type="video/mp4" />
									Your browser does not support HTML5 video.
								</video>
							</div>
						
						
					</div>
        </div>
      </section>
			
		)
	}
}

export default VideoShow;