// URL de l'API AdonisJS
const API_URL = 'http://localhost:3333/api/v1'

export function renderLogin(container) {
  // On injecte le HTML de la page login
  container.innerHTML = `
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
      
      <!-- Carte de login -->
      <div class="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        
        <!-- Logo et titre -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background-color: #003333">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a10 10 0 0 1 0 20M12 2a10 10 0 0 0 0 20M2 12h20M12 2c-2.5 3-4 6.5-4 10s1.5 7 4 10M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10"/>
            </svg>
          </div>
          <h1 class="text-2xl font-bold" style="color: #003333">Sport Club Manager</h1>
          <p class="text-gray-500 text-sm mt-1">Connectez-vous à votre espace</p>
        </div>

        <!-- Message d'erreur (caché par défaut) -->
        <div id="error-msg" class="hidden bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-4 text-sm"></div>

        <!-- Formulaire -->
        <form id="login-form" class="space-y-5">
          
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email"
              placeholder="exemple@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent"
              style="focus-ring-color: #008080"
              required
            />
          </div>

          <!-- Mot de passe -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input 
              type="password" 
              id="password"
              placeholder="••••••••"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:border-transparent"
              required
            />
          </div>

          <!-- Bouton connexion -->
          <button 
            type="submit"
            id="submit-btn"
            class="w-full py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style="background-color: #008080"
          >
            Se connecter
          </button>

        </form>

      </div>
    </div>
  `

  // On récupère les éléments du formulaire
  const form = document.getElementById('login-form')
  const errorMsg = document.getElementById('error-msg')
  const submitBtn = document.getElementById('submit-btn')

  // On écoute la soumission du formulaire
  form.addEventListener('submit', async (e) => {
    // On empêche le rechargement de la page
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    // On désactive le bouton pendant la requête
    submitBtn.textContent = 'Connexion...'
    submitBtn.disabled = true
    errorMsg.classList.add('hidden')

    try {
      // On envoie les credentials à l'API AdonisJS
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()

      if (response.ok) {
        // On sauvegarde le token et les infos utilisateur
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('roles', JSON.stringify(data.user.roles))

        // On redirige selon le rôle
        const roles = data.user.roles
        if (roles.includes('super_admin') || roles.includes('president') || roles.includes('admin_club') || roles.includes('tresorier')) {
          window.location.href = '/src/pages/dashboard.html'
        } else if (roles.includes('coach')) {
          window.location.href = '/src/pages/dashboard.html'
        } else {
          window.location.href = '/src/pages/dashboard.html'
        }
      } else {
        // On affiche le message d'erreur
        errorMsg.textContent = data.error || 'Email ou mot de passe incorrect'
        errorMsg.classList.remove('hidden')
      }

    } catch (err) {
      errorMsg.textContent = 'Impossible de contacter le serveur. Vérifiez votre connexion.'
      errorMsg.classList.remove('hidden')
    }

    // On réactive le bouton
    submitBtn.textContent = 'Se connecter'
    submitBtn.disabled = false
  })
}