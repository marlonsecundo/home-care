import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name');
      table.string('cpf');
      table.string('crm');
      table.string('birth');
      table.boolean('intervention').defaultTo(false);
      table.integer('user_id').references('users.id');
      table.integer('condition');
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
