import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Contact</Link>
    <div data-netlify-identity-button>Login with Netlify Identity</div>
    <ThemeChanger/>
  </nav>
  
)