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
        <h1>Communication numérique</h1>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <img
          style="max-height: 300px; border-radius: 10px; transition: transform 0.3s;"
          class="img-fluid"
          src="../../images/Logo.jpg"
          alt="Logo Celeste"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6" data-aos="zoom-in">
        <p class="fs-3" style="text-align: justify;">
          Dans le cadre de mon cours de communication numérique, j'ai eu l'opportunité de développer l'ensemble de l'aspect marketing en ligne pour une marque de boisson fictive. J'ai choisi de créer une marque de sodas haut de gamme, en mettant l'accent sur une communication sophistiquée et élégante tout au long des différents projets. 
          L'archétype de cette marque était clairement celui du dirigeant, symbolisant le pouvoir, le contrôle et l'autorité.
          Pour renforcer cette image, j'ai élaboré des campagnes publicitaires ciblées et des stratégies de branding qui mettent en avant 
          les valeurs de luxe et d'exclusivité de la marque. Cette expérience m'a permis 
          de comprendre l'importance d'une communication cohérente et bien pensée pour créer une identité de marque forte et impactante.
        </p>
      </div>
      <div class="col-md-6 d-flex justify-content-center" data-aos="zoom-in">
        <img
          style="max-height: 600px; border-radius: 10px; transition: transform 0.3s;"
          class="img-fluid"
          src="../../images/illustration-social-media-concept_53876-9147.jpg"
          alt="Illustration E-marketing"
        >
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../../images/Celeste/canetteNoel.png" class="d-block w-100 carousel-image" alt="Slide 1">
              <div class="carousel-caption d-none d-md-block">
                <h2>Canette spécial Noêl</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../../images/Celeste/PUB1.png" class="d-block w-100 carousel-image" alt="Slide 2">
              <div class="carousel-caption d-none d-md-block">
                <h2>Quartier général Celeste</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../../images/Celeste/TESTCANETTE.png" class="d-block w-100 carousel-image" alt="Slide 3">
              <div class="carousel-caption d-none d-md-block">
                <h2>Première canette Celeste</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../../images/Celeste/CarteVisite.png" class="d-block w-100 carousel-image" alt="Slide 4">
              <div class="carousel-caption d-none d-md-block">
                <h2>Carte de visite Celeste</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../../images/Celeste/PUB2.png" class="d-block w-100 carousel-image" alt="Slide 5">
              <div class="carousel-caption d-none d-md-block">
                <h2>Publicité urbaine </h2>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Précédent</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Suivant</span>
          </button>
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
.carousel-image {
  height: 900px; /* You can adjust this value to your desired height */
  object-fit: cover;
  object-position: center;
}

@media (max-width: 768px) {
  .carousel-image {
    height: 500px; /* Adjust this value for mobile view */
  }
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
