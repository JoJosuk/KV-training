import { stringify } from "querystring";
import HttpException from "../exceptions/http.exceptions";
import { RequestWithUser } from "./RequestWithUser";
import { Role } from "./role.enum";

export const Permission ={
  employeePermission  : (req:RequestWithUser,rolesArray : Role[])=>{
  
    const rolePerson =String(req.role)
    const stringRolesArray = rolesArray.map((role)=>String(role))

    console.log(rolePerson,stringRolesArray)
    if (!stringRolesArray.includes(rolePerson))
    {
        throw new HttpException(403,"Forbidden")

    }
    console.log("authorized person accessing this")
 }
}