require("dotenv").config();
module.exports = {
  url:
    process.env.NODE_ENV === "test" ? process.env.TEST_DB : process.env.PROD_DB,
};
