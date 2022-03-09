/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components';

import { Gray } from './themes/Gray'
import Header from './header'
import GlobalStyle from './GlobalStyle'

const Content = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
    padding-top: 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <ThemeProvider theme={Gray}>
      <GlobalStyle /> 
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <Content>
        <main>{children}</main> 
        <footer 
            style={{
                marginTop: `2rem`,
            }}
        >
            © { new Date().getFullYear() }, Built by
            {` `}
            <a href="https://www.michaelrinderle.com">Michael Rinderle</a>
        </footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
