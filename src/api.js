import axios from "axios";

// Create an Axios object with pre-configurate setting
const backendApi = axios.create({
  baseURL: "http://localhost:5000",
  //send cookies to the backend on every request (for logging users)
  withCredentials: true
});

// so instead of axios.post("http://localhost:5000/api/phones", this.state),
//use baseURL.post("/api/phones", this.state)

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
  // use these fucntion inside the component correspondant
  return backendApi.get("/api/countries").catch(errorHandler);
}

export function getUsers() {
  return backendApi.get("/api/users").catch(errorHandler);
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
