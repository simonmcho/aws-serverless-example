const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const serverless = require("@vendia/serverless-express");
// const ejs = require('ejs').__express
const app = express();
const router = express.Router();
const config = require("./config");
const dotenv = require("dotenv");

const handlers = require("../handlers");

dotenv.config();
const { getCurrentInvoke } = serverless;
const { getTypeform } = handlers;

// app.set('view engine', 'ejs')
// app.engine('.ejs', ejs)

router.use(compression());
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// NOTE: tests can't find the views directory without this
// app.set('views', path.join(__dirname, 'views'))

router.get("/", (req, res) => {
  const currentInvoke = getCurrentInvoke();
  const { event = {} } = currentInvoke;
  const { requestContext = {} } = event;
  const { domainName = "localhost:3000" } = requestContext;
  const apiUrl = `https://${domainName}`;
  res.send({
    debug: !config.IS_PROD,
    env: config.ENV,
    apiUrl,
    isWorking: true,
  });
});

router.get("/test", getTypeform());

// The serverless-express library creates a server and listens on a Unix
// Domain Socket for you, so you can remove the usual call to app.listen.
// app.listen(3000)
app.use("/", router);

// Export your express server so you can import it in the lambda function.
module.exports = app;
