import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HTTPClient } from 'geteventstore-promise';
import { BlockCreatedEvent } from '../domain';

@EventsHandler(BlockCreatedEvent)
export class BlockCreatedHandler implements IEventHandler<BlockCreatedEvent> {
  constructor(@Inject('EventStore') private eventStore: HTTPClient) {}

  async handle(event: BlockCreatedEvent) {
    const payload = event.getPayload();

    await this.eventStore.writeEvents(`block-${payload.id}`, [
      {
        eventId: event.getId(),
        eventType: 'BlockCreated',
        data: {
          metadata: { version: event.getVersion() },
          ...payload,
        },
      },
    ]);

    console.log(
      `Event with id: ${event.getId()} has been written to stream: block-${
        payload.id
      }`,
    );
  }
}
