import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Table qui stocke les cotisations des membres du club
  protected tableName = 'cotisations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire
      table.bigIncrements('cotisation_id')

      // Clé étrangère vers la table utilisateurs
      table
        .bigInteger('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('utilisateurs')
        .onDelete('CASCADE')

      // Clé étrangère vers la table saisons
      table
        .bigInteger('saison_id')
        .unsigned()
        .notNullable()
        .references('saison_id')
        .inTable('saisons')
        .onDelete('CASCADE')

      // Montant total de la cotisation ex: 150.00
      table.decimal('montant', 8, 2).notNullable()

      // Statut du paiement
      // en_attente : pas encore payé
      // partiel : payé en partie (paiement échelonné)
      // solde : entièrement payé
      table
        .enum('statut', ['en_attente', 'partiel', 'solde'])
        .defaultTo('en_attente')

      // Date du premier paiement (pour les paiements échelonnés)
      table.date('date_debut_paiement').nullable()

      // Date du dernier paiement reçu
      table.date('dernier_paiement').nullable()

      // Méthode de paiement utilisée
      table
        .enum('methode', ['en_ligne', 'cheque', 'especes', 'virement'])
        .nullable()

      // Un membre ne peut avoir qu'une seule cotisation par saison
      table.unique(['user_id', 'saison_id'])

      table.dateTime('created_at').notNullable().defaultTo(this.now())
      table.dateTime('updated_at').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}