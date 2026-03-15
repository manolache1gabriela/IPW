import { createRouter, createWebHistory } from 'vue-router'
import GardenFencing from '@/views/GardenFencing.vue'
import GardenPlaygrounds from '@/views/GardenPlaygrounds.vue'
import GardenLandscaping from '@/views/GardenLandscaping.vue'
import Demolition from '@/views/Demolition.vue'
import Homepage from '@/views/Homepage.vue'
import Services from '@/views/Diensten.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage,
    meta: {
      title: 'Visie en Missie',
      description: 'IPWerken is een toonaangevend bedrijf in Antwerpen dat zich toelegt op het leveren van hoogwaardige tuinafsluitingen, tuinspeelplaatsen, tuinaanleg en sloopwerken. Onze missie is om duurzame en esthetische oplossingen te bieden die de buitenruimtes van onze klanten transformeren en verbeteren. We streven ernaar om met vakmanschap, innovatie en klantgerichtheid de verwachtingen van onze klanten te overtreffen en bij te dragen aan het creëren van prachtige en functionele tuinen in Antwerpen en omgeving.'
    }
  },
  {
    path: '/diensten',
    name: 'Diensten',
    component: Services,
    meta: {
      title: 'Diensten',
      description: 'IPWerken biedt een breed scala aan diensten aan in Antwerpen, waaronder tuinafsluitingen, tuinspeelplaatsen, tuinaanleg en sloopwerken. Onze tuinafsluitingen zijn ontworpen om zowel veiligheid als esthetiek te bieden, met duurzame materialen en vakmanschap. Onze tuinspeelplaatsen creëren veilige en creatieve speelomgevingen voor kinderen, terwijl onze tuinaanleg en tuinonderhoud zorgen voor prachtige en functionele buitenruimtes. Daarnaast voeren we professionele sloopwerkzaamheden uit, van het afbreken van oude terrassen tot het verwijderen van verhardingen. Bij IPWerken streven we ernaar om de verwachtingen van onze klanten te overtreffen met hoogwaardige oplossingen die hun tuinen transformeren.'
    }
  },
  {
    path: '/garden-fencing-antwerp',
    name: 'GardenFencing',
    component: GardenFencing,
    meta: {
      title: 'Tuinhekken en sierhekken op maat',
      description: 'IPWerken biedt op maat gemaakte tuinafsluitingen en sierhekken in Antwerpen die zowel veiligheid als esthetiek bieden. Onze hoogwaardige materialen en vakmanschap zorgen voor duurzame oplossingen die uw tuin beschermen en verfraaien. Of u nu op zoek bent naar een modern, klassiek of uniek ontwerp, wij creëren tuinafsluitingen die perfect passen bij uw stijl en behoeften. Met onze expertise transformeren we uw buitenruimte in een veilige en aantrekkelijke omgeving waar u jarenlang van kunt genieten.'
    }
  },
  {
    path: '/garden-playgrounds-antwerp',
    name: 'GardenPlaygrounds',
    component: GardenPlaygrounds,
    meta: {
      title: 'Tuinspeelplaatsen en sierhekken op maat',
      description: 'IPWerken ontwerpt en installeert veilige en creatieve tuinspeelplaatsen in Antwerpen die kinderen een magisch speelparadijs bieden. Onze speeltoestellen zijn duurzaam en ontworpen om jarenlang plezier te bieden, terwijl ze voldoen aan de hoogste veiligheidsnormen. Of u nu een kleine achtertuin heeft of een ruime buitenruimte, wij creëren op maat gemaakte speelzones die perfect passen bij uw tuin en de behoeften van uw kinderen. Met onze expertise transformeren we uw tuin in een veilige en leuke omgeving waar kinderen zorgeloos kunnen genieten.'
    }
  },
  {
    path: '/garden-landscaping-antwerp',
    name: 'GardenLandscaping',
    component: GardenLandscaping,
    meta: {
      title: 'Tuinaanleg en tuinonderhoud',
      description: 'IPWerken biedt professionele tuinaanleg en tuinonderhoud in Antwerpen, gericht op het creëren van prachtige en functionele buitenruimtes. Onze experts zorgen voor duurzame oplossingen die uw tuin transformeren en verbeteren, met aandacht voor detail en kwaliteit. Of u nu een kleine tuin heeft of een ruime buitenruimte, wij leveren op maat gemaakte diensten die perfect passen bij uw behoeften en wensen.'
    }
  },
  {
    path: '/demolition-antwerp',
    name: 'Sloopwerkzaamheden en verwijderingen',
    component: Demolition,
    meta: {
      title: 'Sloopwerkzaamheden en verwijderingen',
      description: 'IPWerken voert professionele sloopwerkzaamheden uit in Antwerpen, van het afbreken van oude terrassen tot het verwijderen van verhardingen. Onze experts zorgen voor veilige en efficiënte uitvoering van sloopwerkzaamheden, met aandacht voor detail en kwaliteit. Of u nu een kleine tuin heeft of een ruime buitenruimte, wij leveren op maat gemaakte diensten die perfect passen bij uw behoeften en wensen.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})
router.afterEach((to) => {
  const defaultTitle = 'IPWerken - Tuinafsluitingen, tuinspeelplaatsen, tuinaanleg en sloopwerken in Antwerpen'

  document.title = to.meta.title
    ? `${to.meta.title} | ${defaultTitle}`
    : defaultTitle

  const description = document.querySelector('meta[name="description"]')
  description.setAttribute(
    'content',
    to.meta.description || 'IPWerken is een toonaangevend bedrijf in Antwerpen dat zich toelegt op het leveren van hoogwaardige tuinafsluitingen, tuinspeelplaatsen, tuinaanleg en sloopwerken. Onze missie is om duurzame en esthetische oplossingen te bieden die de buitenruimtes van onze klanten transformeren en verbeteren. We streven ernaar om met vakmanschap, innovatie en klantgerichtheid de verwachtingen van onze klanten te overtreffen en bij te dragen aan het creëren van prachtige en functionele tuinen in Antwerpen en omgeving.'
  )

  gtag('config', 'G-XCDG614FQW', {
    page_path: to.fullPath
  })
})
export default router
