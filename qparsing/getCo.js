const mammoth = require("mammoth");
const fs = require("fs");

// class Question {
//     constructor(questionNo, choice, subdivision, marks, bl, co, pi) {
//         this.questionNo = questionNo;
//         this.choice = choice;
//         this.subdivision = subdivision;
//         this.marks = marks;
//         this.bl = bl;
//         this.co = co;
//         this.pi = pi;
//     }
// }

// function isPart(line) {
//     return line.startsWith("Part");
// }

// function isPI(line) {
//     return /\d\.\d\.\d/.test(line);
// }

// function isQuestionMatch(line, questionNo) {
//     return line.startsWith(questionNo.toString());
// }

// function isChoice(line) {
//     var choice = ["A", "B"];
//     var subdivision = ["(i)", "(ii)", "i)", "ii)"];

//     return choice.includes(line) || subdivision.some(sub => line.startsWith(sub));
// }

// function isDescription(line) {
//     return line.length > 10;
// }
// function splitQuestions(qpLines) {
//     curSplit = [];
//     qpSplits = [];
//     for (var i = 0; i < qpLines.length; i++) {
//         if (isDescription(qpLines[i])) {
//             if (curSplit.length == 0) {
//                 qpSplits.push(curSplit);
//             }
//             curSplit = [];
//         }
//         curSplit.push(qpLines[i]);
//     }

//     return qpSplits;
// }

// function getQuestions(qpText) {

//     var qpLines = qpText.split("\n");
//     var qpSplits = splitQuestions(qpLines);
//     console.log(qpSplits);
// }

docxPath = "qp.docx"

mammoth.convertToHtml({path: docxPath})
    .then(function(result){
        console.log(result.value);
        fs.writeFileSync("qp.html", result.value);
    })
    .catch(function(err){
        console.log(err);
    });

    // Select all <tr> elements in the document
let tableRows = document.querySelectorAll('tr');

// Create an empty array to store the data
let dataList = [];

// Loop through each row, but skip the header row (first <tr>)
tableRows.forEach((row, index) => {
    // Skip the header row
    if (index === 0) return;

    // Extract the first <td> element's text content as an integer (line number)
    let lineNumber = parseInt(row.cells[0].textContent, 10); // integer

    // Extract the second <td> element's text content (the question)
    let questionText = row.cells[1].textContent; // string

    // Extract the third <td> element's text content and convert it to float or integer
    let value = row.cells[2].textContent;
    let numericValue;

    // Check if the value is an integer or a float and convert accordingly
    if (Number.isInteger(Number(value))) {
        numericValue = parseInt(value, 10); // integer
    } else {
        numericValue = parseFloat(value); // float
    }

    // Add the extracted data to the list as an object
    dataList.push({
        lineNumber: lineNumber,
        question: questionText,
        value: numericValue
    });
});

// Output the list to the console to verify
console.log(dataList);


