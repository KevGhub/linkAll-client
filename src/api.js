import axios from "axios";

// Create an Axios object with pre-configurate setting
const backendApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});
// POUR TOI DELPHINE
// ERROR HANDLER ###################################################################
//----------------------------------------------------------------------------------

function errorHandler(err) {
  // Console message for debbuging
  if (err.response && err.response.data) {
    console.log("API Error", err.response.data);
  } else {
    console.log("React Code Error", err);
  }
  // Alert generic message for the user
  alert("Sorry ! Some went wrong");

  // cause the error again so the .then() won't be called
  throw err;
}

// DATA ###################################################################
//-------------------------------------------------------------------------
export function getCountries() {
  return backendApi.get("/api/countries").catch(errorHandler);
}

export function getCountryDetails(countryName) {
  return backendApi.get(`/api/countries/${countryName}`).catch(errorHandler);
}

// USER ###################################################################
//-------------------------------------------------------------------------
export function getUserDetails(userName) {
  return backendApi.get(`/api/account/${userName}`).catch(errorHandler);
}

export function getUserDetailsForEdit(userNameToEdit) {
  return backendApi
    .get(`/api/account/${userNameToEdit}/edit`)
    .catch(errorHandler);
}

export function postUserEditDetails(updatedInfo) {
  return backendApi
    .post(`/api/account/${updatedInfo.name}/edit-user`, updatedInfo)
    .catch(errorHandler);
}

export function postUserDelete(deletedUser) {
  return backendApi
    .post(`/api/account/${deletedUser.name}/delete`, deletedUser)
    .catch(errorHandler);
}

export function postFile(files) {
  // create a FormData object that packages up the file for uploading
  const uploadData = new FormData();
  // add the first file to the uploadData "package"
  // (the name "userFile" is the one the backend is expecting)
  uploadData.append("userFile", files[0]);

  return backendApi.post("/api/single-upload", uploadData).catch(errorHandler);
}

// AUTH ###################################################################
//-------------------------------------------------------------------------
export function postSignUp(userSubmission) {
  return backendApi
    .post("/api/process-signup", userSubmission)
    .catch(errorHandler);
}

export function postLogin(loginCredentials) {
  return backendApi
    .post("/api/process-login", loginCredentials)
    .catch(errorHandler);
}

export function getLogOut() {
  return backendApi.get("/api/logout").catch(errorHandler);
}

export function patchFavorite(roomId) {
  return backendApi.patch("/api/account/favorite", { roomId }).catch(errorHandler);
}

export function getFavorite() {
  return backendApi.get("/api/account/favorite").catch(errorHandler);
}

