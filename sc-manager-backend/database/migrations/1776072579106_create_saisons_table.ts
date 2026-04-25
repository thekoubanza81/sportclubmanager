import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Le nom de la table qu'on va créer dans MySQL
  protected tableName = 'saisons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire
      table.bigIncrements('saison_id')

      // Clé étrangère vers la table clubs
      // CASCADE : si le club est supprimé, ses saisons sont supprimées aussi
      table
        .bigInteger('club_id')
        .unsigned()
        .notNullable()
        .references('club_id')
        .inTable('clubs')
        .onDelete('CASCADE')

      // Libellé de la saison ex: "2024/2025"
      table.string('libelle', 20).notNullable()

      // Dates de début et fin de la saison
      table.date('date_debut').notNullable()
      table.date('date_fin').notNullable()

      // Statut de la saison
      table
        .enum('statut', ['a_venir', 'en_cours', 'terminee'])
        .defaultTo('a_venir')

      table.dateTime('created_at').notNullable().defaultTo(this.now())
      table.dateTime('updated_at').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}