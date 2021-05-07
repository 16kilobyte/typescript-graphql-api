import { Column, Entity } from "typeorm";
import { CustomBaseEntity } from "../BaseEntity";

@Entity("bank")
export class Bank extends CustomBaseEntity {
  @Column({ nullable: false, unique: true })
  public code!: string;

  @Column()
  public name!: string;

  @Column()
  public countryCode!: string;
}
