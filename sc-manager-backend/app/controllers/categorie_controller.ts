import type { HttpContext } from '@adonisjs/core/http'
import Categorie from '#models/categorie'

export default class CategorieController {
  // GET /api/v1/clubs/:clubId/categories
  async index({ params, response }: HttpContext) {
    const categories = await Categorie.query()
      .where('club_id', params.clubId)
    return response.ok(categories)
  }

  // GET /api/v1/categories/:id
  async show({ params, response }: HttpContext) {
    const categorie = await Categorie.find(params.id)
    if (!categorie) return response.notFound({ error: 'Catégorie non trouvée' })
    return response.ok(categorie)
  }

  // POST /api/v1/clubs/:clubId/categories
  async store({ params, request, response }: HttpContext) {
    const data = request.only(['saisonId', 'nom', 'ageMin', 'ageMax'])
    const categorie = await Categorie.create({
      clubId: params.clubId,
      saisonId: data.saisonId,
      nom: data.nom,
      ageMin: data.ageMin || null,
      ageMax: data.ageMax || null,
    })
    return response.created(categorie)
  }

  // PUT /api/v1/categories/:id
  async update({ params, request, response }: HttpContext) {
    const categorie = await Categorie.find(params.id)
    if (!categorie) return response.notFound({ error: 'Catégorie non trouvée' })
    const data = request.only(['nom', 'ageMin', 'ageMax'])
    categorie.merge(data)
    await categorie.save()
    return response.ok(categorie)
  }

  // DELETE /api/v1/categories/:id
  async destroy({ params, response }: HttpContext) {
    const categorie = await Categorie.find(params.id)
    if (!categorie) return response.notFound({ error: 'Catégorie non trouvée' })
    await categorie.delete()
    return response.ok({ message: 'Catégorie supprimée' })
  }
}