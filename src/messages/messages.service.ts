import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
    // Service is creating it own dependecies
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(message: string) {
    return this.messagesRepo.create(message);
  }
}
