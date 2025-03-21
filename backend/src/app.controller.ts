import { Controller, Get } from "@nestjs/common";
import { Pong } from "@core";

@Controller()
export class AppController {
	constructor() {}

	@Get("/ping")
	ping(): String {
		return Pong.pingPong();
	}
}
