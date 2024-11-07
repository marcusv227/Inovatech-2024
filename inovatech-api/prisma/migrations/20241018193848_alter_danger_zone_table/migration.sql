/*
  Warnings:

  - You are about to drop the column `lat` on the `DangerZone` table. All the data in the column will be lost.
  - You are about to drop the column `lng` on the `DangerZone` table. All the data in the column will be lost.
  - You are about to drop the column `radius` on the `DangerZone` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `DangerZone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `DangerZone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perimeter` to the `DangerZone` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DangerZone" DROP CONSTRAINT "DangerZone_userId_fkey";

-- AlterTable
ALTER TABLE "DangerZone" DROP COLUMN "lat",
DROP COLUMN "lng",
DROP COLUMN "radius",
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "perimeter" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "_DangerZoneToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DangerZoneToUser_AB_unique" ON "_DangerZoneToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DangerZoneToUser_B_index" ON "_DangerZoneToUser"("B");

-- AddForeignKey
ALTER TABLE "_DangerZoneToUser" ADD CONSTRAINT "_DangerZoneToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "DangerZone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DangerZoneToUser" ADD CONSTRAINT "_DangerZoneToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
