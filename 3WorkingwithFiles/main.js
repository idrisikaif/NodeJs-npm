const { error } = require("console");
const fs = require("fs");


console.log("Starting........")

// fs.writeFileSync("kaif.txt", "Hello Kaif How are you")

fs.writeFile("kaif2.txt", "Hello Kaif are you fine", (err) => {
    console.log("Done")
    fs.readFile("kaif2.txt", (err , data) =>{
        console.log(err , data.toString())
    })
})

fs.appendFile("kaif.txt", "Chal nikal " , (e , d)=>{
    console.log(d)
} )

console.log("Ending............")