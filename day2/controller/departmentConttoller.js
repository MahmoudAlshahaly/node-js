module.exports.GetAllDepartment=(request,respone,next)=>{
    //check validation
    console.log("first call back");
    next();
   },(request,respone,next)=>{
    //check authorizTION
    console.log("second call back");
    next();
   },(request,respone,next)=>{
    respone.status(200).json({data:" department list"})
   }

   module.exports.GetDepartmentByID=(request,respone,next)=>{
    console.log(request.query); //querystring
    console.log(request.params);//query params
    respone.status(200).json({data:"gey department by id"})
   }
   module.exports.AddDepartment=(request,respone,next)=>{
    console.log(request.body);
    respone.status(201).json({data:"add"})
   }

   module.exports.UpdateDepartment=(request,respone,next)=>{
    respone.status(200).json({data:"edit"})
   }

   module.exports.DeleteDepartment=(request,respone,next)=>{
    respone.status(200).json({data:"delete"})
   }