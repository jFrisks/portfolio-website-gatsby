import React from "react"
import styled from 'styled-components'
import {Link} from 'gatsby'

import Image from "../components/image"

import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'


function ProjectsPreview(props) {
    const projects = [1, 2, 3, 4];

    return (
        <>
            <AppBar position="static">
                <Tabs aria-label="simple tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three"/>
                </Tabs>
            </AppBar>
            <Grid
                container
                justify="center"
                spacing={2}
            >
                {projects.map(project => (
                    <Grid item xs={3}>
                        <Paper>
                            <Typography variant="h5">HEJ</Typography>
                            <Typography variant="p">Detta är ett test </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProjectsPreview;