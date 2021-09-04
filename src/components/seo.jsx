/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"


export const LayoutSEO = ({ siteTitle, lang }) => (
  <>
  </>
)

const SEO = ({ description, title }) => (
  <>
  </>
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
