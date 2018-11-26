import axios from "axios";

import {
  CLEAR_ERRORS,
  PROJECT_LOADING,
  GET_PROJECTS,
  GET_PROJECT,
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_CUSTOMERS,
  GET_CUSTOMER,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  GET_GOALS,
  GET_GOAL,
  ADD_GOAL,
  DELETE_GOAL
} from "./types";

// Get all Projects
export const getProjects = () => dispatch => {
  dispatch(setProjectLoading());
  axios
    .get("/api/projects")
    .then(res =>
      dispatch({
        type: GET_PROJECTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROJECTS,
        payload: null
      })
    );
};

// Set loading state
export const setProjectLoading = () => {
  return {
    type: PROJECT_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
