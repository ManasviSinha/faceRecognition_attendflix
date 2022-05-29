import gql from 'graphql-tag';
//query to withdraw student from course
export const WITHDRAW_COURSE_MUTATION = gql`
  mutation withdrawCourse($id: ID!) {
    withdrawCourse(courseID: $id)
  }
`;
