import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ClientsModule, Transport} from "@nestjs/microservices";
import { UserModule } from './user/user.module';

@Module({
  imports: [
      UserModule,
      // ClientsModule.register([
      //   {
      //     name: 'event-service',
      //     transport: Transport.TCP
      //   }
      // ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
