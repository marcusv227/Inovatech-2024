/*
  Warnings:

  - You are about to drop the `_DangerZoneToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_DangerZoneToUser" DROP CONSTRAINT "_DangerZoneToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_DangerZoneToUser" DROP CONSTRAINT "_DangerZoneToUser_B_fkey";

-- DropTable
DROP TABLE "_DangerZoneToUser";

-- AddForeignKey
ALTER TABLE "DangerZone" ADD CONSTRAINT "DangerZone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
