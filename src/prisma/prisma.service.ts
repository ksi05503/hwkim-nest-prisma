import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({ log: ['query'] }); // 필요한 경우 이곳에서 prisma client option 을 설정할 수 있다.(log level 과 같은)
  }
}
