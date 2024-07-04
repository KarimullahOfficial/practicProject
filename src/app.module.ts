import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoadsModule } from './loads/loads.module';

@Module({
  imports: [LoadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
