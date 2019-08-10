import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Link} from 'gatsby'

import Image from "../components/image"

import { Typography, Box, ButtonGroup, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import MediaCard from '../components/MediaCard'

const StyledPaper = styled(Paper)`
    padding: ${({theme}) => theme.spacing(3, 2)};
`

function ProjectsPreview(props) {
    const {projects, ...rest} = props;

    const mediaCardButtons = (
        <>
            <Button size="small" color="primary">
                GIT
            </Button>
            <Button size="small" color="primary">
                Demo
            </Button>
        </>
    );

    return (
        <>
            <Box textAlign="center">
                <Typography variant="h3">Projects</Typography>
                <Typography variant="h5" component="h4">My Portfolio</Typography>
                <ButtonGroup
                variant="contained"
                color="secondary"
                size="large"
                aria-label="large contained secondary button group"
                >
                    <Button>Programming</Button>
                    <Button>Marketing / Design</Button>
                    <Button>Leadership</Button>
                </ButtonGroup>
                <Grid
                    container
                    justify="center"
                    alignItems="stretch"
                    spacing={2}
                >
                    {projects.map(project => (
                        <Grid item xs={12} sm={6} md={3} >
                            <MediaCard data={project} buttons={mediaCardButtons}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default ProjectsPreview;