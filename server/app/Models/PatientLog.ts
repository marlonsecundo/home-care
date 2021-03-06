import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class PatientLog extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public data: number;

  @column()
  public type: string;

  @column()
  public userId: number;

  @column()
  public status: string;

  @column()
  public condition: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
