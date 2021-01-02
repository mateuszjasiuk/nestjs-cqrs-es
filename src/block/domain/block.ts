import { AggregateRoot } from '@nestjs/cqrs';
import { BlockCreatedEvent } from './block-created.event';

export class Block extends AggregateRoot {
  constructor(private readonly id: string) {
    super();

    this.apply(
      new BlockCreatedEvent({
        id,
      }),
    );
  }
}
