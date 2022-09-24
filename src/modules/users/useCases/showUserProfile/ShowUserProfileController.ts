import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    return response.json(this.showUserProfileUseCase.execute({ user_id: id }));
  }
}

export { ShowUserProfileController };
