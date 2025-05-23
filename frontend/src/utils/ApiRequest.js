// // // // const host = "https://expense-tracker-app-knl1.onrender.com";
// // const host = "http://localhost:5000";
// // // const host = window.location.origin.includes("localhost")
// // export const setAvatarAPI = `${host}/api/auth/setAvatar`;
// // export const registerAPI = `${host}/api/auth/register`;
// // export const loginAPI = `${host}/api/auth/login`;
// // export const addTransaction = `${host}/api/v1/addTransaction`;
// // export const getTransactions = `${host}/api/v1/getTransaction`;
// // export const editTransactions = `${host}/api/v1/updateTransaction`;
// // export const deleteTransactions = `${host}/api/v1/deleteTransaction`;
// const isLocalhost = window.location.origin.includes("localhost");
// const host = isLocalhost ? "http://localhost:5000" : "https://your-production-backend-url.com";

// export const setAvatarAPI = `${host}/api/auth/setAvatar`;
// export const registerAPI = `${host}/api/auth/register`;
// export const loginAPI = `${host}/api/auth/login`;
// export const addTransaction = `${host}/api/v1/addTransaction`;
// export const getTransactions = `${host}/api/v1/getTransaction`;
// export const editTransactions = `${host}/api/v1/updateTransaction`;
// export const deleteTransactions = `${host}/api/v1/deleteTransaction`;
const isLocalhost = window.location.origin.includes("localhost");
const host = isLocalhost ? "http://localhost:5000" : "http://3.109.217.35:5000";

export const setAvatarAPI = `${host}/api/auth/setAvatar`;
export const registerAPI = `${host}/api/auth/register`;
export const loginAPI = `${host}/api/auth/login`;
export const addTransaction = `${host}/api/v1/addTransaction`;
export const getTransactions = `${host}/api/v1/getTransaction`;
export const editTransactions = `${host}/api/v1/updateTransaction`;
export const deleteTransactions = `${host}/api/v1/deleteTransaction`;
