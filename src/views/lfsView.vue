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
        <h1>Création d'une boutique en ligne</h1>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <img 
          style="max-height: 200px; border-radius: 10px; transition: transform 0.3s;" 
          class="img-fluid" 
          src="../../images/logoLFS.png" 
          alt="Logo Legendary Football Shirts"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <p class="fs-3" style="text-align: justify;">
          Pour m'adapter à la gestion et à la création d'une boutique en ligne, j'ai lancé Legendary Football Shirts, un e-commerce dédié aux maillots de football vintage. Cette boutique, propulsée par WooCommerce, est conçue pour inclure tous les éléments nécessaires à la gestion d'un magasin en ligne. Les utilisateurs peuvent y rechercher des produits, les acheter, et bénéficier d'une expérience d'achat complète.
        Lors de la conception, je me suis également intéressé à la création de plugins pour WordPress. Pour m'entraîner, j'ai codé un plugin qui affiche une bannière en haut de la page d'accueil pendant 10 secondes. Cette bannière offre une réduction aux clients lors de leur première visite, ajoutant une touche personnelle et incitative à l'expérience utilisateur.
        </p>
      </div>
      <div class="col-md-6 d-flex justify-content-center">
      <img 
          style="max-height: 600px; border-radius: 10px; transition: transform 0.3s;" 
          class="img-fluid" 
          src="../../images/online-shopping-concept-web-landing-page-digital-marketing-website-mobile-application_25819-695.jpg" 
          alt="Illustration Hitman"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <video 
          class="video-fluid" 
          src="../../videos/lfs.mp4" 
          alt="Illustration Hitman"
          autoplay
          loop
        ></video>
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
.video-fluid {
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s;
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
</style>
