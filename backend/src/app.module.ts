import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { DatabaseModule } from "./database/database.module";
import { ProjectsModule } from "./projects/projects.module";
import { TechsModule } from "./techs/techs.module";

@Module({
	imports: [DatabaseModule, ProjectsModule, TechsModule],
	controllers: [AppController],
})
export class AppModule {}
