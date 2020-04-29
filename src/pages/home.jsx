import React from "react"
import styled from 'styled-components'
import {Link} from 'gatsby'

import SEO from "../components/seo"

import Image from "../components/image"

import ProjectsPreview from '../components/ProjectsPreview'
import ConnectPreview from '../components/ConnectPreview.jsx'
import Layout from '../components/layout'

import { Typography, Container, Box } from '@material-ui/core';
import { Section, Item } from '../components/BasicComponents'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import GitIcon from 'mdi-material-ui/Github'
import LinkedinIcon from 'mdi-material-ui/Linkedin'
import EmailIcon from 'mdi-material-ui/Email'

import Color from 'color'
import mediaqueries from '../components/mediaqueries'

//assets
import bgImage from '../images/Stars-MtCook.jpg'
import profileImage from '../images/jonte2-square.jpg'
import projects from '../data/projects'

//styled components



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

    ${mediaqueries.sm`
      margin-bottom: calc(-200px + 2vh);
   `}
`

const TextCenter = styled(Item)`
    text-align: center;
`
const TextCenterWithPadding = styled(Item)`
    padding: 7vh 0;
    text-align: center;
`
const H1 = styled.h1`
    color: ${props => props.theme.palette.primary.contrastText};
    font-size: 80pt;
    ${mediaqueries.sm`
      font-size: 50pt;
   `}
`
const H2 = styled.h2`
    color: ${props => props.theme.palette.secondary.main};
    font-size: 45pt;
    ${mediaqueries.sm`
      font-size: 20pt;
   `}
`
const H3 = styled.h3`
    color: ${props => props.theme.palette.text.primary};
    font-size: 20pt;
    ${mediaqueries.sm`
      font-size: 12pt;
   `}
`
const linkGit = 'https://github.com/jFrisks'
const linkLinkedin = 'https://www.linkedin.com/in/jonathanfrisk/'
const myEmail = 'frisk.jonte@gmail.com'
const openNewTab = (link) => window.open(link,'_blank', 'noreferrer')
const openLink = (link) => window.open(link, 'noreferrer')

//components
const HomePage = () => (
    <Layout>
        <SEO
            title="Home"
            description="Jonathan Frisk is a MsC student in Computer Science at Lund University. Junior Software Engineer. Java, Javascript, Node, React, Python, MongoDB. Full Stack"
            image={profileImage}
        />
        <HeroSection>
            <Container>
                <TextCenterWithPadding>
                    <H1>Smart Creative</H1>
                    <H2>Software Engineer</H2>
                    <H3>Web Developer - Marketing - Managment</H3>
                </TextCenterWithPadding>

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
                            <Button variant="contained" color="primary" onClick={() => openLink('mailto:'+myEmail)}>
                                <EmailIcon />
                                Email me
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={() => openNewTab(linkLinkedin)}>
                                <LinkedinIcon />
                                Connect on LinkedIn!
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={() => openNewTab(linkGit)}>
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