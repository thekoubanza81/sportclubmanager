import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Table qui stocke les réponses de présence des joueurs
  protected tableName = 'presences'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire
      table.bigIncrements('presence_id')

      // Clé étrangère vers la table evenements
      table
        .bigInteger('evenement_id')
        .unsigned()
        .notNullable()
        .references('evenement_id')
        .inTable('evenements')
        .onDelete('CASCADE')

      // Clé étrangère vers la table utilisateurs
      table
        .bigInteger('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('utilisateurs')
        .onDelete('CASCADE')

      // Statut de la présence
      // en_attente : le joueur n'a pas encore répondu
      // confirme : le joueur sera présent
      // absent : le joueur sera absent
      table
        .enum('statut', ['en_attente', 'confirme', 'absent'])
        .defaultTo('en_attente')

      // Motif d'absence optionnel
      table.text('motif').nullable()

      // Date de la dernière mise à jour de la présence
      table.timestamp('update_time').nullable()

      // Un joueur ne peut avoir qu'une seule présence par événement
      table.unique(['evenement_id', 'user_id'])

      table.dateTime('created_at').notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}