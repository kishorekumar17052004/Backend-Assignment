
import fs from "fs"
import path from "path"
import process  from "process"

const student = `kishore ravi arun`
const folderPath = path.join(process.cwd() , "student")

fs.mkdir(folderPath,{recursive:true},(err)=>{
    if(err){
       return console.log(err)
    } else{
        console.log(`Successfully create a folder`)
    }

    const filePath = path.join(folderPath, "student.txt")

    fs.writeFile(filePath, student , (err) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(`Successfully created file`)
        }
    fs.readFile(filePath,"utf-8",(err,data)=>{
          if(err){
            console.log(err)
          } else{
            console.log(`Students name : ${data}`)
          }
    fs.appendFile(filePath,"\nkumar",(err)=>{
        if(err){
           return console.log(err)
        } else{
            console.log(`append successfully `)
        }
        const renamePath = path.join(folderPath,"students.txt")
        fs.rename(filePath, renamePath,(err)=>{
            if(err){
                console.log(err)
            } else{
                console.log(`rename successfully  `)
            }
        fs.unlink(renamePath,()=>{
            if(err){
               return console.log(err)
            }
        })    
    })    
    })      
    })    
    })
})