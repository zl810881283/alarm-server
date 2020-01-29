import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post("/dingtalk")
  async sendDingTalkMessage(@Body('msg') msg: string): Promise<{ errno: number, errmsg: string }> {
    try {
      await this.appService.sendDingTalkMessage(msg)
      return { errno: 0, errmsg: '' }
    } catch (err) {
      return { errno: 1, errmsg: err.message }
    }

  }
}
