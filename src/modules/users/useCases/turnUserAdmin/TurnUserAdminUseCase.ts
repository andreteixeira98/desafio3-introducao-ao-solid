import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userUpdated = this.usersRepository.findById(user_id);
    if (!userUpdated) throw new Error("there is no user with that id");

    return this.usersRepository.turnAdmin(userUpdated);
  }
}

export { TurnUserAdminUseCase };
