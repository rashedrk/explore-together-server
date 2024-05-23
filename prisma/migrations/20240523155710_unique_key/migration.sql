/*
  Warnings:

  - A unique constraint covering the columns `[tripId,userId]` on the table `TravelBuddyRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TravelBuddyRequest_tripId_userId_key" ON "TravelBuddyRequest"("tripId", "userId");
