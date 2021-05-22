import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1621709175661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "images",
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
                    name: "path",
                    type: "varchar"
                },
                {
                    name: 'blog_id',
                    type: 'integer'
                }
            ],
            foreignKeys:[
                {
                    name:"image_blog",
                    columnNames: ["blog_id"],
                    referencedTableName: 'blogs',
                    referencedColumnNames: ["id"],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
