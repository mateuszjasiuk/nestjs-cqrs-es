import { AggregateRoot } from '@nestjs/cqrs';
import { BlockCreatedEvent } from './block-created.event';
import { v4 as uuid } from 'uuid';

export class Block extends AggregateRoot {
  constructor(private readonly id: string) {
    super();

    this.apply(
      new BlockCreatedEvent(uuid(), {
        id,
      }),
    );
  }
}
