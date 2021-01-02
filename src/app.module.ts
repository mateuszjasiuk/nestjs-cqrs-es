import { Module } from '@nestjs/common';
import { BlockModule } from './block';

@Module({
  imports: [BlockModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
