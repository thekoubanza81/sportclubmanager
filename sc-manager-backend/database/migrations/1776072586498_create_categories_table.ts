import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Le nom de la table qu'on va créer dans MySQL
  protected tableName = 'categories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire
      table.bigIncrements('categorie_id')

      // Clé étrangère vers la table clubs
      table
        .bigInteger('club_id')
        .unsigned()
        .notNullable()
        .references('club_id')
        .inTable('clubs')
        .onDelete('CASCADE')

      // Clé étrangère vers la table saisons
      table
        .bigInteger('saison_id')
        .unsigned()
        .notNullable()
        .references('saison_id')
        .inTable('saisons')
        .onDelete('CASCADE')

      // Nom de la catégorie ex: "U13", "U17", "Seniors"
      table.string('nom', 50).notNullable()

      // Âges minimum et maximum de la catégorie (optionnels)
      table.integer('age_min').unsigned().nullable()
      table.integer('age_max').unsigned().nullable()

      table.dateTime('created_at').notNullable().defaultTo(this.now())
      table.dateTime('updated_at').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}