<template>
<header >
    <nav class="navbar navbar-expand-lg navbar-light bg-light bgbg ">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand nav justify-content-end">Accueil</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink to="/cv" class="nav-link" aria-current="page">CV</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/portfolio" class="nav-link">Portfolio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Infographie Hitman</h1>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <img 
          style="max-height: 600px; border-radius: 10px; transition: transform 0.3s;" 
          class="img-fluid" 
          src="../../images/illustrationHitman.jpg" 
          alt="Illustration Hitman"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8">
        <p class="fs-3" style="text-align:justify">
          Cette infographie me tient particulièrement à cœur, car c'est la première création que j'ai réalisée avec Illustrator. L'objectif était de concevoir une illustration minimaliste sur un thème de la pop culture qui nous passionne. J'ai donc choisi de m'inspirer de l'assassin le plus emblématique du jeu vidéo : l'Agent 47.
          Mon illustration capture des éléments iconiques de ce personnage mystérieux et redoutable. On y retrouve sa célèbre cravate rouge, facilement reconnaissable, ainsi que ses mythiques Silverballers, des armes qui symbolisent son efficacité létale. De plus, j'ai inclus le code-barres distinctif présent à l'arrière de son crâne, un détail qui ajoute une touche authentique et intrigante à l'ensemble de l'œuvre.
          Cette expérience de création avec Illustrator a été particulièrement enrichissante pour moi. Non seulement elle m'a permis de développer mes compétences techniques, mais elle m'a aussi donné l'occasion de rendre hommage à un personnage qui a marqué l'univers du jeu vidéo.
        </p>
      </div>
      <div class="col-md-4 d-flex justify-content-center justify-content-md-end">
        <img 
          style="max-height: 600px; border-radius: 10px; transition: transform 0.3s;" 
          class="img-fluid" 
          src="../../images/hitmanabsolution.png" 
          alt="Illustration Hitman"
        >
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
            <h5 style="color:white">Navigation</h5>
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
            <h5 style="color:white">Où me joindre ?</h5>
            <br>
            <ul class="list-unstyled">
              <li style="color:white"><img width="20px" src="../../images/gmail.png"><a style="color:white" href="mailto:najih.adnane@gmail.com"> najih.adnane@gmail.com</a></li>
              <li style="color:white"><img width="20px" src="../../images/whatsapp.png"> +32 4 71 13 27 44</li>
              <li style="color:white"><img width="20px" src="../../images/linkedin.png"><a style="color:white" href="https://www.linkedin.com/in/adnane-najih-9420b1292/"> Najih Adnane</a></li>
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
    
    AOS.init();
  }
}
</script>

<style scoped>
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
</style>
