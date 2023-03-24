import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Allergy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  allergyName: string;
}
