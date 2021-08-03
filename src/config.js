const ENV = process.env.ENV || "development";
const IS_DEV = ENV === "development";
const IS_PROD = ENV === "production";

module.exports = {
  ENV,
  IS_DEV,
  IS_PROD,
};
