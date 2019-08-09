import React from "react"
import styled from 'styled-components'

import Image from "../components/image"

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const ConnectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const MiddleConnectWrapper = styled.div`
    position: relative;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    width: 60vw;
    height: 60vw;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
`
const ImageWrapper = styled.div`
    height: 60%;
    width: 60%;
    margin: auto;
`
const ConnectCircle = styled.div`
    align-self: flex-end;
    background: white;
    height: 10vw;
    width: 10vw;
    border-radius: 50%;
`

function ConnectGrid(props) {

    return (
        <ConnectWrapper>
            <ConnectCircle><p>GITHUB</p></ConnectCircle>
            <MiddleConnectWrapper>
                <ImageWrapper>
                    <Image />
                </ImageWrapper>
            </MiddleConnectWrapper>
            <ConnectCircle><p>LinkedIN</p></ConnectCircle>
        </ConnectWrapper>
    )
}

export default ConnectGrid;