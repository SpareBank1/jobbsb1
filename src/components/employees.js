
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import classNames from 'classnames';

export default () => (
  <StaticQuery
    query={graphql`
      query employeeQuery{
        allMarkdownRemark(
          limit: 15,
          filter: { fileAbsolutePath: {regex : "\/employees/"} },
          sort: {fields: [frontmatter___date], order: DESC},
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
          <h2 className="ffe-h5 sb1-employee__heading">{post.node.frontmatter.firstname}</h2>
          <em className="sb1-employee__jobtitle">{post.node.frontmatter.role}</em>
          <ul className="sb1-employee__contact">
            <li>
              <a href={'mailto:' + post.node.frontmatter.email} className="sb1-employee__contact-link">
                <span className="sb1-employee__contact-link-text">E-post</span>
              </a>
            </li>
            <li>
              <button className="sb1-employee__contact-link">
                <span className="sb1-employee__contact-link-text">Chat</span>
              </button>
            </li>
          </ul>
        </Link>
        
      ))
    )}
  />
)
