import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'


const LearningPage = () => {
    return (
        <Layout>
            <h1>A page for my dev tutoring</h1>
            <Link to='/'>home</Link>
        </Layout>
    )
}

export default LearningPage