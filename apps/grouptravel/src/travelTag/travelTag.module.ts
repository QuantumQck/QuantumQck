import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TravelTagModuleBase } from "./base/travelTag.module.base";
import { TravelTagService } from "./travelTag.service";
import { TravelTagController } from "./travelTag.controller";
import { TravelTagResolver } from "./travelTag.resolver";

@Module({
  imports: [TravelTagModuleBase, forwardRef(() => AuthModule)],
  controllers: [TravelTagController],
  providers: [TravelTagService, TravelTagResolver],
  exports: [TravelTagService],
})
export class TravelTagModule {}
