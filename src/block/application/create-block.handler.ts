import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Block } from '../domain';
import { CreateBlockCommand } from './create-block.command';

@CommandHandler(CreateBlockCommand)
export class CreateBlockHandler implements ICommandHandler {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateBlockCommand) {
    const block = new Block(command.getId());

    this.publisher.mergeObjectContext(block);

    block.commit();
  }
}
