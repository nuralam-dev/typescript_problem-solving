interface student {
  name: string;
  marks: number[];
}
interface result {
    name : string
    average : number
    result : string
}

const getStudentResult = (student : student) : result => {
let marks:number[] = student.marks;
let totalMarks : number = marks.reduce((sum , value) =>sum + value, 0);
let average = totalMarks / marks.length;
let result : string = average > 40 ? "passed" : "failed"
let finalResult = {
    name : student.name,
    average : average,
    result : result
} 
return finalResult

};
const showResult = getStudentResult({
name: "Rafi",
marks: [80, 75, 90, 85]
});


console.log(showResult);