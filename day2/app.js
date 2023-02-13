const express = require("express");

const departmentRoute=require("./routes/departmentRoute");
const studentRoute=require("./routes/studentRoute");

//opern server using express
const server = express();

let port = process.env.PORT || 8080;
//listening port
server.listen(port, () => {
    console.log("server is listening......");
})



//first middlewares  logging url,method
server.use((request, respone, next) => {
    console.log("endpoint", request.url, request.method);
    next();
})




//first middlewares check authontcation

server.use((request, respone, next) => {
    console.log("seconde middle......");
    if (true) {
        next();
    }
    else {
        // let error=new Error(" not authontiicated....");
        // next(error);

        throw ("error mamod")
    }
})


server.use(express.json());
//route (endpoints)
server.use(departmentRoute);
server.use(studentRoute);

//not found 
server.use((request, respone, next) => {
    //copyFi.sd
    respone.status(404).json({ message: "page not found" });
})

//error
server.use((error, request, respone, next) => {
    respone.status(500).json({ message: error + "" });
})