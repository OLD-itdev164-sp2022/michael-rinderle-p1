import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import Seo from "../components/seo"

const EvoHeader = styled.p`
    font-size: 1.2em;
    padding-bottom: 1.5em;
`
const EvoContainer = styled.li`
    font-size: 1.5em;
    list-style-type: none;
    text-align: center;
    margin-bottom: 1.45rem;
`
const EvoImg = styled.div`
    padding: .75em;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Evolution of the Evo" />
    <EvoHeader>
       The Mitsubishi Lancer Evolution is considered the best rally race car 
       in the world. It's reign lasted from from 1994 to 2016 before it was
       unfortunately discontinued. Learn more about each evolution of this 
       great competitor.
    </EvoHeader>
    <ul>
    {
      data.allContentfulEvo.edges?.map(edge => (
        <EvoContainer>
            <Link to={`/evo/${edge.node.slug}`} key={edge.node.id}>{edge.node.model}</Link>
            <EvoImg>
                <GatsbyImage
                    image={edge.node.carImage.gatsbyImageData}
                    alt={edge.node.slug}/>
            </EvoImg>    
        </EvoContainer>
      ))
    }
    </ul>
    <p>Car information credit : <a href="https://en.wikipedia.org/wiki/Mitsubishi_Lancer_Evolution">Wikipedia</a></p>
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  allContentfulEvo(sort: { order: ASC, fields: created }) {
    edges {
      node {
        model
        created
        description {
          raw
        }
        carImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300)
        }
        id
        slug
      }
    }
  }
}
`