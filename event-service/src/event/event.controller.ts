import {Controller, Param} from '@nestjs/common';
import {EventPattern, MessagePattern, Payload} from '@nestjs/microservices';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import {ReadAllEventByUserDto} from "./dto/read-all-event-by-user.dto";

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}


  @EventPattern('findAllEventByUser')
  handleFindAllByUser(data: ReadAllEventByUserDto) {
    return this.eventService.handleFindAllByUser(data);
  }

}
