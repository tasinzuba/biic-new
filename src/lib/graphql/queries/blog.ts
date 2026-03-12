export const GET_ALL_POSTS = `
  query GetAllPosts($first: Int = 12, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node { sourceUrl altText }
        }
        categories {
          nodes { name slug }
        }
        author {
          node { name }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      excerpt
      date
      slug
      featuredImage {
        node { sourceUrl altText }
      }
      categories {
        nodes { name slug }
      }
      author {
        node { name avatar { url } }
      }
    }
  }
`;
