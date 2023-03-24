import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  regionName: string;
}
