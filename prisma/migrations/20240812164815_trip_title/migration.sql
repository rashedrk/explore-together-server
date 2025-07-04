/*
  Warnings:

  - Added the required column `title` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable - Add column as nullable first
ALTER TABLE "Trip" ADD COLUMN "title" TEXT;

-- Update existing records with a default title
UPDATE "Trip" SET "title" = 'Untitled Trip' WHERE "title" IS NULL;

-- Make the column NOT NULL
ALTER TABLE "Trip" ALTER COLUMN "title" SET NOT NULL;
