import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components'

//Library components
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const LeftSide = styled.div`
  flex: 1;
`

const Header = (props) => (
  <AppBar position="sticky" color="primary" >
    <Toolbar>
        <LeftSide></LeftSide>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/page-2" color="inherit" href="">Page 2</Button>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
        <Button component={Link} to="/resume" color="inherit">Resume</Button>
        <Button component={Link} to="/blog" color="inherit">Blog</Button>
        <Button component={Link} to="/contact" color="inherit">Contact</Button>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
