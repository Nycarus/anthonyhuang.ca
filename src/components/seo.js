import {graphql, useStaticQuery} from "gatsby"
import React from "react"

const Seo = ({title, description, children}) => {
    const query = graphql`
        query SiteInfo{
            site{
                siteMetadata{
                    title,
                    description
                }
            }
        }
    `;

    const data = useStaticQuery(query).site.siteMetadata;
    
    const seo = {
        title: title || data.title,
        description: description || data.description
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta id="description" name="description" content={seo.description}/>
            <link id="icon" rel="icon" type="image/png" href={require("../../res/images/logo/logo.png").default}/>
            {children}
        </>
    )
}

export default Seo;