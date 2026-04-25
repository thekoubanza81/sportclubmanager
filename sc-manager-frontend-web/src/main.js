// Point d'entrée de l'application
// On importe le CSS global
import './style.css'

// On importe la page de login
import { renderLogin } from './pages/login.js'

// On affiche la page de login au démarrage
const app = document.getElementById('app')
renderLogin(app)