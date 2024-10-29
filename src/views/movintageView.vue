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
        <img
          style="max-height: 300px; border-radius: 10px; transition: transform 0.3s;"
          class="img-fluid"
          src="../../images/logoMovintage.JPG"
          alt="Logo Celeste"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6" data-aos="zoom-in">
        <p class="fs-3" style="text-align: justify;">
         Depuis deux ans, j'ai le plaisir de soutenir une entrepreneuse dynamique qui gère une <a href="https://www.instagram.com/movintage.be/" target="_blank"> friperie en ligne </a>. En tant qu'assistant polyvalent, j'apporte mon aide précieuse dans divers aspects de son entreprise. Lors des événements, je suis à ses côtés pour assurer le bon déroulement des opérations.
        La gestion des stocks est l'une de mes principales responsabilités. Je m'assure que les inventaires soient toujours à jour et que les produits soient bien organisés. Je négocie les prix et trouve les meilleurs fournisseurs pour obtenir des vêtements de qualité à des tarifs avantageux.
        Je contribue également à la gestion du site web, m'occupant des mises à jour et des améliorations nécessaires pour offrir une expérience utilisateur optimale.
        Cette expérience m'a permis d'acquérir une connaissance approfondie du commerce en ligne et de développer des compétences variées, tout en soutenant une entrepreneuse passionnée dans la réalisation de ses ambitions. 
        </p>
      </div>
      <div class="col-md-6 d-flex justify-content-center" data-aos="zoom-in">
        <img
          style="max-height: 600px; border-radius: 10px; transition: transform 0.3s;"
          class="img-fluid"
          src="../../images/movintage/hand-drawn-flea-market-concept_52683-54916.jpg"
          alt="Illustration E-marketing"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5" data-aos="zoom-in">
    <div class="row">
      <div class="col-md-12 text-center">
        <img
          class="img-fluid" 
          src="../../images/movintage/IMG_4805.PNG" 
          alt="Illustration Hitman"
          autoplay
          loop
        ></img>
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
            <h5 style="color:white">Navigation </h5>
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
        console.error("Une erreur s'est produite : ," + error);
      });
    
    AOS.init();
  }
}
</script>

<style scoped>

@media (max-width: 768px) {

}
p a {
  text-decoration:none;
  color:rgb(0, 162, 105);
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

