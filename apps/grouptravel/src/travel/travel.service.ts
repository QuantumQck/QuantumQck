import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TravelServiceBase } from "./base/travel.service.base";

@Injectable()
export class TravelService extends TravelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
