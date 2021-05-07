import { EntitySubscriberInterface, EventSubscriber } from "typeorm";
import { BankAccount } from "./model";

@EventSubscriber()
export class BankAccountSubscriber implements EntitySubscriberInterface<BankAccount> {
  /**
     * Indicates that this subscriber only listen to BankAccount events.
     */
  listenTo() {
    return BankAccount;
  }
}
