import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Club from './club.js'
import Categorie from './categorie.js'
import Saison from './saison.js'

export default class Evenement extends BaseModel {
  static table = 'evenements'

  @column({ isPrimary: true, columnName: 'evenement_id' })
  declare evenementId: number

  @column({ columnName: 'club_id' })
  declare clubId: number

  @column({ columnName: 'categorie_id' })
  declare categorieId: number

  @column({ columnName: 'saison_id' })
  declare saisonId: number

  @column()
  declare type: 'entrainement' | 'match'

  @column()
  declare titre: string

  @column.dateTime({ columnName: 'date_heure' })
  declare dateHeure: DateTime

  @column()
  declare lieu: string | null

  @column()
  declare description: string | null

  // ── Champs spécifiques aux matchs (null si entraînement) ──────────────────
  @column()
  declare adversaire: string | null

  @column({ columnName: 'est_domicile' })
  declare estDomicile: boolean | null

  @column({ columnName: 'score_nous' })
  declare scoreNous: number | null

  @column({ columnName: 'score_adversaire' })
  declare scoreAdversaire: number | null

  @column()
  declare competition: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relation : un événement appartient à un club
  @belongsTo(() => Club, { foreignKey: 'clubId' })
  declare club: BelongsTo<typeof Club>

  // Relation : un événement appartient à une catégorie
  @belongsTo(() => Categorie, { foreignKey: 'categorieId' })
  declare categorie: BelongsTo<typeof Categorie>

  // Relation : un événement appartient à une saison
  @belongsTo(() => Saison, { foreignKey: 'saisonId' })
  declare saison: BelongsTo<typeof Saison>
}