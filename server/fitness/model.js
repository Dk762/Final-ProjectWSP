const RoutinesStack = [
        "In the Morning Do Yoga for 20 Minutes",
        "In the Morning Do cycling for 5 mile",
        "walk 10000 steps everyday",
        "eat 2 eggs in the morning everyday",
        "1 Bench press. Sets 5 Reps 10 Tempo 2010 Rest 60sec",
        "2 Triceps dip. Sets 5 Reps 6-10 Tempo 2110 Rest 60sec",
        "3 Incline dumbbell press. Sets 3 Reps 12-15 Tempo 2010 Rest 60sec",
        "4 Incline dumbbell flye. Sets 3 Reps 12-15 Tempo 2010 Rest 60sec.",
        "5 Triceps extension",
        "Pull-up Sets 5 Reps 6-10 Tempo 2011 Rest 60sec",
        "Standing biceps curl Sets 3 Reps 12-15 Tempo 2011 Rest 60sec",
        "Seated incline curl Sets 3 Reps 12-15 Tempo 2011 Rest 60sec",
        "Back squat Sets 5 Reps 10 Tempo 2010 Rest 60sec",
        " Glute bridge Sets 3 Reps 12-15 Tempo 2011 Rest 60sec",
        "Incline dumbbell press Sets 3 Reps 12-15 Tempo 2110 Rest 60sec",
        "Overhead press Sets 5 Reps 10 Tempo 2010 Rest 60sec",
        "Rack pull Sets 5 Reps 10 Tempo 2111 Rest 60sec",
        "Seated dumbbell press",
        "Take healthy and light dinner",
        
];

var iCurrentRoutine = 0;

const PictureStack = [


];

var iCurrentPicture = 0;







function Fitness(){
    this.Users = [];

}
var GetRoutines = () => RoutinesStack.slice(iCurrentRoutine, iCurrentRoutine += 19)
module.exports.GetRoutines = GetRoutines;