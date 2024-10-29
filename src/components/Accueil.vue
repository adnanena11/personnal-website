<template>
  <div>
    <div class="container-fluid relative">
      <div class="lignes">
          <div class="l1"></div>
          <div class="l2"></div>
      </div>

        <div class="container-first">
            <h1 class="h1" style="color:white"><span>Najih Adnane</span></h1>
            <h2 class="h2" style="color:white"><span>Etudiant </span><span>en </span><span>E-business</span></h2>
            <div class="container-btns">
                <router-link to="/portfolio"><button class="btn-first b1">Portfolio</button></router-link>
                <router-link to="/contact"><button class="btn-first b2">Contact</button></router-link>
            </div>
        </div>


      <ul class="medias">
          <li class="bulle"><a href="https://www.facebook.com/adnane.najih?locale=fr_FR" target="_blank"><img src="../../images/fb.png" class="logo-medias"></a></li>
          <li class="bulle"><a href="https://www.instagram.com/adnanenajih/" target="_blank"><img src="../../images/insta.png" class="logo-medias"></a></li>
          <li class="bulle"><a href="https://www.linkedin.com/in/adnane-najih-9420b1292/" target="_blank"><img src="../../images/linkedin_black_logo_icon_147114.png" class="logo-medias"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  mounted() {
    const titreSpans = document.querySelectorAll('h1 span');
    const titreSpans2 = document.querySelectorAll('h2 span');
    const btns = document.querySelectorAll('.btn-first');
    const logo = document.querySelector('.logo');
    const medias = document.querySelectorAll('.bulle');
    const l1 = document.querySelector('.l1');
    const l2 = document.querySelector('.l2');

    const TL = gsap.timeline({paused: true});

    TL
      .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.1)
      .staggerFrom(titreSpans2, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
      .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
      .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
      .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
      .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
      .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    TL.play();
  }
}
</script>

<style>
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.relative {
    background: #333;
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    background: url('../../images/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    overflow-x: hidden;
}

.container-first {
    position: absolute;
    top: 30%;
    left: 5%;
}
.p {
    text-align: justify;
}

.h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Ombre de texte pour amélioration de lisibilité */
    
}

.h1 span {
    position: relative;
}

.h2 {
    font-size: 70px;
    font-family: trajan-color, serif;
    font-weight: 400;
    font-style: normal; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Ombre de texte pour amélioration de lisibilité */
    color: #FFFFFF; /* Blanc */
}

.h2 span {
    position: relative;
}

.container-btns {
    position: relative;
    top: 50px; /* Adjust this value for desktop */
}

.btn-first {
    border: 2px solid #f1f1f1;
    outline: none;
    background: transparent;
    font-size: 30px;
    padding: 20px;
    width: 300px;
    color: #f1f1f1;
    cursor: pointer;
}
.btn-first:nth-child(1){
    margin-right: 30px;
}
.btn-first:hover {
    transition: all 0.3s ease-in-out;
    background: #f1f1f1;
    color: #333;
}
.lignes {
    position: absolute;
    top: 6%;
    left: 5%;
}
.l1 {
    width: 250px;
    height: 3px;
    background: #f1f1f1;
    border-radius: 5px;
}
.l2 {
    width: 140px;
    height: 3px;
    background: #f1f1f1;
    border-radius: 5px;
    position: relative;
    top: 20px;
}

.logo {
    position: absolute;
    right: 2.9%;
    top: 4%;
    width: 80px;
    height: 80px;
    cursor: pointer;
}
.medias {
    list-style-type: none;
    position: absolute;
    right: 3.3%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.bulle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    background: #f1f1f1;
    cursor: pointer;
    position: relative;
}

.logo-medias {
    width: 40px;
    height: 40px;
}
.myfont {
    font-family:Georgia, 'Times New Roman', Times, serif
}
.imageSize{
    height: 100%;
    width: 100%;
}
/* Pour les écrans de taille jusqu'à 768 pixels de large */
@media screen and (max-width: 768px) {
    .container-first {
        top: 20%;
        left: 2%;
    }

    h1 {
        font-size: 100px;
        margin-left: 5%;
    }

    h2 {
        font-size: 40px;
    }

    .btn-first {
        font-size: 20px;
        width: 200px;
        padding: 15px;
    }

    .container-btns {
        top: 100px; /* Adjust this value for tablets */
    }

    .lignes {
        top: 3%;
        left: 2%;
    }

    .logo {
        width: 60px;
        height: 60px;
        right: 2%;
        top: 2%;
    }

    .medias {
        right: 2.5%;
        top: 30%;
    }
}

/* Pour les écrans de taille jusqu'à 480 pixels de large */
@media screen and (max-width: 480px) {
    .container-first {
        top: 10%;
        left: 2%;
    }

    h1 {
        font-size: 60px;
        margin-left: 5%;
    }

    h2 {
        font-size: 30px;
    }

    .btn-first {
        font-size: 18px;
        width: 150px;
        padding: 12px;
    }

    .container-btns {
        top: 150px; /* Adjust this value for mobile */
    }

    .lignes {
        top: 2%;
        left: 2%;
    }

    .logo {
        width: 50px;
        height: 50px;
        right: 2%;
        top: 2%;
    }

    .medias {
        right: 2.5%;
        top: 25%;
    }
}


</style>
