import axios from "axios";

// Create an Axios object with pre-configurate setting
const backendApi = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true
});

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

// USER ###################################################################
//-------------------------------------------------------------------------
export function getUserDetails(userName) {
  return backendApi.get(`/api/account/${userName}`).catch(errorHandler);
}

export function getUserEditDetails(updatedInfo) {
  return backendApi
    .post(`/api/account/${updatedInfo.name}/edit-user`, updatedInfo)
    .catch(errorHandler);
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
