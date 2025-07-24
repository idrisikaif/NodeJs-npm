import fs from "fs/promises"
let a = await fs.readFile("kaif.txt" )


let b = await fs.appendFile("kaif2.txt" , " \n\n\n\n\n\n\n\\n\n\n\n\n\nHello Kaif bhak bhak bhaaak")
console.log(a.toString(), b)