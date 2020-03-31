const path = require("path");
const router = require("express").Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/index.html"));
});

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/exercise.html"));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/HTML/stats.html"));
});

module.exports = router;