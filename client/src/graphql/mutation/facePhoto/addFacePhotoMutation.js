import gql from 'graphql-tag';
//query for server processing of face photo
export const ADD_FACE_PHOTO_MUTATION = gql`
  mutation addFacePhoto(
    $photoData: String!
    $faceDescriptor: String!
  ) {
    addFacePhoto(
      photoData: $photoData
      faceDescriptor: $faceDescriptor
    ) {
      faceDescriptor
      photoURL
    }
  }
`;
