const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const loginRouter = require("./routes/login.js");
const signupRouter = require("./routes/signup.js");
const googleLoginRouter = require("./routes/googleLogin.js");
const agreePopupRouter = require("./routes/agreePopup.js");
const farmViewRouter = require("./routes/farmView.js");
const storeViewRouter = require("./routes/storeView.js");
const mdViewMainRouter = require("./routes/mdView_main.js");
const kakaoLoginRouter = require("./routes/kakaoLogin.js");
const farmDetailRouter = require("./routes/farmDetail.js");
const auth_middleware = require("./routes/auth_middleware");
const logoutRouter = require("./routes/logout");
// const refreshRouter = require("./routes/")
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("consumer_server");
});

app.use("/signup", signupRouter);
//app.use("/getId", require("./routes/getId"));
app.post("/kakaoLogin", kakaoLoginRouter);

app.use(auth_middleware);
app.post("/login", loginRouter);
app.get("/logout", logoutRouter);

app.post("/googleLogin", googleLoginRouter);
app.post("/agreePopup", agreePopupRouter);
app.get("/farmView", farmViewRouter);
app.get("/storeView", storeViewRouter);
app.get("/mdView_main", mdViewMainRouter);
app.post("/farmDetail", farmDetailRouter);

app.listen(3000, function () {
  console.log("server is running.");
});
