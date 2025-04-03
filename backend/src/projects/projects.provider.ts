import { Injectable } from "@nestjs/common";
import { PrismaPrivider } from "src/database/prisma.privider";

@Injectable()
export class ProjectsProvider {
	constructor(private readonly prismaProvider: PrismaPrivider) {}

	async getAllProjects() {
		return this.prismaProvider.project.findMany();
	}
}
