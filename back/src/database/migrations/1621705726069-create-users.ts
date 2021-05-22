import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUsers1621705726069 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"users",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: "email",
                    type: "varchar"
                },
                
                {
                    name: "nome",
                    type: "varchar"
                },

                {
                    name: "password",
                    type: "varchar"
                },

                {
                    name: "admin",
                    type: "boolean"
                }
            ],
        })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
