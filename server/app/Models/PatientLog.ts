import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import User from './User';

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

  @belongsTo(() => User)
  public patient: BelongsTo<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
