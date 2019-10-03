import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Color from 'color'
import {Link} from 'gatsby'

import Image from "../components/image"

import { Typography, Box, ButtonGroup, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import MediaCard from '../components/MediaCard'

import GitIcon from 'mdi-material-ui/GithubCircle'
import { Item } from "./BasicComponents";
import ImageGridList from "./ImageGridList";

const ScrollableBox = styled.div`
    overflow: scroll;
    max-height: ${({height}) => height};
`

const StyledPaper = styled(Paper)`
    padding: ${({theme}) => theme.spacing(2, 2)};
    &.MuiPaper-root {
        background: rgba(0, 0, 0, 0.1);
    }
`
function Panel(props) {
    const { hidden, children } = props;

    return (
        <StyledPaper
            hidden={hidden}
        >
            {children}
        </StyledPaper>
    )
}


function ProjectsTab(props) {
    const {children, index, value, projects, ...other} = props;
    const openNewTab = (link) => window.open(link,'_blank', 'noreferrer')

    const mediaCardButtons = (sourceSrc, demoSrc) => (
        <>
            <Button size="small" color="primary" onClick={() => openNewTab(sourceSrc)}>
                <GitIcon />
                GIT
            </Button>
            <Button size="small" color="primary" onClick={() => openNewTab(demoSrc)}>
                Demo
            </Button>
        </>
    )

    return (
        <Panel
            hidden={value !== index}
        >
            <Grid
                container
                justify="center"
                alignItems="stretch"
                spacing={2}
            >
                {projects.map(project => (
                    <Grid key={project.id} item xs={12} sm={6} md={3} >
                        <MediaCard key={project.id} data={project} buttons={mediaCardButtons(project.source, project.demo)}/>
                    </Grid>
                ))}
            </Grid>
        </Panel>
    )
}

function ImageTab(props) {
    const {children, index, value, projects, ...other} = props;

    return (
        <Panel hidden={value !== index} >
            <ImageGridList projects={projects}/>
        </Panel>
    )
}

function ProjectsPreview(props) {
    const {projects, ...rest} = props;
    const [value, setValue] = React.useState(0);
    
    function handleClick(value) {
        setValue(value);
    }

    return (
        <>
            <Box display="flex" textAlign="center" justifyContent="center" alignItems="center" flexDirection="column">
                <Item>
                    <Typography variant="h3">Projects</Typography>
                    <Typography variant="h5" component="h4">My Portfolio</Typography>
                </Item>
                <Item>
                    <ButtonGroup
                    variant="contained"
                    color="secondary"
                    size="large"
                    aria-label="large contained secondary button group"
                    >
                        <Button onClick={() => handleClick(0)}>Programming</Button>
                        <Button onClick={() => handleClick(2)}>Leadership</Button>
                    </ButtonGroup>
                </Item>
                <Item>
                    <ProjectsTab key={0} index={0} value={value} projects={projects.programming} />
                    <ProjectsTab key={2} index={2} value={value} projects={projects.leadership} />
                </Item>
                
            </Box>
        </>
    )
}

export default ProjectsPreview;