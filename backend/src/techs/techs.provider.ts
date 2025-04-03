import { Injectable } from "@nestjs/common";
import { PrismaPrivider } from "src/database/prisma.privider";

@Injectable()
export class TechsProvider {
	constructor(private readonly prismaProvider: PrismaPrivider) {}

	async getAllTechs() {
		return this.prismaProvider.technology.findMany();
	}
}
