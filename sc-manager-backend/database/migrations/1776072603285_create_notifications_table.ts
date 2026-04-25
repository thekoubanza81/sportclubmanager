import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Table qui stocke les notifications envoyées aux utilisateurs
  protected tableName = 'notifications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire
      table.bigIncrements('notification_id')

      // Clé étrangère vers la table evenements
      table
        .bigInteger('evenement_id')
        .unsigned()
        .notNullable()
        .references('evenement_id')
        .inTable('evenements')
        .onDelete('CASCADE')

      // Clé étrangère vers la table utilisateurs (destinataire)
      table
        .bigInteger('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('utilisateurs')
        .onDelete('CASCADE')

      // Type de notification :
      // creation_evenement : envoyée quand un événement est créé
      // rappel_j1 : rappel automatique la veille à 20h
      // rappel_j0 : rappel automatique le jour J à 8h
      // rappel_manuel : rappel envoyé manuellement par le coach
      table
        .enum('type', [
          'creation_evenement',
          'rappel_j1',
          'rappel_j0',
          'rappel_manuel',
        ])
        .notNullable()

      // Statut de l'envoi de la notification
      table
        .enum('statut', ['en_attente', 'envoye', 'echec'])
        .defaultTo('en_attente')

      // Date et heure d'envoi de la notification
      table.dateTime('send_time').nullable()

      table
        .dateTime('created_at')
        .notNullable()
        .defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}