import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="hero-text">
          <div className="headline">{data.site.siteMetadata.home.title}</div>
          <div 
            className="primary-content" 
            dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
          />
          <div className="hero-button">
            <Link to='/blog' className="button -primary">Mes stories &rarr;</Link>
            <a href="https://twitter.com/itz_dydy" target="_blank" rel="noopener noreferrer" className="button -primary button-second">Contactez moi &rarr;</a>
          </div>
        </div>
        <div className="hero-avatar">
          <img src="/assets/avatar.jpg" alt="avatar" className="avatar-img"/>
        </div>
      </div>
    )}
  />
)