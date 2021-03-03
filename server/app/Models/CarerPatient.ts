import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class CarerPatient extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public patientId: number;

  @column()
  public carerId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
