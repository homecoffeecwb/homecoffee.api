-- AlterTable
ALTER TABLE `products` ADD COLUMN `subcategory` INTEGER NOT NULL DEFAULT 0,
    MODIFY `name` VARCHAR(191) NOT NULL,
    ALTER COLUMN `category` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users` MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `role` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subcategories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `category` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_fkey` FOREIGN KEY (`category`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_subcategory_fkey` FOREIGN KEY (`subcategory`) REFERENCES `subcategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `subcategories` ADD CONSTRAINT `subcategories_category_fkey` FOREIGN KEY (`category`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
