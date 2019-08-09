import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout'

import { Typography } from '@material-ui/core';

const ContactPage = () => {
    return(
        <Layout>
            <SEO title="Contact" />
            <Typography>CONTACT PAGE</Typography>
        </Layout>
    )
}

export default ContactPage;