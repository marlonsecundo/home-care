import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: String;

  @column()
  public cpf: String;

  @column()
  public crm: String;

  @column()
  public birth: DateTime;

  @column()
  public condition: number;

  @column()
  public intervention: boolean;

  @column()
  public userId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
