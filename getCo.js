const mammoth = require("mammoth");
const fs = require("fs");

// Read the .docx file
fs.readFile("qp.docx", (err, data) => {
    if (err) throw err;
    
    // Convert .docx to plain text
    mammoth.extractRawText({ buffer: data })
        .then(result => {
            var text = result.value;
            text = text.replace(/\n{2,}/g, "\n");
            console.log(text[0]);
        })
        .catch(err => {
            console.error(err);
        });
});
