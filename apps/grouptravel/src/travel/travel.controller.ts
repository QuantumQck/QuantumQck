import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TravelService } from "./travel.service";
import { TravelControllerBase } from "./base/travel.controller.base";

@swagger.ApiTags("travels")
@common.Controller("travels")
export class TravelController extends TravelControllerBase {
  constructor(
    protected readonly service: TravelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
