import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Le nom de la table qu'on va créer dans MySQL
  protected tableName = 'utilisateurs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire
      table.bigIncrements('user_id')

      // Clé étrangère vers la table clubs
      // nullable() car le super_admin n'appartient à aucun club
      table
        .bigInteger('club_id')
        .unsigned()
        .nullable()
        .references('club_id')
        .inTable('clubs')
        .onDelete('SET NULL')

      // Informations personnelles
      table.string('nom', 100).notNullable()
      table.string('prenom', 100).notNullable()

      // Email unique : deux utilisateurs ne peuvent pas avoir le même email
      table.string('email', 150).notNullable().unique()

      // Mot de passe haché avec bcrypt (jamais en clair !)
      table.string('password', 255).notNullable()

      // Informations optionnelles
      table.string('telephone', 20).nullable()
      table.date('date_de_naissance').nullable()

      // Statut du compte
      table.enum('statut', ['actif', 'suspendu']).notNullable().defaultTo('actif')

      table.dateTime('created_at').notNullable().defaultTo(this.now())
      table.dateTime('updated_at').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}