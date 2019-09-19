import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'


const contactPage = () => {
    return (
        <Layout>
            <h1 class='pageHeader'>
                get in touch.
            </h1>
            <Link to='index'>home</Link>
        </Layout>
    )
}

export default contactPage