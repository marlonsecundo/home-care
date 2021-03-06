import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class PatientLogs extends BaseSchema {
  protected tableName = 'patient_logs';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.float('data');
      table.enu('type', ['OXYGENATION', 'HEARTBEAT', 'ULTRASOUND']);
      table.enu('status', ['LOW', 'MODERATE', 'SEVERE']);
      table.integer('user_id').references('users.id');
      // Coluna para facilitar a geração de logs
      table.integer('condition');
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
