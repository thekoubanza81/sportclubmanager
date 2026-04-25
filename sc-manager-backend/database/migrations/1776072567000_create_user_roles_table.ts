import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Table pivot qui relie les utilisateurs à leurs rôles
  protected tableName = 'user_roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé étrangère vers la table utilisateurs
      // CASCADE : si l'utilisateur est supprimé, ses rôles sont supprimés aussi
      table
        .bigInteger('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('utilisateurs')
        .onDelete('CASCADE')

      // Clé étrangère vers la table roles
      table
        .bigInteger('role_id')
        .unsigned()
        .notNullable()
        .references('role_id')
        .inTable('roles')
        .onDelete('CASCADE')

      // Clé étrangère vers la table clubs
      // nullable() car le super_admin n'appartient à aucun club
      table
        .bigInteger('club_id')
        .unsigned()
        .nullable()
        .references('club_id')
        .inTable('clubs')
        .onDelete('CASCADE')

      // Empêche les doublons
      table.unique(['user_id', 'role_id', 'club_id'])

      table.dateTime('created_at').notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
