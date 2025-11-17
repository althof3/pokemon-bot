import * as typeorm from "typeorm";

export class Init1763218214901 implements typeorm.MigrationInterface {
    name = 'Init1763218214901'

    public async up(queryRunner: typeorm.QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: typeorm.QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
