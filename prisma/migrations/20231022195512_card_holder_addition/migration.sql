/*
  Warnings:

  - Added the required column `holder` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "holder" TEXT NOT NULL;
