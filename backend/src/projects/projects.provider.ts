import { Project } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaPrivider } from "src/database/prisma.privider";

@Injectable()
export class ProjectsProvider {
	constructor(private readonly prismaProvider: PrismaPrivider) {}

	async getAllProjects(): Promise<Project[]> {
		return this.prismaProvider.project.findMany() as any;
	}

	async getProjectWithTechs(id: number): Promise<Project | null> {
		return this.prismaProvider.project.findMany({
			where: { id },
			include: { techs: true },
		}) as any;
	}
}
