import { Module } from "@nestjs/common";
import { ProjectsController } from "./projects.controller";
import { ProjectsProvider } from "./projects.provider";
import { DatabaseModule } from "src/database/database.module";

@Module({
	controllers: [ProjectsController],
	providers: [ProjectsProvider],
	imports: [DatabaseModule],
})
export class ProjectsModule {}
