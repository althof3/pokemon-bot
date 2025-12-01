import { AppDataSource } from "../../config/data-source";
import { User } from "../../db/entity/User";

export class UserService {
  private userRepo = AppDataSource.getRepository(User);

  async register(payload: {name: string, phone: string}): Promise<User & { isNew: boolean}> {
    console.log('[register user]', payload);
    
    const existing = await this.userRepo.findOneBy({ phone: payload.phone });
    if (existing) {
      const now = new Date();
      await this.userRepo.update(existing.id, {
        updatedAt: now,
      });
      return {...existing, updatedAt: now, isNew: false};
    }

    const createdUser = await this.userRepo.save({
      ...payload,
      loginAt: new Date(),
      createdAt: new Date(),
    });
    return {...createdUser, isNew: true};
  }

  async getUserByPhone(phone: string): Promise<User & { isExist: boolean}> {
    const user = await this.userRepo.findOneBy({ phone });
    if (!user) {
      return {...new User(), isExist: false};
    }
    return {...user, isExist: true};
  }

}