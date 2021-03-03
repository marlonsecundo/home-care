import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class PatientLog extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public data: JSON;

  @column()
  public type: string;

  @column()
  public date: DateTime;

  @column()
  public userId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
