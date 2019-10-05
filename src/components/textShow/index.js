import React from 'react';
import { NavLink } from 'react-router-dom'
import { APP_NAME } from '../../util'
import './text.scss'

class VideoShow extends React.Component{
	render(){
		return (
      <div>
        <section className="text-section text-center mt-1">
          <div className="text-header h2 font-weight-bold">
            ABOUT US
          </div>
          <div className="text-header h3 theme-color hidden-xs">
            Plastic Crates Manufacturer & Supplier
          </div>
          <hr/>
          <div className="text-header h3 theme-color visible-xs">
            Plastic Crates Manufacturer<br/>
            & Supplier
          </div>
          <div className="text-detail h4 p-3" style={{lineHeight:"1.2"}}>
            Get the best deal for plastic moving boxes, collapsible plastic crates, stackable plastic crates, pallet boxes from Chinese manufacture directly. Specialised in plastics boxes crates for storage, logistics & transport.
          </div>
          <div>
          <a type="button" href="/contact-us/" className="btn btn-danger">Learn more</a>
          </div>
          <hr/>
          <div className="text-detail h4 p-3 visible-xs" style={{lineHeight:"1.2"}}>
            Look no further, we strive for mutual benefit and look to build a long lasting business relationship.
          </div>
        </section>
        <section className="text-section text-center mt-1 container">
          <div className="text-header h2 font-weight-bold">
            Featured Products
          </div>
          <hr/>
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <a href="/product-category/folding-crates/">
                <img className="img-responsive" src="/wp-content/uploads/2019/09/collapsible-crates.jpg"/>
              </a>
              <a href="/product-category/folding-crates/">
                <span className="h5 font-weight-bold cat-name-title">
                  Collapsible Plastic Crates
                </span>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a href="/product-category/attached-lid-distribution-containers/">
                <img className="img-responsive" src="/wp-content/uploads/2019/09/attached-lid-containers.jpg"/>
              </a>
              <a href="/product-category/attached-lid-distribution-containers/">
                <span className="h5 font-weight-bold cat-name-title">
                  Attached Lid Container
                </span>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a href="/product-category/plastic-stacking-crates/">
                <img className="img-responsive" src="/wp-content/uploads/2019/10/eub360270.jpg"/>
              </a>
              <a href="/product-category/plastic-stacking-crates/">
                <span className="h5 font-weight-bold cat-name-title">
                  Stacking Plastic Crates
                </span>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a href="/product-category/plastic-pallet-box/">
                <img className="img-responsive" src="/wp-content/uploads/2019/10/plastic-coaming-pack-container.png"/>
              </a>
              <a href="/product-category/plastic-pallet-box/">
                <span className="h5 font-weight-bold cat-name-title">
                  Plastic Pallet Boxes
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>

      
		)
	}
}

export default VideoShow;