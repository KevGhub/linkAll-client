This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

###############################################################################################
###############################################################################################
###############################################################################################
DEPLOYMENT HEROKU
###############################################################################################
STEP 1 :
Client -> npm run-script build (to compile : html, css, JS.. and give us a folder)
copy/paste build/\*folder -> inside the Server public/folder

STEP 2 :
after : in server -> HEROKU (git push / git heroku master )

############

RESUME :
CHANGE ON CLIENT SIDE :

- in git ignore copy : .env.development.local & .env.production.local
  and create 2 files as the same name.

==>> in the file .env.development.local : write this var :

<!-- <!-- environnement variables have to start with react app (otherwise it will not be seen by your APP
A° when you change .env --> restart terminal , or is craching ... -> -->

REACT_APP_BACKEND_URL=http://localhost:5000

==>> in the file .env.production.local : write this var :
REACT_APP_BACKEND_URL=http://blah.herokuapp.com or if you don't know empty string
REACT_APP_BACKEND_URL=""

-

REACT_APP_CHATKIT_URL=...

---

add in file (Api.js)
in baseURL: process.env.REACT_APP_BACKEND_URL,

############

CHANGE ON SERVER SIDE :
IN APP.js every where we have mongoose (with hardcode localhost) remplace it by the front domain

---

in .env (server) copy what is in (mongodb://localhost/myAPP...)
and paste it in .env MONGODB_URI = (mongodb://localhost/myAPP...)

## and remplace it by .connect(process.env.MONGODB_URI)

in wwww file
for the 404 error respond with Json
add "/api",

<!--
// catch 404 and render a not-found.hbs template
app.use("/api",(req, res, next) => {
  res.status(404);
  res.json({ status: 404, message: "404 Not Found !" });
}); -->

ADD add this :
app.use(( req, res, next) => {
res.sendFile(path.resolve(\_\_dirname,"..","public","index.html"))

<!-- to Send react's HTML fil for url that don't begin with /api
(the react router will handle those Urls )

it's __dirname
 -->

BEFORE this existing code :

<!-- 
app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(500);
    res.json({ status: 500, message: "There was an error ! Check the terminal 💩" });
  }
});



---- on HEROKU deploy the BAckend only here  (DO ONE TIME)
add coding vars : 
minimum : MONGO URL , SESSION SECRET


ON TERMINAL terminal 
heroku git:remote -a NameOfApp



----- On heroku for the frontEND (DO EACH Time to deploy front)
npm run-script build

-> on FINDER easily : open the build folder created, and copy all what is inside (but not the folder build), and paste it in server in public/: 

---- AND on terminal (server side): 
git add .
git commit -m"add react prodiiuction files"
git push heroku master


---- and on terminal : 
heroku run node bin/file-seed.js (for each seed file)
