import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { BlockCreatedEvent } from '../domain';

@EventsHandler(BlockCreatedEvent)
export class BlockCreatedHandler
  implements IEventHandler<BlockCreatedEvent> {
  constructor() {}

  handle(event: BlockCreatedEvent) {
    console.log('Handle:', event);
  }
}
