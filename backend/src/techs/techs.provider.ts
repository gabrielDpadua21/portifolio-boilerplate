import { Technology } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaPrivider } from "src/database/prisma.privider";

@Injectable()
export class TechsProvider {
	constructor(private readonly prismaProvider: PrismaPrivider) {}

	async getAllTechs(): Promise<Technology[]> {
		return this.prismaProvider.technology.findMany();
	}

	async getTechPriority(): Promise<Technology[]> {
		return this.prismaProvider.technology.findMany({ where: { is_priority: true } });
	}
}
