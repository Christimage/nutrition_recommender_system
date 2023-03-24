import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  age: number;

  @Column()
  healthDetailsIds: number[];

  @Column()
  regionId: number;

  @Column()
  allergiesIds: number[];

//   @ManyToMany(() => Allergy)
//   @JoinTable()
//   allergies: Allergy[];
}
