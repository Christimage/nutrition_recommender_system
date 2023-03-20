import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/user.entity';
import { UserRepository } from '../database/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findById(id);
  }

  async create(user: User): Promise<User> {
    user.id = uuidv4();
    return this.userRepository.create(user);
  }

  async update(id: string, user: User): Promise<User> {
    return this.userRepository.update(id, user);
  }

  async delete(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
