import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { HTTPClient } from 'geteventstore-promise';
import { CreateBlockHandler } from './application';
import { BlockCreatedHandler } from './infrastructure';
import { BlockController } from './ui';

@Module({
  imports: [CqrsModule],
  controllers: [BlockController],
  providers: [
    CreateBlockHandler,
    BlockCreatedHandler,
    {
      provide: 'EventStore',
      useFactory: () => {
        return new HTTPClient({
          hostname: 'eventstore',
          port: 2113,
          credentials: {
            username: 'admin',
            password: 'changeit',
          },
        });
      },
    },
  ],
})
export class BlockModule {}
