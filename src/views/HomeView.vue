<template>
  <div>
    <div id="app">
      <router-view/>
      <Accueil></Accueil> 
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <h1 data-aos="fade-up">A propos de moi</h1>
          <p id="apropos"  data-aos="fade-up" data-aos-delay="300" style="text-align:justify">
            Je suis Najih Adnane, j'ai 22 ans et je suis actuellement étudiant en E-business. Passionné par les nouvelles technologies, je m'intéresse particulièrement à l'intelligence artificielle et à son potentiel pour transformer notre monde. Mon enthousiasme pour l'IA me pousse constamment à explorer de nouvelles avancées et à comprendre comment elles peuvent être appliquées dans divers domaines.
            En dehors de mes études, je trouve un grand plaisir dans le sport, qui m'aide à maintenir un équilibre sain entre mon travail intellectuel et mon bien-être physique. J'adore relever de nouveaux défis, qu'ils soient académiques, professionnels ou personnels. Cette quête de dépassement de soi me permet de grandir et d'acquérir de nouvelles compétences.
            Je suis toujours à la recherche de nouvelles opportunités pour apprendre et collaborer sur des projets innovants. Ma curiosité insatiable et mon dévouement à la maîtrise des technologies émergentes me motivent à rester à la pointe des développements dans le domaine de l'E-business.
          </p>
        </div>
        <div class="col-md-6 mt-4" data-aos="zoom-in" data-aos-delay="500">
         <img style="max-height:500px; float:right; border-radius: 10px; transition: transform 0.3s;" src="../../images/photoProfil.jpg" class="img-fluid" alt="Photo de profil">
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row text-center">
        <div class="col-md-4 mb-3" data-aos="fade-up">
          <button class="btn btn-custom btn-lg w-100" @click="showContent('competences')">Compétences</button>
        </div>
        <div data-aos="fade-up" class="col-md-4 mb-3">
          <button  class="btn btn-custom btn-lg w-100" @click="showContent('experiences')">Expériences</button>
        </div>
        <div data-aos="fade-up" class="col-md-4 mb-3">
          <button  class="btn btn-custom btn-lg w-100" @click="showContent('etudes')">Etudes</button>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-12">
          <div v-if="activeContent === 'competences'" class="competences-container" data-aos="fade-up">
            <div class="row">
              <div class="col-md-3" v-for="skill in skills" :key="skill.ID">
                <div class="circle" :ref="`circle-${skill.ID}`">
                  <div class="liquid"></div>
                  <div class="inner-circle">
                    <span>{{ skill.pourcentage }}%</span>
                  </div>
                </div>
                <h5>{{ skill.titre }}</h5>
              </div>
            </div>
          </div>
          <div v-if="activeContent === 'experiences'" data-aos="fade-up">
            <h2 class="experience-title">Mes expériences professionnelles</h2>
            <div class="experience-table">
              <table>
                <thead>
                  <tr>
                    <th style="text-align:center">Entreprise</th>
                    <th style="text-align:center">Période</th>
                    <th style="text-align:center">Poste</th>
                    <th style="text-align:center">Compétences</th>
                    <th style="text-align:center">Logo de l'entreprise</th>
                  </tr>
                </thead>
                <tbody>
                   <tr v-for="experience in experiences">
                    <td style="text-align:center">{{ experience.entreprise }}</td>
                    <td style="text-align:center">{{ experience.periode }}</td>
                    <td style="text-align:center">{{ experience.poste }}</td>
                    <td style="text-align:center">{{ experience.competences }}</td>
                    <td style="text-align:center"><img :src="'https://api.najih-adnane.com/storage/uploads' + experience.logo.path" :alt="experience.entreprise" style="max-width: 100px; max-height: 100px;"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-if="activeContent === 'etudes'" data-aos="fade-up">
          <h2 class="experience-title">Mes formations scolaires</h2>
            <div class="experience-table">
              <table>
                <thead>
                  <tr>
                    <th style="text-align:center">Secteur</th>
                    <th style="text-align:center">Période</th>
                    <th style="text-align:center">Institut</th>
                    <th style="text-align:center">Matières favorites</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="text-align:center">E-business</td>
                    <td style="text-align:center">Septembre 2022 - Aujourd'hui</td>
                    <td style="text-align:center">Heph Condorcet</td>
                    <td style="text-align:center">Programmation - Software Development</td>
                  </tr>
                  <tr>
                    <td style="text-align:center">Sciences humaines et sociales</td>
                    <td style="text-align:center">Septembre 2020 - Juin 2022</td>
                    <td style="text-align:center">Université de Mons</td>
                    <td style="text-align:center">Gestion des ressources humaines</td>
                  </tr>
                  <tr>
                    <td style="text-align:center">Sciences fortes</td>
                    <td style="text-align:center">Septembre 2014 - Juin 2020</td>
                    <td style="text-align:center">Athénée Royal Robert Campin</td>
                    <td style="text-align:center"> Physique - Anglais </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="container mt-5">
  <div class="row">
    <div class="col-md-12">
      <h1 data-aos="zoom-in" style="text-align:center;">Quelques projets</h1>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-md-4 shadow" data-aos="fade-up">
      <div class="card h-100">
        <img src="../../images/FaviconSmartFit.png" class="card-img-top img-fluid" alt="Logo Smartfit">
        <div class="card-body">
          <h4 class="card-title" style="text-align:center;">Smartfit</h4>
          <p class="card-text">Lors d'un Hackaton, j'ai eu l'occasion de travailler sur un projet utilisant l'intelligence artificielle pour créer un entrainement sur mesure à l'utilisateur.</p>
           <router-link to="/smartfit"><button class="btn btn-custom btn-project w-50">En savoir plus</button></router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4 shadow" data-aos="fade-up">
      <div class="card h-100">
        <img src="../../images/Logo.jpg" class="card-img-top img-fluid" alt="Logo Celeste">
        <div class="card-body">
          <h4 class="card-title" style="text-align:center;">Celeste</h4>
          <p class="card-text">Dans le cadre de mon cours de communication numérique, j'ai pu travailler sur tout l'aspect marketing d'une marque de boisson imaginée.</p>
          <router-link to="/celeste"><button class="btn btn-custom btn-project w-50"> En savoir plus</button></router-link>
        </div>
      </div>
    </div>
    <div class="col-md-4 shadow" data-aos="fade-up">
      <div class="card h-100">
        <img src="../../images/logoMovintage.JPG" class="card-img-top img-fluid" alt="Mo'vintage">
        <div class="card-body">
          <h4 class="card-title" style="text-align:center;">Mo'Vintage</h4>
          <p class="card-text">Depuis avril 2022, je suis assistant pour une TPE belge travaillant dans le domaine de la vente de vêtements de seconde main en ligne.</p>
          <Router-link to="/movintage"><button class="btn btn-custom btn-project w-50"> En savoir plus</button></Router-link>
        </div>
      </div>
    </div>
  </div>
</div>
    <footer class="text-dark mt-5 pt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img style="height:100px;width:100px;"  src="../../images/logoWhite.png">
          </div>
          <div class="col-md-4">
            <h5>Navigation</h5>
            <br>
            <ul class="list-unstyled">
              <li>
              <RouterLink to="/cv" style="color:white" >CV</RouterLink>
            </li>
            <li>
              <RouterLink to="/portfolio" style="color:white">Portfolio</RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" style="color:white">Contact</RouterLink>
            </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Où me joindre ?</h5>
            <br>
            <ul class="list-unstyled">
              <li style="color:white"><img width="20px" src="../../images/gmail.png"><a style="color:white" href="mailto:najih.adnane@gmail.com"> najih.adnane@gmail.com</a></li>
              <li style="color:white"><img width="20px" src="../../images/whatsapp.png"> +32 4 71 13 27 44</li>
              <li style="color:white"><img width="20px" src="../../images/linkedin.png"><a style="color:white" href="https://www.linkedin.com/in/adnane-najih-9420b1292/" target="_blank"> Najih Adnane</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
          <p style='color:grey;text-align:center;font-size:12px'>Site web réalisé à l'aide de VueJS, Bootstrap, Cockpit, Axios et AOS @copyright Najih Adnane</p>
          </div>
        </div>
      </div>

    </footer>
  </div>
</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Accueil from '@/components/Accueil.vue';

export default {
  name: 'App',
  components: {
    Accueil 
  },
  data() {
    return {
      message: {},
      portfolios: [{
        description: '',
        image: {
          path: "",
          title: "",
        },
        title: '',
        url: '',
      }],
      experiences: [{
        entreprise: '',
        poste: '',
        competences: '',
        logo: {
          path: "",
        },
      }],
      activeContent: '',
      skills: [
        { ID:'' , 
        pourcentage:'' , 
        titre: ''
        },
      ]
    }
  },
  methods: {
    showContent(section) {
      this.activeContent = section;
      if (section === 'competences') {
        this.$nextTick(() => {
          this.animateLiquid();
        });
      }
    },
    animateLiquid() {
      this.skills.forEach((skill, index) => {
        const circle = this.$refs[`circle-${skill.ID}`][0];
        const liquid = circle.querySelector('.liquid');
        liquid.style.height = `${skill.pourcentage}%`;
      });
    }
  },
  mounted() {
    axios.get("https://api.najih-adnane.com/api/content/items/portfolio")
      .then(response => {
        this.portfolios = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite : ', error);
      });
    axios.get("https://api.najih-adnane.com/api/content/items/experiences")
      .then(response => {
        this.experiences = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite : ', error);
      });
    axios.get("https://api.najih-adnane.com/api/content/items/skills")
      .then(response => {
        this.skills = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.error('Une erreur s\'est produite : ', error);
      });
    
    AOS.init();
  }
}
</script>

<style scoped>
a {
  text-decoration:none;
}
.card {
  border: none;
  transition: all 0.3s;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px; /* Hauteur fixe pour toutes les images */
  object-fit: cover; /* Ajustement de la taille de l'image pour qu'elle remplisse la zone */
}

.experience-title {
  color: rgb(0, 62, 105);
  text-align: center;
}

.experience-table {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #000;
  text-align: left;
}

th {
  background-color: rgb(0, 62, 105);
  color: #fff;
}

td img {
  max-width: 100px;
  max-height: 100px;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  color: rgb(0, 62, 105);
}

p {
  font-size: 1.3rem;
  line-height: 1.5;
}

footer {
  background-color: black;
}

footer h5 {
  font-size: 1.25rem;
  font-weight: bold;
}

footer a {
  color: #000;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

img:hover {
  transform: scale(1.05);
}

.btn-custom {
  border: solid black;
  color: rgb(0, 62, 105);
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  padding: 1rem 2rem;
  font-size: 1.25rem;
}

.btn-custom:hover {
  background-color: rgb(0, 62, 105);
  color: black;
}

.btn-project {
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.competences-container {
  background-color: rgb(0, 62, 105);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
}

.circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  position: relative;
  overflow: hidden;
}

.inner-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.inner-circle span {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  z-index: 3;
}

.liquid {
  width: 100%;
  height: 0%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #C8E97B;
  transition: height 2s ease-in-out;
  z-index: 1;
}

h5 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  table {
    font-size: 0.8rem;
  }

  th, td {
    padding: 0px;
  }
}

@media (max-width: 576px) {
  table {
    font-size: 0.8rem;
  }

  th, td {
    padding: 0px;
  }
}
</style>

