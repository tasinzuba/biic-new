export const GET_ALL_UNIVERSITIES = `
  query GetAllUniversities {
    universities(first: 100) {
      nodes {
        id
        title
        slug
        featuredImage {
          node { sourceUrl altText }
        }
        universityData {
          worldRanking
          location
          establishedYear
          totalStudents
        }
      }
    }
  }
`;

export const GET_UNIVERSITY_BY_SLUG = `
  query GetUniversity($slug: ID!) {
    university(id: $slug, idType: SLUG) {
      id
      title
      content
      slug
      featuredImage {
        node { sourceUrl altText }
      }
      universityData {
        worldRanking
        location
        establishedYear
        totalStudents
        acceptanceRate
        tuitionFee
        scholarshipsAvailable
        courses {
          courseName
          courseLevel
          duration
          tuitionFee
        }
        requirements {
          ieltsScore
          minGpa
          requiredDocuments
        }
      }
    }
  }
`;
