import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Club extends BaseModel {
  static table = 'clubs'

  @column({ isPrimary: true, columnName: 'club_id' })
  declare clubId: number

  @column({ columnName: 'club_nom_long' })
  declare clubNomLong: string

  @column({ columnName: 'club_nom_court' })
  declare clubNomCourt: string

  @column()
  declare description: string | null

  @column.dateTime({ columnName: 'creation_date' })
  declare creationDate: DateTime

  @column()
  declare statut: 'actif' | 'suspendu'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}