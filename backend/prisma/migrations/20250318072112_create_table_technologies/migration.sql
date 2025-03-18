-- CreateTable
CREATE TABLE "tb_technologies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "is_priority" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tb_technologies_pkey" PRIMARY KEY ("id")
);
