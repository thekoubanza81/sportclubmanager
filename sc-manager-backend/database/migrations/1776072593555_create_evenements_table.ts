import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  // Table qui contient à la fois les entraînements ET les matchs
  protected tableName = 'evenements'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      // Clé primaire
      table.bigIncrements('evenement_id')

      // Clé étrangère vers la table clubs
      table
        .bigInteger('club_id')
        .unsigned()
        .notNullable()
        .references('club_id')
        .inTable('clubs')
        .onDelete('CASCADE')

      // Clé étrangère vers la table categories
      table
        .bigInteger('categorie_id')
        .unsigned()
        .notNullable()
        .references('categorie_id')
        .inTable('categories')
        .onDelete('CASCADE')

      // Clé étrangère vers la table saisons
      table
        .bigInteger('saison_id')
        .unsigned()
        .notNullable()
        .references('saison_id')
        .inTable('saisons')
        .onDelete('CASCADE')

      // ── Champs communs ──────────────────────────────────────
      // Type d'événement : entraînement ou match
      table.enum('type', ['entrainement', 'match']).notNullable()

      // Titre de l'événement ex: "Entraînement du mardi"
      table.string('titre', 200).notNullable()

      // Date et heure de l'événement
      table.dateTime('date_heure').notNullable()

      // Lieu optionnel ex: "Stade Municipal"
      table.string('lieu', 200).nullable()

      // Description optionnelle
      table.text('description').nullable()

      // ── Champs spécifiques aux matchs (null si entraînement) ─
      // Nom de l'équipe adversaire
      table.string('adversaire', 150).nullable()

      // true = domicile, false = extérieur
      table.boolean('est_domicile').nullable()

      // Score saisi après le match
      table.integer('score_nous').unsigned().nullable()
      table.integer('score_adversaire').unsigned().nullable()

      // Compétition en texte libre ex: "Championnat Régional D2"
      table.string('competition', 200).nullable()

      table.dateTime('created_at').notNullable().defaultTo(this.now())
      table.dateTime('updated_at').nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}