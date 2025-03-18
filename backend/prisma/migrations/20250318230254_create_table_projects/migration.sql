-- CreateTable
CREATE TABLE "tb_projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "level" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "is_priority" BOOLEAN NOT NULL DEFAULT false,
    "repository" TEXT NOT NULL,

    CONSTRAINT "tb_projects_pkey" PRIMARY KEY ("id")
);
