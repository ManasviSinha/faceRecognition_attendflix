import gql from 'graphql-tag';
//query to delete attendace from database
export const DELETE_ATTENDANCE_MUTATION = gql`
  mutation deleteAttendance($attendanceID: ID!) {
    deleteAttendance(attendanceID: $attendanceID) {
      _id
    }
  }
`;
