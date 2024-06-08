-- CreateEnum
CREATE TYPE "TripStatus" AS ENUM ('active', 'deactivated');

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "status" "TripStatus" NOT NULL DEFAULT 'active';
