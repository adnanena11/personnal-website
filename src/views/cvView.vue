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
  <div class="container my-5">
    <div class="card">
      <div class="card-header text-center text-white" style="background-color:rgb(0, 62, 105)">
        <img src="../../images/photoProfil.jpg" alt="Profile Image" class="rounded-circle my-3" width="150">
        <h1>Najih Adnane</h1>
        <p>Étudiant jobiste</p>
      </div>
      <div class="card-body">
        <section class="mb-4">
          <h2 class="border-bottom pb-2">À propos de moi</h2>
          <p>Jeune étudiant de 22 ans en E-business, j'adore le sport et apprendre de nouvelles choses. Relever de nouveaux défis (informatiques ou non) me fait vibrer !</p>
        </section>
        <section class="mb-4">
          <h2 class="border-bottom pb-2">Études</h2>
          <ul class="list-unstyled">
            <li>
              <strong>Bachelier en E-business (2022 - Aujourd'hui)</strong>
              <p>Création de site web, Marketing, gestion d'un ERP (Odoo), Programmation, Négociation...</p>
            </li>
            <li>
              <strong>Bachelier en sciences humaines (2020 - 2022)</strong>
              <p>Sociologie, Psychologie sociale, Gestion des ressources humaines, Fondements du droit...</p>
            </li>
          </ul>
        </section>
        <section class="mb-4">
          <h2 class="border-bottom pb-2">Expérience</h2>
          <ul class="list-unstyled">
            <li>
              <strong>Ouvrier centre de retour - Colruyt (2020 - Aujourd'hui)</strong>
              <p>Second job étudiant qui m’a fait découvrir la ponctualité, les horaires d’usine et le travail en équipe.</p>
            </li>
            <li>
              <strong>Assistant - Mo'Vintage (2022-Aujourd'hui)</strong>
              <p>Premiers pas dans l'univers de la création d'entreprise et de la vente en ligne.</p>
            </li>
            <li>
              <strong>Agent d'accueil - Aqualibi (2020)</strong>
              <p>Premier job étudiant qui m’a permis de découvrir le monde du travail et la relation clientèle.</p>
            </li>
          </ul>
        </section>
        <div class="row">
          <div class="col-md-12">
            <section class="mb-4">
              <h2 class="border-bottom pb-2">Contact</h2>
              <p>Email: najih.adnane11@gmail.com</p>
              <p>Adresse: 32, Cité Henri Soyer, 7610 Rumes</p>
              <p>Téléphone: +32 (0)471 13 27 44</p>
            </section>
          </div>          
        </div>
        <div class="row">
        <div class="col-md-6">
            <section class="mb-4">
              <h2 class="border-bottom pb-2">Compétences</h2>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary progress-bar-animated progress-bar-striped" role="progressbar" :style="{width: '60%'}" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">PHP</div>
              </div>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary progress-bar-animated progress-bar-striped" role="progressbar" :style="{width: '70%'}" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">JAVASCRIPT</div>
              </div>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary progress-bar-animated progress-bar-striped" role="progressbar" :style="{width: '80%'}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">HTML</div>
              </div>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary progress-bar-animated progress-bar-striped" role="progressbar" :style="{width: '60%'}" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">CSS</div>
              </div>
            </section>
          </div>
          <div class="col-md-6">
        <section class="mb-4">
          <h2 class="border-bottom pb-2">Langues</h2>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary progress-bar-animated progress-bar-striped" role="progressbar" :style="{width: '100%'}" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">FRANCAIS</div>
              </div>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary progress-bar-animated progress-bar-striped" role="progressbar" :style="{width: '70%'}" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">ANGLAIS</div>
              </div>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary progress-bar-animated progress-bar-striped" role="progressbar" :style="{width: '20%'}" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">NEERLANDAIS</div>
              </div>
              <div class="progress mb-2">
                <div class="progress-bar bg-primary progress-bar-animated progress-bar-striped" role="progressbar" :style="{width: '50%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">ARABE (DIALECTE MAROCAIN)</div>
              </div>
        </section>
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
export default {
  name: 'CvComponent',
  methods: {
    downloadCV() {
      // Mettez à jour ce chemin selon l'emplacement de votre fichier CV dans votre projet
      const link = document.createElement('a');
      link.href = '../../files/CV_Najih_Adnane.pdf';
      link.download = 'CV_Najih_Adnane.pdf';
      link.click();
    }
  }
};
</script>

<style scoped>
h2 {
  color: rgb(0, 62, 105);
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
