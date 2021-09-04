/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import PropTypes from "prop-types"
 import { Helmet } from "react-helmet"
 
 export const LayoutSEO = ({ siteTitle, lang }) => (
   <Helmet
     htmlAttributes={{
       lang,
     }}
     titleTemplate={`%s | ${siteTitle}`}
   >
     <link rel="manifest" href="/manifest.webmanifest" />
     <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
     <meta name="robots" />

   </Helmet>
 )
 
 const SEO = ({ description, title }) => (
   <Helmet
     title={title}
     meta={[
       {
         name: "description",
         content: description,
       },
       {
         property: "og:title",
         content: title,
       },
       {
         property: "og:description",
         content: description,
       },
       {
         property: "og:type",
         content: "website",
       },
       {
         name: "twitter:card",
         content: "summary",
       },
       {
         name: "twitter:title",
         content: title,
       },
       {
         name: "twitter:description",
         content: description,
       },
     ]}
   />
 )
 
 LayoutSEO.defaultProps = {
   lang: "nb",
 }
 
 LayoutSEO.propTypes = {
   lang: PropTypes.string,
   siteTitle: PropTypes.string.isRequired,
 }
 
 SEO.defaultProps = {
   title: null,
   description: "",
 }
 
 SEO.propTypes = {
   title: PropTypes.string,
   description: PropTypes.string,
 }
 
 export default SEO
 