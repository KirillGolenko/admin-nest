import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public user_name: string;

  @Column()
  public first_name: string;

  @Column()
  public last_name: string;

  @Column()
  public password: string;
}
