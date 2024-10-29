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
      <div class="col-md-12">
        <h1>Mon portfolio</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="portfolio in portfolios" :key="portfolio.id">
        <RouterLink :to="getRoute(portfolio.numero)">
          <div 
            class="portfolio-item" 
            @mouseover="showDescription(portfolio.id)" 
            @mouseleave="hideDescription(portfolio.id)"
          >
            <img :src="'https://api.najih-adnane.com/storage/uploads' + portfolio.image.path" :alt="portfolio.title" class="img-fluid">
            <div class="portfolio-description" v-if="portfolio.showDescription">
              <h3>{{ portfolio.title }}</h3>
              <p>{{ portfolio.description }}</p>
            </div>
          </div>
        </RouterLink>
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

export default {
  data() {
    return {
      portfolios: [],
    };
  },
  methods: {
    showDescription(id) {
      this.portfolios = this.portfolios.map(portfolio => 
        portfolio.id === id ? { ...portfolio, showDescription: true } : portfolio
      );
    },
    hideDescription(id) {
      this.portfolios = this.portfolios.map(portfolio => 
        portfolio.id === id ? { ...portfolio, showDescription: false } : portfolio
      );
    },
    getRoute(numero) {
      let route;
      switch (numero) {
        case "1":
          route = '/smartfit';
          break;
        case "2":
          route = '/hitman';
          break;
        case "3":
          route = '/movintage';
          break;
        case "4":
          route = '/celeste';
          break;
        case "5":
          route = '/jepm';
          break;
        case "6":
          route = '/lfs';
          break;
        default:
          route = '/';
      }
      return route;
    },
  },
  mounted() {
    axios.get('https://api.najih-adnane.com/api/content/items/portfolio')
      .then(response => {
        this.portfolios = response.data.map(portfolio => ({
          ...portfolio,
          showDescription: false,
        }));
      })
      .catch(error => {
        console.error('Une erreur s\'est produite : ', error);
      });
  },
};
</script>


<style scoped>
h1 {
  text-align: center;
  color: #253342;
  text-shadow: 0 0 3px white, 0 0 5px black;
}

.portfolio-item {
  position: relative;
  cursor: pointer;
  overflow: hidden; 
}

.portfolio-item img {
  width: 100%;
  height: 600px; 
  object-fit: cover; 
  border-radius: 10px;
  transition: transform 0.3s;
}

.portfolio-item:hover img {
  transform: scale(1.05);
}

.portfolio-description {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 10px;
  pointer-events: none; /* Ensures the description doesn't interfere with hover */
}

.portfolio-item:hover .portfolio-description {
  opacity: 1;
}

.portfolio-description h3 {
  margin-bottom: 10px;
}

.portfolio-description p {
  margin: 0;
  padding: 0 20px;
  text-align: center;
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
</style>

