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
        <h1>Développement d'une application</h1>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center ">
        <img 
          style="max-height: 300px; border-radius: 10px; transition: transform 0.3s;" 
          class="img-fluid" 
          src="../../images/FaviconSmartFit.png"
          alt="Page d'accueil Smartfit"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5" >
    <div class="row">
      <div class="col-md-6" data-aos="zoom-in">
        <p class="fs-3" style="text-align: justify;">
         Lors du Hackaton 2024, organisé par le MIC, j'ai eu la chance de pouvoir développer un prototype d'application pendant 48H. Les thèmes proposés
         étaient au nombre de trois : L'IA dans une application, la reconnaissance d'images par l'IA et la réalité virtuelle. Nous avons décidé de partir sur les 2 premiers thèmes.
         C'est ainsi qu'est né 'Smartfit', une application qui, en fonction du matériel disponible et des muscles que l'utilisateur veut travailler, va créer un programme d'entrainement.
         L'utilisateur entre une photo et choisis un muscle, ces informations sont envoyés à l'IA, qui lui répond en lui indiquant les exercices à faire, le nombre de répétitions et de séries ainsi que la description des exercices.

        </p>
      </div>
      <div class="col-md-6 d-flex justify-content-center" data-aos="zoom-in">
      <img 
          style="max-height: 600px; border-radius: 10px; transition: transform 0.3s;" 
          class="img-fluid" 
          src="../../images/Hackaton.jpeg" 
          alt="Illustration Hitman"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <video 
          class="video-fluid"  data-aos="zoom-in"
          src="../../videos/Smartfit.mp4" 
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
