import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from '../models/user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {}

  async findAll(): Promise<User[]> {
    const query = this.entityManager.createQuery('SELECT u FROM User u');
    return await query.getResultList();
  }

  async findById(id: string): Promise<User> {
    return await this.entityManager.findOne(User, Number(id));
  }

  async create(user: User): Promise<User> {
    return await this.entityManager.save(user);
  }

  async update(user: User): Promise<User> {
    return await this.entityManager.save(user);
  }

  async delete(id: number): Promise<void> {
    await this.entityManager.delete(User, id);
  }
}


// import { Injectable } from '@nestjs/common';
// import { Client } from 'cassandra-driver';
// import { User } from './user.entity';

// @Injectable()
// export class UserRepository {
//   constructor(private readonly client: Client) {}

//   async findAll(): Promise<User[]> {
//     const query = 'SELECT * FROM users';
//     const result = await this.client.execute(query);
//     return result.rows.map((row) => new User(row));
//   }

//   async findById(id: number): Promise<User> {
//     const query = 'SELECT * FROM users WHERE id = ?';
//     const result = await this.client.execute(query, [id], { prepare: true });
//     if (result.rows.length === 0) {
//       return null;
//     }
//     return new User(result.rows[0]);
//   }

//   async create(user: User): Promise<User> {
//     const query =
//       'INSERT INTO users (id, firstname, lastname, email, username, health_details_id, region_id, allergies_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
//     const params = [
//       user.id,
//       user.firstname,
//       user.lastname,
//       user.email,
//       user.username,
//       user.health_details_id,
//       user.region_id,
//       user.allergies_id,
//     ];
//     await this.client.execute(query, params, { prepare: true });
//     return user;
//   }

//   async update(user: User): Promise<User> {
//     const query =
//       'UPDATE users SET firstname = ?, lastname = ?, email = ?, username = ?, health_details_id = ?, region_id = ?, allergies_id = ? WHERE id = ?';
//     const params = [
//       user.firstname,
//       user.lastname,
//       user.email,
//       user.username,
//       user.health_details_id,
//       user.region_id,
//       user.allergies_id,
//       user.id,
//     ];
//     await this.client.execute(query, params, { prepare: true });
//     return user;
//   }

//   async delete(id: number): Promise<void> {
//     const query = 'DELETE FROM users WHERE id = ?';
//     await this.client.execute(query, [id], { prepare: true });
//   }
// }
