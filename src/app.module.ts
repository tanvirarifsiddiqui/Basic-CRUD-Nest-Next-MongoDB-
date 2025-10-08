import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // For environment variables
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot(), //load .env file if present
    MongooseModule.forRoot(
      process.env.MONGO_URI || 'mongodb://localhost:27017/nest-crud-db',
    ),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
