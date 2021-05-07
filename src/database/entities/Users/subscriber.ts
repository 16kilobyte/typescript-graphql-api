import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import bcrypt from "bcrypt";
import { User } from "./model";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  /**
     * Indicates that this subscriber only listen to User events.
     */
  listenTo() {
    return User;
  }

  async beforeUpdate?(event: InsertEvent<User>): Promise<any> {
    event.entity.password = await bcrypt.hash(event.entity.password, 10);
  }
}
