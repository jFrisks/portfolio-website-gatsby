import React from "react"
import styled from 'styled-components'

import Image from "../components/image"

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const ConnectWrapper = styled.div`
    position: relative;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    width: 60vw;
    height: 60vw;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    margin: auto;
`

const ImageWrapper = styled.p`
    height: 60%;
    width: 60%;
    margin: auto;
`
const ConnectCircle = styled.p`
    background: white;
    height: 10vw;
    width: 10vw;
`

function ConnectGrid(props) {

    return (
        <Grid>
            <ConnectCircle>GITHUB</ConnectCircle>
            <ConnectWrapper>
                <ImageWrapper>
                    <Image />
                </ImageWrapper>
            </ConnectWrapper>
            <ConnectCircle>LinkedIN</ConnectCircle>
        </Grid>
    )
}

export default ConnectGrid;