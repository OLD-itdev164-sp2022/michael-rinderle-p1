import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Outer = styled.header`
    background: ${props => props.theme.header.backgroundColor};
    margin-bottom: 1rem;
`

const Inner = styled.div`
    margin: 0px auto;
    max-width: 960px;
    padding-top: .5em;
    padding-left: .5em;
    padding-right: .5em;
`;

const H1 = styled.h1`
    margin: 0px;
`
const P1 = styled.h1`
    padding-top: .5em;
    padding-bottom: .5em;
    font-size: 1em;
`
const StyledLink = styled(Link)`
    color: white;
    text-decorations: none;
    &:hover {
        color: purple;
    }
`

const Header = ({ siteTitle }) => (
    <Outer>  
        <Inner>
            <H1>
                <StyledLink to='/'>
                    { siteTitle } 
                </StyledLink>   
            </H1>
            <P1>Learn the history of the world's best rally car</P1>
        </Inner>
    </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
