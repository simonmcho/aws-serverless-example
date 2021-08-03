const asyncHandler = require("express-async-handler");

const typeformService = require("../services/typeform");

const { getAllForms } = typeformService;

function getTypeform() {
  console.log("sc: gettuypeform executed");
  return asyncHandler(async (_req, res) => {
    const token = process.env.TYPEFORM_ACCESS_TOKEN;
    console.log("sc: token: ", token);
    const forms = await getAllForms(token);
    console.log("sc: forms: ", forms);
    res.status(200).json({ forms });
  });
}

module.exports = {
  getTypeform,
};
