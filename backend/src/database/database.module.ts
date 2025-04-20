import { Module } from "@nestjs/common";
import { PrismaPrivider } from "./prisma.privider";

@Module({
	providers: [PrismaPrivider],
	exports: [PrismaPrivider],
})
export class DatabaseModule {}
