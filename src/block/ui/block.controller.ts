import { Body, Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateBlockCommand } from '../application';

type CreateBlockDto = {
  id: string;
  html: string;
};

@Controller('blocks')
export class BlockController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createBlock(@Body() createBlockDto: CreateBlockDto): Promise<void> {
    await this.commandBus.execute(new CreateBlockCommand(createBlockDto.id));
  }
}
