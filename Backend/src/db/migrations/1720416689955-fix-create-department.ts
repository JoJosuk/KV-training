import { MigrationInterface, QueryRunner } from "typeorm";

export class FixCreateDepartment1720416689955 implements MigrationInterface {
    name = 'FixCreateDepartment1720416689955'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_8fb1ab29c9f1a8b3cb2f982501d"`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "employee_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "department" ADD "employee_id" integer`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_8fb1ab29c9f1a8b3cb2f982501d" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
