import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Utilisateur from './utilisateur.js'
import Saison from './saison.js'

export default class Cotisation extends BaseModel {
  static table = 'cotisations'

  @column({ isPrimary: true, columnName: 'cotisation_id' })
  declare cotisationId: number

  @column({ columnName: 'user_id' })
  declare userId: number

  @column({ columnName: 'saison_id' })
  declare saisonId: number

  // Montant total de la cotisation ex: 150.00
  @column()
  declare montant: number

  // Statut du paiement
  @column()
  declare statut: 'en_attente' | 'partiel' | 'solde'

  // Date du premier paiement (paiements échelonnés)
  @column.date({ columnName: 'date_debut_paiement' })
  declare dateDebutPaiement: DateTime | null

  // Date du dernier paiement reçu
  @column.date({ columnName: 'dernier_paiement' })
  declare dernierPaiement: DateTime | null

  // Méthode de paiement utilisée
  @column()
  declare methode: 'en_ligne' | 'cheque' | 'especes' | 'virement' | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Relation : une cotisation appartient à un utilisateur
  @belongsTo(() => Utilisateur, {
    foreignKey: 'userId',
  })
  declare utilisateur: BelongsTo<typeof Utilisateur>

  // Relation : une cotisation appartient à une saison
  @belongsTo(() => Saison, {
    foreignKey: 'saisonId',
  })
  declare saison: BelongsTo<typeof Saison>
}