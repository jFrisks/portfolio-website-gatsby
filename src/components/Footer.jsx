import React from "react"
import styled from 'styled-components'
//import PropTypes from "prop-types"

//Libraries
import { Container, Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link'
//My Components

//Assets
import GitHubIcon from 'mdi-material-ui/Github'
import LinkedinIcon from 'mdi-material-ui/Linkedin'
import EmailIcon from 'mdi-material-ui/Email'

const FooterWrapper = styled.footer`
    padding: ${({theme}) => theme.spacing(8, 0)};
    vertical-align: middle;
    background: ${({theme}) => theme.palette.primary.main};    
`

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const IconWrap = styled.div`
    font-size: 5vh;
`

const Item = styled.div`
    text-align: center;
`

const Footer = () => (
    <FooterWrapper>
        <Container>
            <Grid>
                <Item>
                    <Typography variant="subtitle2" color="secondary">© {new Date().getFullYear()}, Built by Jonathan Frisk with React and Gatsby</Typography>
                </Item>
                <Item>
                    <IconWrap>
                        <Link href="https://github.com/jFrisks" target="_blank" rel="noreferrer">
                            <GitHubIcon fontSize="inherit" color="secondary"/>
                        </Link>
                        <Link href="https://linkedin.com/in/jonathanfrisk/" target="_blank" rel="noreferrer">
                            <LinkedinIcon fontSize="inherit" color="secondary"/>
                        </Link>
                        <Link href="mailto:frisk.jonte@gmail.com">
                            <EmailIcon fontSize="inherit" color="secondary"/>
                        </Link>
                    </IconWrap>
                </Item>
            </Grid>
        </Container>
    </FooterWrapper>
)

export default Footer;