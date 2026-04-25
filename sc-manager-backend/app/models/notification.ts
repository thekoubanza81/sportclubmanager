import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Evenement from './evenement.js'
import Utilisateur from './utilisateur.js'

export default class Notification extends BaseModel {
  static table = 'notifications'

  @column({ isPrimary: true, columnName: 'notification_id' })
  declare notificationId: number

  @column({ columnName: 'evenement_id' })
  declare evenementId: number

  @column({ columnName: 'user_id' })
  declare userId: number

  // Type de notification
  @column()
  declare type: 'creation_evenement' | 'rappel_j1' | 'rappel_j0' | 'rappel_manuel'

  // Statut de l'envoi
  @column()
  declare statut: 'en_attente' | 'envoye' | 'echec'

  // Date d'envoi de la notification
  @column.dateTime({ columnName: 'send_time' })
  declare sendTime: DateTime | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  // Relation : une notification appartient à un événement
  @belongsTo(() => Evenement, {
    foreignKey: 'evenementId',
  })
  declare evenement: BelongsTo<typeof Evenement>

  // Relation : une notification appartient à un utilisateur
  @belongsTo(() => Utilisateur, {
    foreignKey: 'userId',
  })
  declare utilisateur: BelongsTo<typeof Utilisateur>
}