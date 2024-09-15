import {Inject, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ClientProxy} from "@nestjs/microservices";
import {FindAllEventByUserEvent} from "./events/FindAllEventByUserEvent";

@Injectable()
export class UserService {
  constructor(
      @Inject('event-service') private readonly eventClient: ClientProxy
  ) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    // this.eventClient.emit('findAllEventByUser')

    return `user` + "";
  }

  findOne(id: number) {
    return 'ok';
    let events = this.eventClient.send('findAllEventByUser', new FindAllEventByUserEvent(id))


    return `user` + events;
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
