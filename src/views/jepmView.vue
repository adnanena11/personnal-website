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
        <h1>Affiche JEPM</h1>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <img
          style="max-height: 300px; border-radius: 10px; transition: transform 0.3s;"
          class="img-fluid"
          src="../../images/Logo_heph_condorcet.png"
          alt="Logo Celeste"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6" data-aos="zoom-in">
        <p class="fs-3" style="text-align: justify;">
        J'ai récemment eu l'opportunité de réaliser une affiche pour la Journée Européenne de la Psychomotricité, organisée par La HEPH Condorcet. Ce projet a été particulièrement significatif pour moi car c'était ma première infographie d'un niveau professionnel, semblable à ce que l'on pourrait attendre dans une agence spécialisée en infographie.

La création de cette affiche a été un défi stimulant, me permettant d'explorer de nouvelles techniques et de mettre en pratique mes compétences en design graphique. J'ai dû m'assurer que l'affiche était à la fois attrayante visuellement et informative, tout en respectant les normes graphiques de l'événement.
        </p>
      </div>
      <div class="col-md-6 d-flex justify-content-center" data-aos="zoom-in">
        <img
          style="max-height: 600px; border-radius: 10px; transition: transform 0.3s;"
          class="img-fluid"
          src="../../images/afficheJEPM.jpg"
          alt="Illustration E-marketing"
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
        console.error("Une erreur s'est produite : ," + error);
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

