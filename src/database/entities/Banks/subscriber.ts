import { EntitySubscriberInterface, EventSubscriber } from "typeorm";
import { Bank } from "./model";

@EventSubscriber()
export class BankSubscriber implements EntitySubscriberInterface<Bank> {
  /**
     * Indicates that this subscriber only listen to Bank events.
     */
  listenTo() {
    return Bank;
  }
}
