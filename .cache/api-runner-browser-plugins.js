module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1200}}],"extensions":[".mdx"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/martinclementz/Desktop/Apps/my-gatsby-site"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"GatsbyJS","short_name":"GatsbyJS","start_url":"/","background_color":"#6b37bf","theme_color":"#6b37bf","display":"standalone","icon":"src/images/icons/icon.png","crossOrigin":"use-credentials","cache_busting_mode":"none","legacy":true,"theme_color_in_head":true,"include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"workboxConfig":{"globPatterns":["src/images/icons/icon.png"]}},
    }]
