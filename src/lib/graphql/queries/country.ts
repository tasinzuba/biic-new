export const GET_ALL_COUNTRIES = `
  query GetAllCountries {
    countries(first: 100) {
      nodes {
        id
        title
        slug
        featuredImage {
          node { sourceUrl altText }
        }
        countryData {
          heroSubtitle
          stats {
            statNumber
            statLabel
          }
        }
      }
    }
  }
`;

export const GET_COUNTRY_BY_SLUG = `
  query GetCountry($slug: ID!) {
    country(id: $slug, idType: SLUG) {
      id
      title
      content
      slug
      featuredImage {
        node { sourceUrl altText }
      }
      countryData {
        heroSubtitle
        stats {
          statNumber
          statLabel
        }
        requirements {
          ieltsScore
          minGpa
          documents
        }
        costOfLiving {
          accommodation
          food
          transport
          total
        }
        faq {
          question
          answer
        }
      }
    }
  }
`;
