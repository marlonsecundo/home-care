import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class NeurologistPatients extends BaseSchema {
  protected tableName = 'neurologist_patients';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.boolean('intervention').defaultTo(false);

      table.integer('neurologist_id').references('users.id');

      table.integer('pacient_id').references('users.id');

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
