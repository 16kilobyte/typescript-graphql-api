import { Column, Entity, Index, OneToMany } from "typeorm";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { CustomBaseEntity } from "../BaseEntity";
import { jwtSecret } from "../../../config";
import { BankAccount } from "../BankAccounts";

@Entity("user")
@Index(['phone', 'countryCode'], { unique: true })
export class User extends CustomBaseEntity {
  @Column({ nullable: true })
  public firstName!: string;

  @Column({ nullable: true })
  public lastName!: string;

  @Column('varchar', { length: 255, unique: true })
  public email: string;

  @Column({ nullable: true, type: "datetime" })
  public emailVerifiedAt: Date;

  @Column({ nullable: true, type: "datetime" })
  public phoneVerifiedAt: Date;

  @Column({ nullable: true })
  public phone!: string;

  @Column({ nullable: true })
  public countryCode: string;

  @Column('enum', { enum: ['admin', 'user'], default: 'user' })
  public role: string;

  @Column('text', { nullable: true })
  public password!: string;

  @OneToMany(() => BankAccount, bankAccount => bankAccount.user, { eager: true })
  public bankAccounts: BankAccount[];

  public generateJwtToken() {
    return jsonwebtoken.sign({
      id: this.id,
      email: this.email,
      role: this.role,
    } as SignedUser, jwtSecret, { expiresIn: '1d', algorithm: 'HS256' })
  }

  public async save() {
    this.password = await bcrypt.hash(this.password, 10);

    return super.save();
  }
}

export type SignedUser = Pick<User, "id" | "email" | "role">;
