import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'


const portfolio = () => {
    return (
        <Layout>
            <h1 class='pageHeader'>
                projects &amp; clients.
            </h1>
            <Link to='/'>home</Link>
        </Layout>
    )
}

export default portfolio