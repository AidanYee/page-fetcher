const fs = require('fs') // node 
const request = require('request'); // npm request 

//command line variables
const url = process.argv[2]; // url to copy 
//console.log(url)
const path = process.argv[3]; // path to copy to


request(url, (error, response, body) => {
  if(error){
    console.log("Error. It's not working. Take a deep breath and try again.")
  }
  //console.log(body)
  fs.writeFile(path, body, fileError => {
    //console.log(fileError)
    if(fileError) {
      console.log("Error. Something is wrong with the url or path!")
    } else {
      console.log(`Downloaded and saved ${fs.statSync(path).size} bytes to ${path}.`)
      console.log("Download Complete")
    }
  })
})


// // node write file function
// fs.writeFile( `${path}`, body, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })
