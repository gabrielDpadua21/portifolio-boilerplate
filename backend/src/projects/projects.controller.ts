import { Controller, Get, Param } from "@nestjs/common";
import { ProjectsProvider } from "./projects.provider";
import { Project } from "@core";

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
	async getAllProjects(): Promise<Project[]> {
		return this.projectsProvider.getAllProjects();
	}

	@Get("/:id")
	async getProjectWithTechs(@Param("id") id: string): Promise<Project | null> {
		return this.projectsProvider.getProjectWithTechs(Number(id));
	}
}
