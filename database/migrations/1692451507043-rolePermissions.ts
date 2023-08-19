import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class rolePermissions1692451507043 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "role_permissions",
                columns:[
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true
                    },
                    {
                        name: "role_id",
                        type: "int"
                    },
                    {
                        name: "permission_id",
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
        await queryRunner.dropTable("role_permissions");
    }

}
