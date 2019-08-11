import React from "react"
import styled from 'styled-components'
import {Link} from 'gatsby'

import SEO from "../components/seo"

import Image from "../components/image"

import ProjectsPreview from '../components/ProjectsPreview'
import ConnectPreview from '../components/ConnectPreview.jsx'
import Layout from '../components/layout'

import { Typography, Container, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import GitIcon from 'mdi-material-ui/GithubCircle'
import LinkedinIcon from 'mdi-material-ui/LinkedinBox'

import Color from 'color'
import mediaqueries from '../components/mediaqueries'

//assets
import bgImage from '../images/Stars-MtCook.jpg'
import projects from '../data/projects'

//styled components

const Section = styled.div`
    padding: ${({theme}) => theme.spacing(8, 2)};
    position: relative;
`

const HeroSection = styled(Section)`
    background: ${({theme}) => `linear-gradient(${Color(theme.palette.primary.dark).alpha(0.5)}, ${Color(theme.palette.primary.dark).alpha(0.5)}), url(${bgImage})`};
    background-size: cover;
    background-position: bottom;
`
const ProjectSection = styled(Section)`
    background: ${({theme}) => `linear-gradient(${theme.palette.grey[50]}, ${theme.palette.grey[400]})`};
    padding-top: 200px;
`
const ContactCTASection = styled(Section)`
    background: ${({theme}) => `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.secondary.main}), url(${bgImage})`};
`
const Lower = styled.div`
    position: relative;
    margin: auto;
    margin-bottom: calc(-200px - 5vh);
    z-index: 300;
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
                <ProjectsPreview projects={projects}/>
            </Container>
        </ProjectSection>

        <ContactCTASection>
            <Container>
                <TextCenter>
                    <Typography variant="h3">Connect With Me!</Typography>
                    <Typography variant="h4">Jonathan Frisk</Typography>
                </TextCenter>
                    <Grid
                        container
                        justify="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Email me
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                <LinkedinIcon />
                                Connect on LinkedIn!
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary">
                                <GitIcon />
                                See my GitHub
                            </Button>
                        </Grid>
                    </Grid>
            </Container>
            
        </ContactCTASection>

    </Layout>
)

export default HomePage;