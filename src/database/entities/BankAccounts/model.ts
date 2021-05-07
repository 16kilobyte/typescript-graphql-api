import { Column, Entity, Index, ManyToOne } from "typeorm";
import { Bank } from "../Banks";
import { CustomBaseEntity } from "../BaseEntity";
import { User } from "../Users";

@Entity("bankAccount")
@Index(['userId', 'accountNumber', 'bankId'], { unique: true })
export class BankAccount extends CustomBaseEntity {
  @Column({ nullable: false })
  public userId!: string;

  @Column({ nullable: false })
  public bankId!: string;

  @Column()
  public accountNumber!: string;

  @Column()
  public accountName!: string;

  @ManyToOne(() => Bank)
  public bank!: Bank;

  @ManyToOne(() => User, user => user.bankAccounts)
  public user!: User;
}
