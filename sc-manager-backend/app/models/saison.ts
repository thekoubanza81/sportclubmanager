import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Club from './club.js'

export default class Saison extends BaseModel {
  static table = 'saisons'

  @column({ isPrimary: true, columnName: 'saison_id' })
  declare saisonId: number

  @column({ columnName: 'club_id' })
  declare clubId: number

  @column()
  declare libelle: string

  @column.dateTime({ columnName: 'date_debut' })
  declare dateDebut: DateTime

  @column.dateTime({ columnName: 'date_fin' })
  declare dateFin: DateTime

  @column()
  declare statut: 'a_venir' | 'en_cours' | 'terminee'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relation : une saison appartient à un club
  @belongsTo(() => Club, {
    foreignKey: 'clubId',
  })
  declare club: BelongsTo<typeof Club>
}