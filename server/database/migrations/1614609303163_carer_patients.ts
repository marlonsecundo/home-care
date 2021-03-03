import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CarerPatients extends BaseSchema {
  protected tableName = 'carer_patients';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.integer('patient_id').references('users.id');

      table.integer('carer_id').references('users.id');

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
