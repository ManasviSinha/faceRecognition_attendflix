import gql from 'graphql-tag';
//query to edit user profile in database
export const EDIT_PROFILE_MUTATION = gql`
  mutation editProfile(
    $firstName: String!
    $lastName: String!
    $cardID: String!
    $profilePicture: String
  ) {
    editProfile(
      firstName: $firstName
      lastName: $lastName
      cardID: $cardID
      profilePicture: $profilePicture
    ) {
      _id
      email
      firstName
      lastName
      cardID
      profilePictureURL
      userLevel
      createdAt
      token
    }
  }
`;
