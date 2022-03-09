import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout';
import styled from 'styled-components'
import React from 'react';

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const Model = styled.div`
    font-size: 1.50em;
    font-weight: bold;
    padding-bottom: .5em;
`
const Year = styled.div`

    padding-top: .5em;
    padding-bottom: .5em;
`
const Description = styled.div`
    padding-top: .75em;
    font-size: .75em;
`

const EvoPost = ({ data }) => {
  const { model, year, description, carImage } = data.contentfulEvo;

  return (
    <Layout>
      <Model>{ model }</Model>
      <Year>{ year }</Year>
      <GatsbyImage image={carImage.gatsbyImageData}/>   
      <Description>{renderRichText(description, options)}</Description>
      <p>Car information credit : <a href="https://en.wikipedia.org/wiki/Mitsubishi_Lancer_Evolution">Wikipedia</a></p>
    </Layout>
  );
}

export default EvoPost;

export const evoQuery = graphql`
query evoPostQuery($slug: String) {
    contentfulEvo(slug: {eq: $slug}) {
        model
        created
        year
        description {
            raw
        }
        carImage {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 450)
        }
        id
        slug
    }
}
`