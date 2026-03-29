export const GET_SITE_SETTINGS = `
  query GetSiteSettings {
    generalSettings {
      title
      description
      url
    }
  }
`;

// Add this query once ACF Options Page + WPGraphQL for ACF is configured in WordPress:
// siteSettings {
//   logo { node { sourceUrl altText mediaDetails { width height } } }
//   logoDark { node { sourceUrl altText } }
// }
