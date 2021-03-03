import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class PatientLogs extends BaseSchema {
  protected tableName = 'patient_logs';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.json('data');
      table.enu('type', ['OXYGENATION', 'HEARTBEAT', 'ULTRASOUND']);
      table.dateTime('date');
      table.integer('user_id').references('users.id');
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
