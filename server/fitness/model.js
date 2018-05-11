var axios = require("axios");
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

var PicturesStack = [
    "https://www.daimanuel.com/wp-content/uploads/2014/03/Benefits-of-Swimming.jpg",
    "http://www.ourfamilyworld.com/wp-content/uploads/2016/08/pregnancy-workout-books.jpg",
    "https://i.pinimg.com/originals/8e/80/8e/8e808ec49834ec2b86d73d1e5d71ed22.jpg",
    "https://image.slidesharecdn.com/1428003825551d9bf1d522b-150402144350-conversion-gate01/95/you-need-this-info-to-be-fit-1-638.jpg?cb=1427985837",
    "https://i.pinimg.com/originals/9a/09/5d/9a095db6d58f77f5f82c38ab51c31026.jpg",
];

var iCurrentPicture = 0;
function Fitness(){
    this.Users = [];
    this.Picture = null;
    this.ChosenTask = [];
    this.GetRoutines = (userName) => {
        if(this.Users.some(x => x.UserName == userName)){
    
        }else{
            this.Users.push({ UserName: userName, Name: userName });
        }
        return RoutinesStack;
    }
    this.FlipPicture = () => this.Picture = PicturesStack[iCurrentPicture = (iCurrentPicture + 1) % PicturesStack.length ];
    this.SelectTask = (text, userName) => this.ChosenTask.push({Task: text, UserName: userName });
    
}
module.exports = Fitness;