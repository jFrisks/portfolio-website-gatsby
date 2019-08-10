import React from "react"
import styled from 'styled-components'
import Color from 'color'

import Image from "../components/image"
/* <Image src="gatsby-astronaut.png"/> */
import JonteImage from '../images/jonte2-square.jpg'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const ConnectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Circle = styled.div`
    display: flex;
    background: ${props => `linear-gradient(${Color(props.theme.palette.secondary.light).alpha(0.2)}, ${Color(props.theme.palette.secondary.main)})`};
    border-radius: 50%;
`

const MiddleConnectWrapper = styled(Circle)`
    position: relative;
    width: 60vw;
    height: 60vw;
    max-width: 400px;
    max-height: 400px;
`
const ImageWrapper = styled.div`
    height: 60%;
    width: 60%;
    margin: auto;
`
const ConnectCircle = styled(Circle)`
    align-self: flex-start;
    height: 10vw;
    width: 10vw;
    align-items: center;
    justify-content: center;
`

function ConnectGrid(props) {

    return (
        <ConnectWrapper>
            <ConnectCircle><p>GITHUB</p></ConnectCircle>
            <MiddleConnectWrapper>
                <ImageWrapper>
                    <img src={JonteImage}></img>
                </ImageWrapper>
            </MiddleConnectWrapper>
            <ConnectCircle><p>LinkedIN</p></ConnectCircle>
        </ConnectWrapper>
    )
}

export default ConnectGrid;