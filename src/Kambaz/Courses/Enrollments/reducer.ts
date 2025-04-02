import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: [] as any[],
  enrolledCourseIds: [] as string[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    loadEnrollments: (state, { payload: userId }) => {
      state.enrolledCourseIds = state.enrollments
        .filter((e) => e.user === userId)
        .map((e) => e.course);
    },

    enroll: (state, { payload: enrollment }) => {
      const { userId, courseId } = enrollment;
      if (!state.enrolledCourseIds.includes(courseId)) {
        const newEnrollment = {
          _id: uuidv4(),
          user: userId,
          course: courseId,
        };
        state.enrollments = [...state.enrollments, newEnrollment];
        state.enrolledCourseIds = [...state.enrolledCourseIds, courseId];
      }
    },

    unenroll: (state, { payload: enrollment }) => {
      const { userId, courseId } = enrollment;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      );
      state.enrolledCourseIds = state.enrolledCourseIds.filter(
        (id) => id !== courseId,
      );
    },

    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
  },
});

export const { loadEnrollments, enroll, unenroll, setEnrollments } =
  enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
