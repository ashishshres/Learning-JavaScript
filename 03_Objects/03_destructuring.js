const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
};

// console.log(course.courseInstructor); // Hitesh

// const {courseInstructor} = course;
// console.log(courseInstructor); // Hitesh

const {courseInstructor: instructor} = course;
console.log(instructor); // Hitesh

/*
# JSON =>JavaScript Object Notation
    {
        "name": "ashish",
        "course": "javascript",
        "price": "free"
    }
*/

// [
//     {},
//     {},
//     {}
// ]



