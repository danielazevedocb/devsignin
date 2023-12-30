import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { AuthModule } from './module/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot(process.env.MONG_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
