const expres = require("express");
const auth = require("../middleware/auth");
const Feedback = require("../models/feedback");
const router = expres.Router();

router.get("/", (req, res, next) => {
  Feedback.find()
    .then((feedback) => res.status(200).json(feedback))
    .catch((error) => res.status(400).json({ error }));
});

router.get("/:id", auth, (req, res, next) => {
  Feedback.findOne({ _id: req.params.id })
    .then((feedback) => res.status(200).json(feedback))
    .catch((error) => res.status(404).json({ error }));
});

router.post("/", (req, res) => {
  delete req.body._id;
  const feedback = new Feedback({
    ...req.body,
  });
  feedback
    .save()
    .then(() => res.status(201).json({ message: "feedback crée" }))
    .catch((error) => res.status(400).json({ error }));
});

router.put("/:id", (req, res, next) => {
  Feedback.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
});

router.delete("/:id", (req, res, next) => {
  Feedback.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
