import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Le nom de la table qu'on va créer dans MySQL
  protected tableName = 'clubs'

  // La méthode "up" est exécutée quand on lance les migrations
  // C'est ici qu'on crée la table et ses colonnes
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire - s'incrémente automatiquement (1, 2, 3...)
      table.bigIncrements('club_id')

      // Nom complet du club ex: "Olympique de Marseille"
      table.string('club_nom_long', 150).notNullable()

      // Nom court du club ex: "OM"
      table.string('club_nom_court', 50).notNullable()

      // Description optionnelle du club
      table.text('description').nullable()

      // Date de création du club
      table.date('creation_date').notNullable()

      // Statut du club sur la plateforme
      table.enum('statut', ['actif', 'suspendu']).defaultTo('actif')

      // Dates de création et modification automatiques
      table.dateTime('created_at').notNullable().defaultTo(this.now())
      table.dateTime('updated_at').nullable().defaultTo(this.now())
    })
  }

  // La méthode "down" est exécutée si on veut annuler la migration
  async down() {
    this.schema.dropTable(this.tableName)
  }
}