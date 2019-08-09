import React from "react"
import styled from 'styled-components'
import {Link} from 'gatsby'

import Image from "../components/image"

import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'


function ProjectsPreview(props) {
    const projects = [1, 2, 3, 4, 5];

    return (
        <Grid
            container
            justify="center"
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
    )
}

export default ProjectsPreview;