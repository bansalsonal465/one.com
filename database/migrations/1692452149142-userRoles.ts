import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class userRoles1692452149142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_roles",
                columns:[
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "user_id",
                        type: "int"
                    },
                    {
                        name: "role_id",
                        type: "int"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: null,
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        default: null,
                    },
                ]

            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
