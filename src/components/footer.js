import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }

    `)

    return (
        <footer class='container'>
            <p>&copy; copyright 2019 {data.site.siteMetadata.author}. All rights reserved.</p>
        </footer>
    )
}

export default Footer