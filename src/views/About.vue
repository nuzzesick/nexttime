<template>
  <div class="container about text-center">
    <h3 class="about-text">Acerca</h3>
    <h4 class="about-title">¿Qué es?</h4>
    <p class="about-description">NextTime es una aplicación web que permite a cualquier persona en el mundo poder predecir o calcular cuál es o será la hora en otra ciudad del mundo según su ubicación actual.</p>
    <h4 class="about-title">Funcionamiento</h4>
    <p class="about-description">NextTime está conectada directamente a la API de <a href="http://worldtimeapi.org/" target="_blank">World Time</a> para obtener la ubicación actual del usuario y la hora en las diversas ciudades disponibles que hay en la aplicación. De esta forma, se calcula la diferencia horaria entre ambas ciudades y así, saber o predecir la hora actual o futura.</p>
    <h4 class="about-title">Desarrollo y mantenimiento</h4>
    <p class="about-description"><a href="https://nuzze.now.sh" target="_blank">Nuzze</a> es quien desarrolló y actualmente mantiene la aplicación. De igual manera, NextTime es una aplicación de código abierto, así que estás <a href="https://github.com/nuzzesick/nexttime" target="_blank">invitado a contribuir</a> en el proyecto ♥.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import cities from "@/cities.js";
export default {
  name: "about"
};
</script>
<style>
.about {
  margin-top: 6vh;
  margin-bottom: 6rem;
}
.about-text {
  font-weight: 700;
  color: var(--black);
  margin-bottom: 2.8rem;
}
.about-title {
  margin-top: 2.8rem;
  font-weight: 500;
  color: var(--dark-gray);
  margin-bottom: 1rem;
}
.about-description {
  margin-top: 1rem;
  font-size: 1.1rem;
}
a {
  color: var(--purple);
}
a:hover {
  color: #4646e2
}
</style>
