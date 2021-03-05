import { DateTime } from 'luxon';
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import User from './User';

export default class CarerPatient extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public patientId: number;

  @column()
  public carerId: number;

  @belongsTo(() => User, { foreignKey: 'carerId' })
  public carer: BelongsTo<typeof User>;

  @belongsTo(() => User, { foreignKey: 'patientId' })
  public patient: BelongsTo<typeof User>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
