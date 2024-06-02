import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TravelTagService } from "./travelTag.service";
import { TravelTagControllerBase } from "./base/travelTag.controller.base";

@swagger.ApiTags("travelTags")
@common.Controller("travelTags")
export class TravelTagController extends TravelTagControllerBase {
  constructor(
    protected readonly service: TravelTagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
