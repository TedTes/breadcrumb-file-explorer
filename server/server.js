require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const path=require('path');
const searchDirectory=require('./SearchDirectory')
const fs=require('fs');
const directories=require('./directories')

app.use(cors());
app.get('/path/:dirname',async(req,res)=>{
    const dirName=req.params.dirname;
    // const file="./directories.js" || process.argv.slice(2); 
    // const data=fs.readFileSync(file,"utf-8");
    // console.log(Object.values(directories));
    convertToArray(directories)
//    console.log(Object.keys(directories))
});


const PORT=8000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server started listening on port ${PORT}`)
})

function convertToArray(directories){
    var dta=directories;
    // console.log(dta);
    while(dta.children){
        dta=Object.values(dta.children);
        for(let i=0;i<dta.length;i++){
            if(dta[i].type==="dir"){
                console.log(dta[i])
                convertToArray(...dta)
            }
            else console.log(dta[i])
        }
    //    console.log(dta);
        // const dta2={...dta}[0];
        // console.log(dta2);
        // if(dta2.type==="dir")
        // {
        //     // console.log(dta)
        //     
        // }
      
        // else  console.log(dta2);
    }
   
}