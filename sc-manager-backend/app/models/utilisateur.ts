import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { compose } from '@adonisjs/core/helpers'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import hash from '@adonisjs/core/services/hash'
import Club from './club.js'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

// withAuthFinder gère automatiquement :
// 1. La recherche de l'utilisateur par email
// 2. Le hachage ET la vérification du mot de passe
// On n'a donc PAS besoin d'un beforeSave hook séparé
const AuthFinder = withAuthFinder(() => hash, {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class Utilisateur extends compose(BaseModel, AuthFinder) {
  static table = 'utilisateurs'
  // Clé primaire personnalisée — OBLIGATOIRE sinon AdonisJS cherche "id"
  static primaryKey = 'user_id'

  @column({ isPrimary: true, columnName: 'user_id' })
  declare userId: number

  @column({ columnName: 'club_id' })
  declare clubId: number | null

  @column()
  declare nom: string

  @column()
  declare prenom: string

  @column()
  declare email: string

  // serializeAs: null empêche le mot de passe d'apparaître dans les réponses JSON
  @column({ serializeAs: null })
  declare password: string

  @column()
  declare telephone: string | null

  @column.dateTime({ columnName: 'date_de_naissance' })
  declare dateDeNaissance: DateTime | null

  @column()
  declare statut: 'actif' | 'suspendu'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Configuration des tokens d'accès JWT
  static accessTokens = DbAccessTokensProvider.forModel(Utilisateur, {
    expiresIn: '30 days',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
  })

  // Relation : un utilisateur appartient à un club (nullable)
  @belongsTo(() => Club, {
    foreignKey: 'clubId',
  })
  declare club: BelongsTo<typeof Club>
}