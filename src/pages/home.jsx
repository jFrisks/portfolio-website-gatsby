import React from "react"
import styled from 'styled-components'
import {Link} from 'gatsby'

import SEO from "../components/seo"

import Image from "../components/image"

import ProjectsPreview from '../components/ProjectsPreview'
import ConnectPreview from '../components/ConnectPreview.jsx'
import Layout from '../components/layout'

import { Typography, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'

import Color from 'color'
import mediaqueries from '../components/mediaqueries'

//assets
import bgImage from '../images/Stars-MtCook.jpg'

//styled components
const padding = '5vh';

const Section = styled.div`
    padding-top: ${padding};
    padding-bottom: ${padding};
    position: relative;
`

const HeroSection = styled(Section)`
    background: ${props => `linear-gradient(${Color(props.theme.palette.primary.dark).alpha(0.5)}, ${Color(props.theme.palette.primary.dark).alpha(0.5)}), url(${bgImage})`};
    background-size: cover;
    background-position: bottom;
`
const ProjectSection = styled(Section)`
    background: ${props => `linear-gradient(${props.theme.palette.grey[50]}, ${props.theme.palette.grey[400]})`};
    padding-top: 250px;
`

const Lower = styled.div`
    position: relative;
    margin: auto;
    margin-bottom: calc(-200px - 5vh);
    z-index: 1300;
`

const TextCenter = styled.div`
    text-align: center;
`
const H1 = styled.h1`
    color: ${props => props.theme.palette.primary.contrastText};
    font-size: 80pt;
`
const H2 = styled.h2`
    color: ${props => props.theme.palette.secondary.main};
    font-size: 45pt;
`
const H3 = styled.h3`
    color: ${props => props.theme.palette.text.primary};
    font-size: 20pt;
    ${mediaqueries.sm`
      font-size: 1em;
   `}
`

//components
const HomePage = () => (
    <Layout>

        <HeroSection>
            <Container>
                <SEO title="Home" />
                <TextCenter>
                    <H1>Smart Creative</H1>
                    <H2>Software Engineer</H2>
                    <H3>Web Developer - Marketing - Managment</H3>
                </TextCenter>

                <Lower>
                    <ConnectPreview />
                </Lower>
            </Container>
        </HeroSection>

        <ProjectSection>
            <Container>
                <ProjectsPreview />
            </Container>
        </ProjectSection>

    </Layout>
)

export default HomePage;