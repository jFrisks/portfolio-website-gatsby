import React from "react"
import styled from 'styled-components'
import Color from 'color'

import Image from "../components/image"
/* <Image src="gatsby-astronaut.png"/> */
import JonteImage from '../images/jonte2-square.jpg'
import GitIcon from 'mdi-material-ui/GithubCircle'
import LinkedinIcon from 'mdi-material-ui/LinkedinBox'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'

const ConnectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`

const IconWrapper = styled.div`
    display: flex;
    font-size: 8vw;
`

const Circle = styled(ButtonBase)`
    display: flex;
    background: ${props => `linear-gradient(${Color(props.theme.palette.secondary.light).alpha(0.2)}, ${Color(props.theme.palette.secondary.main)})`};
    border-radius: 50%;
    transition: ${({theme}) => theme.transitions.create('all')};

    &:hover {
        background: ${props => `linear-gradient(${props.theme.palette.secondary.light}, ${props.theme.palette.secondary.main})`};
    }
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
    display: flex;
    height: 10vw;
    width: 10vw;
    align-items: center;
    justify-content: center;
`

function ConnectGrid(props) {

    return (
        <ConnectWrapper>
            <ConnectCircle>
                <IconWrapper>
                    <GitIcon fontSize='inherit' color="primary"/>
                </IconWrapper>
            </ConnectCircle>
            <MiddleConnectWrapper>
                <ImageWrapper>
                    <img src={JonteImage}></img>
                </ImageWrapper>
            </MiddleConnectWrapper>
            <ConnectCircle>
                <IconWrapper>
                    <LinkedinIcon fontSize='inherit' color="primary"/>
                </IconWrapper>
            </ConnectCircle>
        </ConnectWrapper>
    )
}

export default ConnectGrid;