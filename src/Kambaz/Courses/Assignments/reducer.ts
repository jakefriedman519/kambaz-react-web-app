import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
  currentAssignmentId: null,
  creating: false,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: assignment._id,
        title: assignment.title,
        description: assignment.description,
        course: assignment.course,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
        due: assignment.due,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId,
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a,
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.currentAssignmentId = assignmentId;
    },
    setCreating: (state, { payload: creating }) => {
      state.creating = creating;
    },
    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
  setCreating,
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
