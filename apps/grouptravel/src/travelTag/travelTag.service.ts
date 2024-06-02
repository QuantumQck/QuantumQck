import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TravelTagServiceBase } from "./base/travelTag.service.base";

@Injectable()
export class TravelTagService extends TravelTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
