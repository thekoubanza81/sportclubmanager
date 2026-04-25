import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Le nom de la table qu'on va créer dans MySQL
  protected tableName = 'roles'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire
      table.bigIncrements('role_id')

      // Nom affiché du rôle ex: "Super Administrateur"
      table.string('libelle', 100).notNullable()

      // Identifiant technique du rôle ex: "super_admin"
      // UNIQUE : deux rôles ne peuvent pas avoir le même slug
      table.string('slug', 50).notNullable().unique()

      // Description optionnelle du rôle
      table.text('description').nullable()

      table.dateTime('created_at').notNullable().defaultTo(this.now())
      table.dateTime('updated_at').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}