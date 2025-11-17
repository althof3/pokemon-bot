import { AppDataSource } from "../../config/data-source";
import { User } from "../../db/entity/User";

export class UserService {
  private userRepo = AppDataSource.getRepository(User);

  async register(name: string): Promise<User> {
    const existing = await this.userRepo.findOneBy({ name });
    if (existing) {
      await this.userRepo.update(existing.id, {
        updatedAt: new Date(),
      });
      return existing;
    }
    return this.userRepo.save({
      name,
      loginAt: new Date(),
      createdAt: new Date(),
    });
  ;
  }
}