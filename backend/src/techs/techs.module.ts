import { Module } from "@nestjs/common";
import { TechsController } from "./techs.controller";
import { TechsProvider } from "./techs.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
	controllers: [TechsController],
	providers: [TechsProvider],
	imports: [DatabaseModule],
})
export class TechsModule {}
