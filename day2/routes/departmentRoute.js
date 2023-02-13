const express =require("express");
const controller=require("./../controller/departmentConttoller");
const departmentRoute=express.Router();

//دي طريقة افضل بست بركتس لاني بكتب ال دبرتمنت مره واحدة
//departmentRoute.route("/department/:id?")  خلي الid optional ولكن ده مش افضل حل
departmentRoute.route("/department")
               .get(controller.GetAllDepartment)
               .post(controller.AddDepartment)
               .delete(controller.DeleteDepartment)
               .patch(controller.UpdateDepartment);
departmentRoute.get("/department/:id",controller.GetDepartmentByID)

module.exports=departmentRoute;


//دي طريقة
// departmentRoute.get("/department",()=>{});
// departmentRoute.post("/department",()=>{});
// departmentRoute.patch("/department",()=>{});
// departmentRoute.put("/department",()=>{});
// departmentRoute.delete("/department",()=>{});