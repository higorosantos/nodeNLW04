import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CratedProduct1614290433862 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table({
                name:"products",
                columns:[
                    {
                        name: "id",
                        type: "varchar"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    }
                    ] 
        })
    )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        new Table();
    }

}
