import React, { useReducer } from "react";

let user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";

let role = localStorage.getItem("role")
    ? JSON.parse(localStorage.getItem("role"))
    : "";


// --------------------di bawah ini bisa apa aja, tergantung project nya:

// let selectedCompanies = localStorage.getItem("selectedCompanies")
//   ? JSON.parse(localStorage.getItem("selectedCompanies"))
//   : "";

// let companies = localStorage.getItem("companies")
//   ? JSON.parse(localStorage.getItem("companies"))
//   : "";

// let projects = localStorage.getItem("projects")
//   ? JSON.parse(localStorage.getItem("projects"))
//   : "";

// let guestsProjects = localStorage.getItem("guestsProjects")
//   ? JSON.parse(localStorage.getItem("guestsProjects"))
//   : "";

export const initialState = {
    user: "" || user,
    role: "" || role,
    // --------------------di bawah ini bisa apa aja, tergantung project nya:
    //   selectedCompanies: "" || selectedCompanies,
    //   companies: "" || companies,
    //   projects: "" || projects,
    //   guestsProjects: "" || guestsProjects,
    loading: false,
    errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true,
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                user: action.payload.user,
                // role: action.payload.role,
                // selectedCompanies: action.payload.selectedCompanies,
                // companies: action.payload.companies,
                // projects: action.payload.projects,
                // guestsProjects: action.payload.guestsProjects,
                loading: false,
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: "",
            };

        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error,
            };

        case "CHANGE_COMPANY":
            return {
                ...initialState,
                selectedCompanies: action.payload.selectedCompanies,
            };

        case "CHANGE_PROJECTS":
            return {
                ...initialState,
                projects: action.payload.projects,
            };

        case "CREATE_PROJECTS":
            return {
                ...initialState,
                projects: action.payload.projects,
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};