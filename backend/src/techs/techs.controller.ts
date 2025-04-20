import { Technology } from "@core";
import { Controller, Get } from "@nestjs/common";
import { TechsProvider } from "./techs.provider";

@Controller("techs")
export class TechsController {
	constructor(private readonly techsProvider: TechsProvider) {}

	/**
	 * @swagger
	 * /techs:
	 *   get:
	 *     summary: Get all technologies
	 *     tags: [Technologies]
	 *     responses:
	 *       200:
	 *         description: List of technologies
	 */
	@Get("/")
	async getAllTechs(): Promise<Technology[]> {
		return this.techsProvider.getAllTechs();
	}

	@Get("/priority")
	async getTechsWithPriority(): Promise<Technology[]> {
		return this.techsProvider.getTechPriority();
	}
}
