import gql from 'graphql-tag';
//query to enrol student in course
export const ENROL_COURSE_MUTATION = gql`
  mutation enrolCourse($id: ID!) {
    enrolCourse(courseID: $id)
  }
`;
