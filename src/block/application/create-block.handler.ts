import { BadRequestException, Inject } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { HTTPClient } from 'geteventstore-promise';
import { Block } from '../domain';
import { CreateBlockCommand } from './create-block.command';

@CommandHandler(CreateBlockCommand)
export class CreateBlockHandler implements ICommandHandler {
  constructor(
    @Inject('EventStore') private eventStore: HTTPClient,
    private publisher: EventPublisher,
  ) {}

  async execute(command: CreateBlockCommand) {
    const id = command.getId();
    const exists = await this.eventStore.checkStreamExists(`block-${id}`);

    if (exists) {
      throw new BadRequestException('Block already exists');
    }
    const block = new Block(id);

    this.publisher.mergeObjectContext(block);

    block.commit();
  }
}
