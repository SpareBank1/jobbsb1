
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import classNames from 'classnames';

export default () => (
  <StaticQuery
    query={graphql`
      query employeeQuery{
        allMarkdownRemark(
          limit: 16,
          filter: { fileAbsolutePath: {regex : "\/employees/"} },
          sort: {fields: [frontmatter___firstname], order: ASC},
        ){
          edges{
            node{
              frontmatter{
                path
                firstname
                role
                email
              }
            }
          }
        }
      }
    `}
    render={data => (
      data.allMarkdownRemark.edges.map(post => (
        <Link to={post.node.frontmatter.path} key={post.node.id} className={classNames('sb1-employee', 'sb1-employee--' + post.node.frontmatter.firstname)}>
          <h2 className="sb1-employee__heading">{post.node.frontmatter.firstname}</h2>
          <em className="sb1-employee__jobtitle">{post.node.frontmatter.role}</em>
          <ul className="sb1-employee__contact">
            <li>
              <a href={'mailto:' + post.node.frontmatter.email} className="sb1-employee__contact-link">
                <span className="sb1-employee__contact-link-icon">
                  <svg focusable="false" class="sb1ds-icon" viewBox="0 0 200 200"><path d="M12.41,25.5c-6.848,0-12.41,5.53-12.41,12.34v124.3c0,6.9,5.562,12.4,12.41,12.4h175.2c6.844,0,12.41-5.531,12.41-12.34v-124.3c0-6.87-5.6-12.4-12.4-12.4h-175.2zm7.938,14,159.3,0l-79.6,65-79.66-65zm-6.35,14.44l78.09,63.75c4.596,3.75,11.22,3.75,15.81,0l78.1-63.76v106.6h-172v-106.6z"></path></svg>
                </span>
                <span className="sb1-employee__contact-link-text">E-post</span>
              </a>
            </li>
            {/* <li>
              <button className="sb1-employee__contact-link">
                <span className="sb1-employee__contact-link-icon">
                  <svg focusable="false" class="sb1ds-icon" viewBox="0 0 200 200"><path d="m54.8 2.1c-29.3 0-52.6 22.8-52.6 51.3l0 46.7c0 28.5 23.3 51.3 52.2 51.3l0 37c0 5.3 6.3 10.4 12.9 10.4 2.9 0 6.2-1.1 8.7-3.2l53.8-44.2 16.4 0c29.3 0 52.6-22.8 52.6-51.3l0-47C198.5 25.3 175.1 2.1 146.2 2.1l-91.4 0zm-0.5 17.4 91.9 0c19 0 34.7 15.3 34.7 33.8l0 46.7c0 18.5-15.7 33.8-34.7 33.8l-22.7 0-5.1 4.2-46.5 37.8 0-42-17.9 0c-19 0-34.4-15.3-34.4-33.8l0-46.7c0-18.5 15.7-33.8 34.7-33.8z"></path></svg>
                </span>
                <span className="sb1-employee__contact-link-text">Chat</span>
              </button>
            </li> */}
          </ul>
        </Link>
        
      ))
    )}
  />
)
