import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Utilisateur from '#models/utilisateur'
import Role from '#models/role'
import Club from '#models/club'

export default class UserRole extends BaseModel {
  static table = 'user_roles'

  /**
   * Colonnes
   */

  @column({ columnName: 'user_id', isPrimary: true })
  declare userId: number

  @column({ columnName: 'role_id', isPrimary: true })
  declare roleId: number

  @column({ columnName: 'club_id' })
  declare clubId: number | null

  @column.dateTime({ columnName: 'created_at', autoCreate: true })
  declare createdAt: DateTime

  /**
   * Relations
   */

  // Utilisateur
  @belongsTo(() => Utilisateur, {
    foreignKey: 'userId',
  })
  declare utilisateur: BelongsTo<typeof Utilisateur>

  // Rôle
  @belongsTo(() => Role, {
    foreignKey: 'roleId',
  })
  declare role: BelongsTo<typeof Role>

  // Club (nullable, car un rôle peut être global ou spécifique à un club)
  @belongsTo(() => Club, {
    foreignKey: 'clubId',
  })
  declare club: BelongsTo<typeof Club>
}