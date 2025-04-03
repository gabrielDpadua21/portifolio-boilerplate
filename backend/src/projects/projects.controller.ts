import { Controller, Get } from "@nestjs/common";
import { ProjectsProvider } from "./projects.provider";

@Controller("projects")
export class ProjectsController {
	constructor(private readonly projectsProvider: ProjectsProvider) {}

	/**
	 * @swagger
	 * /projects:
	 *   get:
	 *     summary: Get all projects
	 *     tags: [Projects]
	 *     responses:
	 *       200:
	 *         description: A list of projects
	 */
	@Get("/")
	async getAllProjects() {
		return this.projectsProvider.getAllProjects();
	}
}
