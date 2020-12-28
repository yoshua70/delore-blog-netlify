import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    
    <Link to="/blog">Blog</Link>
    <a href="https://twitter.com/itz_dydy" target="_blank" rel="noopener noreferrer">
      Twitter
    </a>
    <ThemeChanger/>
  </nav>
  
)