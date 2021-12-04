const request = require("request")

const fs = require("fs")

const url =process.argv[2];

const file = process.argv[3];
  //variable for size of index.hmtl file
const stats = statSync(indexx.html);
  //convert size into bytes

const sizeBytes = stats.size

reques(url, (error, response, body) => {
   console.log("error;", error)// prist error if it occurs
   console.log("statusCode:", response && response.statusCode);
   console.log("body:", body); // prints the HTML for the homepage of URL
// write the body of url into out local index.html file; if erro, throw error
   fs.writeFile(file, body, function(err) {
     if (err) throw err;
     //if no error print the below lof to terminal

     console.log('Downloaded and saved ${sizeBytes} bytes to ${file}')

   })
})

