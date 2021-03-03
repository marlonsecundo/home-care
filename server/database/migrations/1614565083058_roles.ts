import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Roles extends BaseSchema {
  protected tableName = 'roles';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.enu('type', ['CARER', 'NEUROLOGIST', 'PATIENT']);

      table.integer('user_id').references('users.id');

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
