import env from '#start/env'
import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  // On utilise MySQL comme base de données principale
  connection: 'mysql',

  connections: {
    // Configuration de la connexion MySQL
    mysql: {
      client: 'mysql2',
      connection: {
        host: env.get('DB_HOST'),
        port: env.get('DB_PORT'),
        user: env.get('DB_USER'),
        password: env.get('DB_PASSWORD'),
        database: env.get('DB_DATABASE'),
      },
      migrations: {
        // Trier les migrations par nom de fichier
        naturalSort: true,
        // Dossier contenant les migrations
        paths: ['database/migrations'],
      },
      // Afficher les requêtes SQL en mode développement
      debug: app.inDev,
    },
  },
})

export default dbConfig