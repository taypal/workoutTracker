const Workout = require("../models/workout");
const router = require("express").Router();

router.get("/api/workouts", function (req, res) {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});


router.post("/api/workouts", function (req, res) {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(dbWorkout);
        });
})

module.exports = router;