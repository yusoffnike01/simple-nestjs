import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    console.log(messages);
    return messages[id];
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    console.log(contents);
    const message = JSON.parse(contents);
    return message;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    console.log(contents);
    const messages = JSON.parse(contents);
    console.log(messages);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
