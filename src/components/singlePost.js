`query MyQuery {
    mdx(id: {eq: "4b6aaea9-7b68-5bc4-b98e-acb1effbc4a9"}) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              base64
              tracedSVG
              aspectRatio
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
  }
  `