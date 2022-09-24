import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlReadyExist = this.usersRepository.findById(user_id);

    if (!userAlReadyExist) {
      throw new Error("there is not user exists");
    }
    if (!userAlReadyExist.admin) {
      throw new Error("is not admin user");
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
