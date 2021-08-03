const typeform = require("@typeform/api-client");

function createClient(token) {
  return typeform.createClient({ token }); // try catch?
}

async function getAllForms(token) {
  const client = createClient(token);
  console.log("sc: client: ", client);
  const forms = await client.forms.list({
    page: 1,
    pageSize: 10,
  });

  return forms;
}

module.exports = {
  getAllForms,
};

// app.get("/responses/:formId/:token", async (req, res) => {
//   const client = typeform.createClient({ token: req.params.token });
//   setTimeout(() => {
//     client.responses
//       .list({
//         uid: req.params.formId,
//         // ids: [req.params.responseId],
//       })
//       .then((responses) => {
//         res.json(responses.items);
//         res.end();
//       });
//   }, 5000);
// });

// app.get("/forms/:token", async (req, res) => {
//   const client = typeform.createClient({ token: req.params.token });
//   client.forms.list().then((forms) => {
//     console.log({ forms });
//     res.json(forms);
//     res.end();
//   });
// });

// app.post("/create/:token", async (req, res) => {
//   const { title, fields } = req.body;
//   const client = typeform.createClient({ token: req.params.token });

//   const payload = {
//     title,
//     fields,
//   };
//   console.log({ payload });

//   client.forms
//     .create({ data: payload })
//     .then((form) => {
//       console.log({ form });
//       res.json(form);
//       res.end();
//     })
//     .catch((err) => {
//       console.log({ err });
//       res.end();
//     });
// });

// app.listen(2020, () => {
//   console.log("Server running on port 2020");
// });
