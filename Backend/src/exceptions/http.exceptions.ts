import { ValidationError } from "class-validator";

class HttpException extends Error {
  public status: number;
  public errorObjectList: String[];

  constructor(
    status: number,
    message: string,
    errorObject?: ValidationError[]
  ) {
    super(message);
    this.status = status;
    if (errorObject) {
      let errors: String[] = errorObject.map((error) => {
        if (error.constraints) {
          return JSON.stringify(Object.values(error.constraints));
        }
      });
      errors = errors.filter((error) => error !== "null");

      this.errorObjectList = errors;
    }
  }
}

export default HttpException;
