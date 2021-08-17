import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  country_code: string;

  @Column()
  score: number;
}
