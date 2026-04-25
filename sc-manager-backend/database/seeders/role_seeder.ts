import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Role from '#models/role'

export default class RoleSeeder extends BaseSeeder {
  async run() {
    const roles = [
      {
        libelle: 'Super Administrateur',
        slug: 'super_admin',
        description: 'Gestionnaire de toute la plateforme',
      },
      {
        libelle: 'Président',
        slug: 'president',
        description: 'Crée et configure son club',
      },
      {
        libelle: 'Administrateur Club',
        slug: 'admin_club',
        description: 'Gère les joueurs, coachs et catégories',
      },
      {
        libelle: 'Trésorier',
        slug: 'tresorier',
        description: 'Gère les cotisations et les finances',
      },
      {
        libelle: 'Coach',
        slug: 'coach',
        description: 'Planifie et gère ses équipes',
      },
      {
        libelle: 'Joueur',
        slug: 'joueur',
        description: 'Joueur majeur du club',
      },
      {
        libelle: 'Parent',
        slug: 'parent',
        description: "Parent ou tuteur d'un joueur mineur",
      },
    ]

    for (const roleData of roles) {
      await Role.updateOrCreate(
        { slug: roleData.slug },
        roleData
      )
    }

    console.log('✅ 7 rôles insérés avec succès !')
  }
}