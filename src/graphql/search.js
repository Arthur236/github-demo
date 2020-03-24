import gql from "graphql-tag";

export const searchUser = gql`
  query searchUser($login: String!) {
    user(login: $login) {
      id
      avatarUrl
      bio
      websiteUrl
      createdAt
      email
      name
      organization(login: $login) {
        email
        name
      }
      topRepositories(first: 1, orderBy: { field: NAME, direction: ASC }) {
        edges {
          node {
            url
            name
          }
        }
      }
    }
  }
`;
