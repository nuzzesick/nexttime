<template>
  <div class="container help text-center">
    <h3 class="help-text">Ayuda</h3>
    <h4 class="help-title">¿Para qué sirve?</h4>
    <p class="help-description">Con NextTime podrás saber la hora futura o actual de otra ciudad. Por ejemplo, si vivís en Buenos Aires podés averiguar qué hora es en París en este momento, o predecir qué hora será en otro momento del día.</p>
    <h4 class="help-title">¿Cómo lo uso?</h4>
    <p class="help-description">¡Es muy sencillo empezar a usar NexTime!<br>Nosotros nos encargamos de automáticamente obtener tu ciudad y hora actual, por lo tanto, primero tendrás que elegir el continente de la ciudad que tenés en mente. Luego, seleccionar la ciudad en cuestión y por último la hora para utilizar como predicción/cálculo (por defecto seleccionamos tu hora actual).<br>Si estás desde un dispositivo móvil, el resultado aparecerá abajo de todo y si estás desde una computadora de escritorio o tablet, se mostrará a la derecha.</p>
    <h4 class="help-title">¿Se puede cambiar mi ubicación actual?</h4>
    <p class="help-description">Aún no se puede cambiar la ubicación actual o invertir el funcionamiento, ya sea por ejemplo, calcular la hora de mi ubicación según el horario de otra ciudad. Estamos trabajando para que eso sea posible en un futuro.<br>¡Estate atento!</p>
    <h4 class="help-title">¿Es seguro?</h4>
    <p class="help-description">Quizás te parezca extraño que detectemos tu ubicación y hora actual de una manera tan rápida, pero eso se debe a que el mismo dispositivo que estás utilizando para conectarte nos la ofrece. De todas formas, podés quedarte totalmente tranquilo de que tu información privada no es compartida con nadie, ni es alojada en ningún sitio o servidor de internet. Si tenés conocimientos de desarrollo o ya sos un desarrollador, te invitamos a que leas el <a href="https://github.com/nuzzesick/nexttime" target="_blank">código fuente</a> de la aplicación para estar aún más seguro.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import cities from "@/cities.js";
export default {
  name: "help"
};
</script>
<style>
.help {
  margin-top: 6vh;
  margin-bottom: 6rem;
}
.help-text {
  font-weight: 700;
  color: var(--black);
  margin-bottom: 2.8rem;
}
.help-title {
  margin-top: 2.8rem;
  font-weight: 500;
  color: var(--dark-gray);
  margin-bottom: 1rem;
}
.help-description {
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
