import { Injectable } from '@nestjs/common';
import * as rp from 'request-promise'
import * as crypto from 'crypto'

const SECRET = 'SEC23b435bbf3794539dbc477d26da8b4bdd3c96ea247559683a25c61b6f3cbab18'
const URL = 'https://oapi.dingtalk.com/robot/send'

@Injectable()
export class AppService {

  async sendDingTalkMessage(msg: string) {
    const timestamp = Date.now().toString()
    const signStr = timestamp + "\n" + SECRET
    const signEncoded = crypto.createHmac('SHA256', SECRET).update(signStr).digest('base64');
    const res = await rp.post(URL, {
      qs: {
        access_token: `207f727ad14204ab06b93a47edd5453740715f887d032d632c58a9dc5facee95`,
        timestamp,
        sign: signEncoded
      },
      body: {
        msgtype: 'text',
        text: {
          content: msg
        }
      },
      json: true
    })
    if (res.errcode) {
      throw new Error(res.errmsg)
    }
  }
}
