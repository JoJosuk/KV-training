import { MigrationInterface, QueryRunner } from "typeorm";

export class AddJdate1721213390388 implements MigrationInterface {
    name = 'AddJdate1721213390388'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "jdate" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "jdate"`);
    }

}
