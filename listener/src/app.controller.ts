import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  static messageList = ['message1'];

  @EventPattern('notify-something')
  async notifiedSomething(@Payload() data: string, @Ctx() context: any) {
    console.log('before: ', AppController.messageList);

    AppController.messageList.push(data);

    console.log('after: ', AppController.messageList);

    const { offset } = context.getMessage();
    const partition = context.getPartition();
    const topic = context.getTopic();

    console.log(offset, partition, topic);
  }
}
