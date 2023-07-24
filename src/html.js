import React from "react"
import PropTypes from "prop-types"
import favicon from './images/sb1-icon.png';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" type="image/png" href={favicon} />
          //Google tag Manager
          <script type="text/javascript">
            !function(b,c,f,g,h,i,j){b[h]||(b[h]=function(){(b[h].q=b[h].q||[]).push(arguments)},b[h].q=b[h].q||[],i=c.createElement(f),j=c.getElementsByTagName(f)[0],i.async=1,i.src=g,j.parentNode.insertBefore(i,j))}(window,document,"script","https://cdn.ontame.io/Sparebank1.js","ontame");
          </script>
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
