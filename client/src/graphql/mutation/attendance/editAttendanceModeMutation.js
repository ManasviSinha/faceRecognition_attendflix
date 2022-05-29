import gql from "graphql-tag";
//query to edit attendance in database
export const EDIT_ATTENDANCE_MODE_MUTATION = gql`
  mutation editAttendanceMode($attendanceID: ID!, $mode: String!) {
    editAttendanceMode(attendanceID: $attendanceID, mode: $mode) {
      _id
      course {
        _id
        shortID
        name
        code
        session
      }
      date
      time
      mode
    }
  }
`;
