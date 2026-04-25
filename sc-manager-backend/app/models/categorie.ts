import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Club from './club.js'
import Saison from './saison.js'

export default class Categorie extends BaseModel {
  static table = 'categories'

  @column({ isPrimary: true, columnName: 'categorie_id' })
  declare categorieId: number

  @column({ columnName: 'club_id' })
  declare clubId: number

  @column({ columnName: 'saison_id' })
  declare saisonId: number

  @column()
  declare nom: string

  @column({ columnName: 'age_min' })
  declare ageMin: number | null

  @column({ columnName: 'age_max' })
  declare ageMax: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relation : une catégorie appartient à un club
  @belongsTo(() => Club, {
    foreignKey: 'clubId',
  })
  declare club: BelongsTo<typeof Club>

  // Relation : une catégorie appartient à une saison
  @belongsTo(() => Saison, {
    foreignKey: 'saisonId',
  })
  declare saison: BelongsTo<typeof Saison>
}