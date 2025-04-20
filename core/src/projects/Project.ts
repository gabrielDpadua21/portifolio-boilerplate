import Technology from "../techs/Technology";
import { Level } from "./Level";
import { Type } from "./Type";

export default interface Project {
	id: number;
	name: string;
	description: string;
	images: string[];
	level: Level;
	type: Type;
	repository: string;
	is_priority: boolean;
	techs: Technology[];
}
