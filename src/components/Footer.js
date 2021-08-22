import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_col">
          <span className="footer_colHeader">
            COMPANY
          </span>
          <span className="footer_colDesc">
            Shipping
          </span>
          <span className="footer_colDesc">
            Return Policy
          </span>
          <span className="footer_colDesc">
            Work With Us
          </span>
          <span className="footer_colDesc">
            Terms & Conditions
          </span>
        </div>
        <div className="footer_col">
          <span className="footer_colHeader">
            FOLLOW US OUT THERE
          </span>
          <span className="footer_colDesc">
            <div className="items">
              <FacebookIcon />
              Facebook
            </div>
          </span>
          <span className="footer_colDesc">
            <div className="items">
              <TwitterIcon />
              Twitter
            </div>
          </span>
          <span className="footer_colDesc">
            <div className="items">
              <PinterestIcon />
              Pinterest
            </div>
          </span>
          <span className="footer_colDesc">
            <div className="items">
              <InstagramIcon />
              Instagram
            </div>
          </span>
        </div>
        <div className="footer_col">
          <span className="footer_colHeader">
            THANK YOU
          </span>
          <span className="footer_colDesc">
            Thank you to the wonderful folks over at Herbicore for letting us use their beautiful imagery in the demo. Head over to their store to shop there full catalog of amazing products.
          </span>
        </div>
        <div className="footer_col">
          <span className="footer_colHeader">
            NEWSLETTER
          </span>
          <div className="footer_colDesc">
            <div className="mail_bar">
              <input type="text" placeholder="your@email.com" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer_bottomLeft">
          <p>Copyright © 2020 <span>Grid Bright.</span></p>
          <span>Powered by Shopify</span>
        </div>
        <div className="footer_bottomRight">
          <p>CAD $</p>
          <ExpandMoreSharpIcon className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Footer
