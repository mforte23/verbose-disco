import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

import headerStyles from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    return (
        <header className={headerStyles.header}>
            <div class="logo">
                <h2>
                    <Link className={headerStyles.logo} to='/'>
                        {data.site.siteMetadata.title}
                    </Link>
                </h2>
            </div>
            <ul className={headerStyles.navLinks}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to='/projects'>projects</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/writing'>writing</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/learning'>learning</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>human in progress</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>contact</Link></li>
            </ul>
        </header>
    )
}

export default Header