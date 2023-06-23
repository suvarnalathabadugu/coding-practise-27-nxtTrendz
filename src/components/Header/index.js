// Write your JS code here

import './index.css'
import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="nav-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo"
              alt="website logo"
            />
            <button type="button" className="nav-mobile-btn">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
                className="nav-bar-image"
                alt="nav logout"
              />
            </button>
          </div>
          <div className="nav-bar-desktop-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo"
              alt="website logo"
            />
            <div className="nav-bar-desktop-container-text">
              <ul className="nav-menu-items-list">
                <li className="nav-menu-item">Home</li>
                <li className="nav-menu-item">Products</li>
                <li className="nav-menu-item">Cart</li>
              </ul>
              <button type="button" className="logout-desktop-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-nav-menu">
          <ul className="mobile-nav-items">
            <li className="mobile-nav-items">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                className="nav-bar-image"
                alt="nav home"
              />
            </li>
            <li className="mobile-nav-items">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                className="nav-bar-image"
                alt="nav product"
              />
            </li>
            <li className="mobile-nav-items">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
                className="nav-bar-image"
                alt="nav cart"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
