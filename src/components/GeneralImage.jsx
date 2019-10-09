import React from "react"
import styled from 'styled-components'
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  height: 100%;
  object-fit: cover;
`

const GeneralImage = ({ imgName }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.edges.find(
    edge => edge.node.fluid.originalName === imgName
  )
  if (!image) {
    return null
  }

  return (
    <StyledImage fluid={image.node.fluid} />
  )
}

export default GeneralImage