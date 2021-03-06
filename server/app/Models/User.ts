import { DateTime } from 'luxon';
import {
  BaseModel,
  beforeSave,
  column,
  HasMany,
  hasMany,
  hasOne,
  HasOne,
} from '@ioc:Adonis/Lucid/Orm';
import Profile from './Profile';
import Role from './Role';
import Hash from '@ioc:Adonis/Core/Hash';
import PatientLog from './PatientLog';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: string;

  @column()
  public password: string;

  @hasOne(() => Profile)
  public profile: HasOne<typeof Profile>;

  @hasOne(() => Role)
  public role: HasOne<typeof Role>;

  @hasMany(() => PatientLog, { foreignKey: 'patient_id' })
  public logs: HasMany<typeof PatientLog>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
