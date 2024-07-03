import express,{Request,Response} from "express"


const empRouter= express.Router();

empRouter.get("/", (req: Request, res: Response) => {
    console.log("hello");
    res.status(200).json("done ");
  });
  
  empRouter.get("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    return res.json(`got an employee of id ${id}`);
  });
  empRouter.post("", (req: Request, res: Response) => {
    return res.status(201).json("created an employee");
  });
  
  empRouter.put("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    return res.json(`updated an employee of id ${id}`);
  });
  
  empRouter.delete("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    return res.json(`deleted an employee of id ${id}`);
  });
  

  export default empRouter