const mammoth = require("mammoth");
const fs = require("fs");

class Question {
    constructor(questionNo, choice, subdivision, marks, bl, co, pi) {
        this.questionNo = questionNo;
        this.choice = choice;
        this.subdivision = subdivision;
        this.marks = marks;
        this.bl = bl;
        this.co = co;
        this.pi = pi;
    }
}



// Read the .docx file
fs.readFile("qp.docx", (err, data) => {
    if (err) throw err;
    
    // Convert .docx to plain text
    mammoth.extractRawText({ buffer: data })
        .then(result => {
            var text = result.value;
            text = text.replace(/\n{2,}/g, "\n");
            const firstLine = text.split('\n')[0]; // Extract the first line
            console.log(firstLine); // Log the first line
        })
        .catch(err => {
            console.error(err);
        });
});
