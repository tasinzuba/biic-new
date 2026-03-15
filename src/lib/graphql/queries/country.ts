export const GET_ALL_COUNTRIES = `
  query GetAllDestinations {
    allDestination(first: 100) {
      nodes {
        id
        title
        slug
        featuredImage {
          node { sourceUrl altText }
        }
        destinationData {
          flag
          heroSubtitle
          stats {
            statNumber
            statLabel
            statIcon
          }
        }
      }
    }
  }
`;

export const GET_COUNTRY_BY_SLUG = `
  query GetDestination($slug: String!) {
    destinationBy(slug: $slug) {
      id
      title
      slug
      featuredImage {
        node { sourceUrl altText }
      }
      destinationData {
        flag
        heroSubtitle
        description
        tuitionRange
        stats {
          statNumber
          statLabel
          statIcon
        }
        whyStudy {
          icon
          title
          description
        }
        gallery {
          label
          image {
            node { sourceUrl altText }
          }
        }
        topUniversities {
          name
          ranking
          location
          image {
            node { sourceUrl altText }
          }
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
        intakes {
          name
          badge
          badgeColor
          icon
          startDate
          applicationDeadline
          visaDeadline
          status
          statusLabel
          note
          courses
        }
        successStories {
          studentName
          university
          course
          year
          studentFlag
          story
          rating
          photo {
            node { sourceUrl altText }
          }
        }
        faq {
          question
          answer
        }
      }
    }
  }
`;
