import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity } from 'typeorm';

export abstract class CustomBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({
    type: 'bool',
    default: false,
  })
  public isDeleted: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
