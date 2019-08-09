import React from "react"
import styled from 'styled-components'
import {Link} from 'gatsby'

import Image from "../components/image"
import SEO from "../components/seo"

import ProjectsPreview from '../components/ProjectsPreview'
import ConnectPreview from '../components/ConnectPreview.jsx'
import Layout from '../components/layout'

import { Typography, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'


//assets
import bgImage from '../images/Stars-MtCook.jpg'

//styled components

const Section = styled.div`
    position: relative;
    background: ${props => `linear-gradient(${props.theme.veryDarkColor50}, ${props.theme.veryDarkColor50}), url(${bgImage})`};
    background-size: cover;
    background-position: bottom;
    z-index: 1000;
`
const TextCenter = styled.div`
    text-align: center;
`

const FullScreenOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
`

//components
const HomePage = () => (
    <Layout>
        <Section>
            <Container>
                <SEO title="Home" />
                <TextCenter>
                    <Typography variant="h3">Creative</Typography>
                    <Typography variant="h2">Software Engineer</Typography>
                    <Typography variant="h4">Web Developer - Marketing - Managment</Typography>
                </TextCenter>

                <ConnectPreview />
                <ProjectsPreview/>
                <Link to="/page-2/">Go to page 2</Link>
            </Container>
        </Section>
    </Layout>
)

export default HomePage;