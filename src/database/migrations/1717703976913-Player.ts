import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Player1717703976913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'players',
                columns: [
                    {
                        name:'id_player',
                        type: 'varchar',
                        length: '255',
                        isPrimary: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('players')
    }

}
