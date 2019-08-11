import React from "react"
import styled from 'styled-components'
//import PropTypes from "prop-types"

//Libraries

//My Components

//Assets
import GitHubIcon from 'mdi-material-ui/GithubCircle'
import LinkedinIcon from 'mdi-material-ui/LinkedinBox'
import { Container } from "@material-ui/core";

const FooterWrapper = styled.footer`
    padding: ${({theme}) => theme.spacing(8, 0)};
    vertical-align: middle;
    background: ${({theme}) => theme.palette.primary.main};    
`

const Grid = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const IconWrap = styled.div`
    font-size: 5vh;
`

const Item = styled.div`
`

const Footer = () => (
    <FooterWrapper>
        <Container>
            <Grid>
                <Item>
                    © {new Date().getFullYear()}, Built by Jonathan Frisk with React and Gatsby
                </Item>
                <Item>
                    <IconWrap>
                        <GitHubIcon fontSize="inherit" color="secondary"/>
                        <LinkedinIcon fontSize="inherit" color="secondary"/>
                    </IconWrap>
                </Item>
            </Grid>
        </Container>
    </FooterWrapper>
)

export default Footer;