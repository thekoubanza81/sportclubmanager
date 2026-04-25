import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Evenement from './evenement.js'
import Utilisateur from './utilisateur.js'

export default class Presence extends BaseModel {
  static table = 'presences'

  @column({ isPrimary: true, columnName: 'presence_id' })
  declare presenceId: number

  @column({ columnName: 'evenement_id' })
  declare evenementId: number

  @column({ columnName: 'user_id' })
  declare userId: number

  @column()
  declare statut: 'en_attente' | 'confirme' | 'absent'

  @column()
  declare motif: string | null

  // Date de la dernière mise à jour de la présence
  @column.dateTime({ columnName: 'update_time' })
  declare updateTime: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Relation : une présence appartient à un événement
  @belongsTo(() => Evenement, {
    foreignKey: 'evenementId',
  })
  declare evenement: BelongsTo<typeof Evenement>

  // Relation : une présence appartient à un utilisateur
  @belongsTo(() => Utilisateur, {
    foreignKey: 'userId',
  })
  declare utilisateur: BelongsTo<typeof Utilisateur>
}