import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'

const NotFound = () => {
    return (
        <Layout>
            <h1>Page NOT FOUND</h1>
            <p><Link to="/">Go Fish</Link></p>
        </Layout>
    )
}

export default NotFound