import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBlogs1621705447841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"blogs",
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
                    name: "title",
                    type: "varchar"
                },

                {
                    name: "body",
                    type: "varchar"
                },
                {
                    name: "author",
                    type: "integer"
                }
            ],
            foreignKeys: [
                {
                    name:"blog_author",
                    columnNames: ["author"],
                    referencedTableName: 'users',
                    referencedColumnNames: ["id"],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('blogs')
    }

}
