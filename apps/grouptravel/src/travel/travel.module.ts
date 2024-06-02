import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TravelModuleBase } from "./base/travel.module.base";
import { TravelService } from "./travel.service";
import { TravelController } from "./travel.controller";
import { TravelResolver } from "./travel.resolver";

@Module({
  imports: [TravelModuleBase, forwardRef(() => AuthModule)],
  controllers: [TravelController],
  providers: [TravelService, TravelResolver],
  exports: [TravelService],
})
export class TravelModule {}
