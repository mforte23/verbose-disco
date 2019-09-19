import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

import '../css/style.scss'


const indexPage = () => {
    return (
        <Layout>
            <h1>Hello There!</h1>
            <h2>I'm Mark, a full stack developer from the Philadelphia area.</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
}

export default indexPage


