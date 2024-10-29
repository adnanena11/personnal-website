<template>
  <header>
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
    <div class="row align-items-center">
      <div class="col-md-6">
        <h1>Contactez-moi</h1>
        <p class="subheading">Je répondrai à toutes vos questions</p>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="firstName" class="form-label">Prénom</label>
            <input type="text" v-model="firstName" class="form-control" id="firstName" placeholder="Tony">
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">Nom</label>
            <input type="text" v-model="lastName" class="form-control" id="lastName" placeholder="Stark">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Adresse mail</label>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="ironman@gmail.com">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea v-model="message" class="form-control" id="message" rows="4" placeholder="Salut, j'ai adoré ton site. Veux-tu faire partie des Avengers ?"></textarea>
          </div>
          <button type="submit" class="btn btn-dark">Envoyer</button>
        </form>
      </div>
      <div class="col-md-6 text-center">
        <img src="../../images/contact.jpg" alt="image Contact" class="img-fluid rounded">
      </div>
    </div>
  </div>
  <footer class="text-dark mt-5 pt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img style="height:100px;width:100px;" src="../../images/logoWhite.png">
        </div>
        <div class="col-md-4">
          <h5 style="color:white">Navigation</h5>
          <br>
          <ul class="list-unstyled">
            <li>
              <RouterLink to="/cv" style="color:white">CV</RouterLink>
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
          <h5 style="color:white">Où me joindre</h5>
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
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      if (!this.firstName || !this.lastName || !this.email || !this.message) {
        alert('Veuillez remplir tous les champs.');
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
      }

      alert('Votre message a été envoyé');
      // Code to submit form
    }
  }
};
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

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(0, 62, 105);
}

.subheading {
  font-size: 1.25rem;
  color: #666;
}

.form-label {
  font-weight: bold;
}

.btn-dark {
  background-color: rgb(0, 62, 105);
  color: #fff;
}

.btn-dark:hover {
  background-color: #333;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
