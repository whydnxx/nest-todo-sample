import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodoTable1642057444782 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE todos (
                id int(11) NOT NULL AUTO_INCREMENT,
                name varchar(255) NOT NULL,
                checked varchar(255) NOT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS todos;`);
  }
}
