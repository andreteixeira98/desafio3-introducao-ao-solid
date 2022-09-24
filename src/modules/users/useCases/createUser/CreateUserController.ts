import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body;
      const user = this.createUserUseCase.execute({ name, email });

      if (!user) throw new Error("there is already a user with this email");

      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export { CreateUserController };
