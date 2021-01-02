import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateBlockHandler } from './application';
import { BlockCreatedHandler } from './infrastructure';
import { BlockController } from './ui';

@Module({
  imports: [CqrsModule],
  controllers: [BlockController],
  providers: [CreateBlockHandler, BlockCreatedHandler],
})
export class BlockModule {}
