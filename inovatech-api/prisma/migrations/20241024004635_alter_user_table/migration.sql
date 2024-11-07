/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `B` on the `_DangerZoneToUser` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "_DangerZoneToUser" DROP CONSTRAINT "_DangerZoneToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_DangerZoneToUser" DROP COLUMN "B",
ADD COLUMN     "B" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "_DangerZoneToUser_AB_unique" ON "_DangerZoneToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DangerZoneToUser_B_index" ON "_DangerZoneToUser"("B");

-- AddForeignKey
ALTER TABLE "_DangerZoneToUser" ADD CONSTRAINT "_DangerZoneToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
