import { MigrationInterface, QueryRunner } from "typeorm";

export class AddStatusExperience1721128040267 implements MigrationInterface {
    name = 'AddStatusExperience1721128040267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "status" character varying`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "experience" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "status"`);
    }

}
