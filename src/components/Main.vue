<template>
  <div class="container-fluid main">
    <div class="container main-content">
      <div class="row">
        <div class="sm-col-12 col-md-8">
          <div class="left-content float-left">
            <div class="intro animate__animated animate__fadeIn">Conocé la hora actual o futura en otras ciudades del mundo</div>
            <div class="animate_animated animate__fadeIn">
              <div class="location">
                <h2 class="location-field">Mi ciudad actual</h2>
                <div class="current-location-container">
                  <input id="user-location" class="current-location-input" type="text" readonly="readonly" required>
                </div>
              </div>
              <div class="location">
                <h2 class="location-field">Zona o continente</h2>
                <div class="discover-location-container">
                  <select id="continent" name="select" class="discover-location-select" @change="onChange($event)" v-model="key" required>
                    <option disabled selected>Seleccioná el continente</option>
                    <option v-for="continent in continents" :key="continent.id" :value="continent.original">{{continent.name}}</option>
                  </select>
                </div>
              </div>
              <div id="location-container" class="location animate__animated animate__fadeIn">
                <!-- África -->
                <div id="africa">
                  <h2 class="location-field">Ciudad de África</h2>
                  <div class="discover-location-container">
                    <select id="city_africa" name="select" class="discover-location-select" required>
                      <option disabled selected>Seleccioná una ciudad</option>
                      <option v-for="city_africa in cities_africa" :key="city_africa.original" :value="city_africa.original">{{city_africa.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- América -->
                <div id="america">
                  <h2 class="location-field">Ciudad de América</h2>
                  <div class="discover-location-container">
                    <select id="city_america" name="select" class="discover-location-select" required>
                      <option disabled selected>Seleccioná una ciudad</option>
                      <option v-for="city_america in cities_america" :key="city_america.original" :value="city_america.original">{{city_america.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- Asia -->
                <div id="asia">
                  <h2 class="location-field">Ciudad de Asia</h2>
                  <div class="discover-location-container">
                    <select id="city_asia" name="select" class="discover-location-select" required>
                      <option disabled selected>Seleccioná una ciudad</option>
                      <option v-for="city_asia in cities_asia" :key="city_asia.id" :value="city_asia.original">{{city_asia.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- Atlántico -->
                <div id="atlantico">
                  <h2 class="location-field">Lugar en el Atlántico</h2>
                  <div class="discover-location-container">
                    <select id="city_atlantico" name="select" class="discover-location-select" required>
                      <option disabled selected>Seleccioná un lugar</option>
                      <option v-for="city_atlantico in cities_atlantico" :key="city_atlantico.original" :value="city_atlantico.original">{{city_atlantico.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- Australia -->
                <div id="australia">
                  <h2 class="location-field">Ciudad de Australia/Oceanía</h2>
                  <div class="discover-location-container">
                    <select id="city_australia" name="select" class="discover-location-select" required>
                      <option disabled selected>Seleccioná una ciudad</option>
                      <option v-for="city_australia in cities_australia" :key="city_australia.original" :value="city_australia.original">{{city_australia.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- Europa -->
                <div id="europa">
                  <h2 class="location-field">Ciudad de Europa</h2>
                  <div class="discover-location-container">
                    <select id="city_europa" name="select" class="discover-location-select" required>
                      <option disabled selected>Seleccioná una ciudad</option>
                      <option v-for="city_europa in cities_europa" :key="city_europa.original" :value="city_europa.original">{{city_europa.name}}</option>
                    </select>
                  </div>
                </div>
                <!-- Pacífico -->
                <div id="pacifico">
                  <h2 class="location-field">Lugar en el Pacífico</h2>
                  <div class="discover-location-container">
                    <select id="city_pacifico" name="select" class="discover-location-select" required>
                      <option disabled selected>Seleccioná un lugar</option>
                      <option v-for="city_pacifico in cities_pacifico" :key="city_pacifico.original" :value="city_pacifico.original">{{city_pacifico.name}}</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="hour">
                <h2 class="hour-field">Hora</h2>
                <div class="hour-container">
                  <select id="hour" name="select" class="discover-location-select" required>
                    <option v-for="hour in hours" :key="hour.number">{{hour.number}}</option>
                  </select>
                </div>
              </div>
              <div class="get-container">
                <button id="get" class="btn get-button">¡Listo!</button>
              </div>
            </div>
          </div>
        </div>
        <div class="sm-col-12 col-md-1"></div>
        <div id="resultado-container" class="sm-col-12 col-md-3">
          <div class="right-content text-center">
            <div id="illustration" class="illustration animate__animated animate__bounce"></div>
            <h4 id="resultado" class="resultado animate__animated animate__bounce">La hora a conocer aparecerá aquí</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cities from "@/cities.js";
export default {
  data() {
    return {
      cities_america: cities.cities_america,
      cities_europa: cities.cities_europa,
      cities_africa: cities.cities_africa,
      cities_asia: cities.cities_asia,
      cities_atlantico: cities.cities_atlantico,
      cities_australia: cities.cities_australia,
      cities_pacifico: cities.cities_pacifico,
      hours: cities.hours,
      continents: cities.continents,
      key: 'Seleccioná el continente'
    }
  },
  mounted: ()=> {
    let logo = document.querySelector('.logo');
    let input = document.querySelector('#user-location');
    let resultadoContainer = document.querySelector('#resultado-container');
    let resultado = document.querySelector('#resultado');
    let illustration = document.querySelector('#illustration');
    let final, city, diferenciaHoraria, horarioFinal;
    let continent = document.querySelector('#continent');
    let city_america = document.querySelector('#city_america');
    let city_europa = document.querySelector('#city_europa');
    let city_africa = document.querySelector('#city_africa');
    let city_asia = document.querySelector('#city_asia');
    let city_atlantico = document.querySelector('#city_atlantico');
    let city_australia = document.querySelector('#city_australia');
    let city_pacifico = document.querySelector('#city_pacifico');
    let hora = document.querySelector('#hour');
    let get = document.querySelector('#get');
    let horaActual = new Date().getHours();
    const obtenerUbicacionUsuario = ubicacionUsuario => new Promise((resolve,reject)=> {
      const url = 'http://worldtimeapi.org/api/ip'
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(Error (xhr.statusText))
        }
      }
      xhr.send();
    });
    obtenerUbicacionUsuario().then(ubicacion => mostrar(ubicacion))
    const mostrar = (ubicacion) => {
      final = ubicacion.timezone;
      final = final.split('/').join(' ');
      final = final.split(' ').slice(2).join(' ');
      final = final.split('_').join(' ');
      input.value = final;
      getHoraActual();
    }
    const getHoraActual = () => {
      if (horaActual < 10) {
        horaActual = "0" + horaActual;
      }
      hora.value = horaActual;
    }
    get.addEventListener('click', ()=> {
      window.location.href = "#resultado";
      resultadoContainer.style.display = "block";
      logo.style.backgroundImage = `url('/logo.png')`;
      if ((input.value != '') && (input.value != NaN) && (continent.value != '') && (continent.value != 'Seleccioná un continente') && (continent.value != NaN)) {
        if (((city_america.value != '') && (city_america.value != 'Seleccioná una ciudad') && (city_america.value != NaN)) || ((city_europa.value != '') && (city_europa.value != 'Seleccioná una ciudad') && (city_europa.value != NaN)) || ((city_africa.value != '') && (city_africa.value != 'Seleccioná una ciudad') && (city_africa.value != NaN)) || ((city_asia.value != '') && (city_asia.value != 'Seleccioná una ciudad') && (city_asia.value != NaN)) || ((city_atlantico.value != '') && (city_atlantico.value != 'Seleccioná un lugar') && (city_atlantico.value != NaN)) || ((city_australia.value != '') && (city_australia.value != 'Seleccioná una ciudad') && (city_australia.value != NaN)) || ((city_pacifico.value != '') && (city_pacifico.value != 'Seleccioná un lugar') && (city_pacifico.value != NaN))) {
          if (continent.value === 'America') {
            city = city_america.value;
            obtenerHorario(continent.value, city).then(horario => mostrar(horario));
            const mostrar = (horario) => {
              horario = horario.datetime;
              horario = horario.slice(11,horario.length-19);
              horario = parseInt(horario);
              diferenciaHoraria = horaActual - horario;
              hora = hora.value;
              hora = parseInt(hora);
              horarioFinal = hora - diferenciaHoraria;
              if (diferenciaHoraria < 0) {
                diferenciaHoraria = Math.abs(diferenciaHoraria);
              }
              if (diferenciaHoraria == 1 || diferenciaHoraria == -1) {
                diferenciaHoraria = `${diferenciaHoraria} hora`
              } else {
                diferenciaHoraria = `${diferenciaHoraria} horas`
              }
              city = city.split('_').join(' ');
              illustration.style.backgroundImage = `url('/illustration2.png')`;
              illustration.style.width = '12rem';
              illustration.style.height = '12rem';
              illustration.style.backgroundSize = '12rem';
              if (horarioFinal >= 24) {
                horarioFinal = horarioFinal - 24;
              }
              if (horarioFinal <= -1) {
                horarioFinal = horarioFinal + 24
              }
              if (hora < 10 && horarioFinal < 10) {
                  hora = "0" + hora;
                  horarioFinal = "0" + horarioFinal;
                } else if (hora < 10 && horarioFinal > 10) {
                  hora = "0" + hora;
                } else if (hora < 10 && horarioFinal == 10) {
                  hora = "0" + hora;
                } else if (hora > 10 && horarioFinal < 10) {
                  horarioFinal = "0" + horarioFinal;
                }
              if (horario != horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              } else if (horario == horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              }
              hora = document.querySelector('#hour');
            }
          } else if (continent.value === 'Europe') {
            city = city_europa.value;
            obtenerHorario(continent.value, city).then(horario => mostrar(horario));
            const mostrar = (horario) => {
              horario = horario.datetime;
              horario = horario.slice(11,horario.length-19);
              horario = parseInt(horario);
              diferenciaHoraria = horaActual - horario;
              hora = hora.value;
              hora = parseInt(hora);
              horarioFinal = hora - diferenciaHoraria;
              if (diferenciaHoraria < 0) {
                diferenciaHoraria = Math.abs(diferenciaHoraria);
              }
              if (diferenciaHoraria == 1 || diferenciaHoraria == -1) {
                diferenciaHoraria = `${diferenciaHoraria} hora`
              } else {
                diferenciaHoraria = `${diferenciaHoraria} horas`
              }
              city = city.split('_').join(' ');
              illustration.style.backgroundImage = `url('/illustration2.png')`;
              illustration.style.width = '12rem';
              illustration.style.height = '12rem';
              illustration.style.backgroundSize = '12rem';
              if (horarioFinal >= 24) {
                horarioFinal = horarioFinal - 24;
              }
              if (horarioFinal <= -1) {
                horarioFinal = horarioFinal + 24
              }
              if (hora < 10 && horarioFinal < 10) {
                  hora = "0" + hora;
                  horarioFinal = "0" + horarioFinal;
                } else if (hora < 10 && horarioFinal > 10) {
                  hora = "0" + hora;
                } else if (hora < 10 && horarioFinal == 10) {
                  hora = "0" + hora;
                } else if (hora > 10 && horarioFinal < 10) {
                  horarioFinal = "0" + horarioFinal;
                }
              if (horario != horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              } else if (horario == horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              }
              hora = document.querySelector('#hour');
            }
          } else if (continent.value === 'Africa') {
            city = city_africa.value;
            obtenerHorario(continent.value, city).then(horario => mostrar(horario));
            const mostrar = (horario) => {
              horario = horario.datetime;
              horario = horario.slice(11,horario.length-19);
              horario = parseInt(horario);
              diferenciaHoraria = horaActual - horario;
              hora = hora.value;
              hora = parseInt(hora);
              horarioFinal = hora - diferenciaHoraria;
              if (diferenciaHoraria < 0) {
                diferenciaHoraria = Math.abs(diferenciaHoraria);
              }
              if (diferenciaHoraria == 1 || diferenciaHoraria == -1) {
                diferenciaHoraria = `${diferenciaHoraria} hora`
              } else {
                diferenciaHoraria = `${diferenciaHoraria} horas`
              }
              city = city.split('_').join(' ');
              illustration.style.backgroundImage = `url('/illustration2.png')`;
              illustration.style.width = '12rem';
              illustration.style.height = '12rem';
              illustration.style.backgroundSize = '12rem';
              if (horarioFinal >= 24) {
                horarioFinal = horarioFinal - 24;
              }
              if (horarioFinal <= -1) {
                horarioFinal = horarioFinal + 24
              }
              if (hora < 10 && horarioFinal < 10) {
                  hora = "0" + hora;
                  horarioFinal = "0" + horarioFinal;
                } else if (hora < 10 && horarioFinal > 10) {
                  hora = "0" + hora;
                } else if (hora < 10 && horarioFinal == 10) {
                  hora = "0" + hora;
                } else if (hora > 10 && horarioFinal < 10) {
                  horarioFinal = "0" + horarioFinal;
                }
              if (horario != horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              } else if (horario == horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              }
              hora = document.querySelector('#hour');
            }
          } else if (continent.value === 'Asia') {
            city = city_asia.value;
            obtenerHorario(continent.value, city).then(horario => mostrar(horario));
            const mostrar = (horario) => {
              horario = horario.datetime;
              horario = horario.slice(11,horario.length-19);
              horario = parseInt(horario);
              diferenciaHoraria = horaActual - horario;
              hora = hora.value;
              hora = parseInt(hora);
              horarioFinal = hora - diferenciaHoraria;
              if (diferenciaHoraria < 0) {
                diferenciaHoraria = Math.abs(diferenciaHoraria);
              }
              if (diferenciaHoraria == 1 || diferenciaHoraria == -1) {
                diferenciaHoraria = `${diferenciaHoraria} hora`
              } else {
                diferenciaHoraria = `${diferenciaHoraria} horas`
              }
              city = city.split('_').join(' ');
              illustration.style.backgroundImage = `url('/illustration2.png')`;
              illustration.style.width = '12rem';
              illustration.style.height = '12rem';
              illustration.style.backgroundSize = '12rem';
              if (horarioFinal >= 24) {
                horarioFinal = horarioFinal - 24;
              }
              if (horarioFinal <= -1) {
                horarioFinal = horarioFinal + 24
              }
              if (hora < 10 && horarioFinal < 10) {
                  hora = "0" + hora;
                  horarioFinal = "0" + horarioFinal;
                } else if (hora < 10 && horarioFinal > 10) {
                  hora = "0" + hora;
                } else if (hora < 10 && horarioFinal == 10) {
                  hora = "0" + hora;
                } else if (hora > 10 && horarioFinal < 10) {
                  horarioFinal = "0" + horarioFinal;
                }
              if (horario != horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              } else if (horario == horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              }
              hora = document.querySelector('#hour');
            }
          } else if (continent.value === 'Atlantic') {
            city = city_atlantico.value;
            obtenerHorario(continent.value, city).then(horario => mostrar(horario));
            const mostrar = (horario) => {
              horario = horario.datetime;
              horario = horario.slice(11,horario.length-19);
              horario = parseInt(horario);
              diferenciaHoraria = horaActual - horario;
              hora = hora.value;
              hora = parseInt(hora);
              horarioFinal = hora - diferenciaHoraria;
              if (diferenciaHoraria < 0) {
                diferenciaHoraria = Math.abs(diferenciaHoraria);
              }
              if (diferenciaHoraria == 1 || diferenciaHoraria == -1) {
                diferenciaHoraria = `${diferenciaHoraria} hora`
              } else {
                diferenciaHoraria = `${diferenciaHoraria} horas`
              }
              city = city.split('_').join(' ');
              illustration.style.backgroundImage = `url('/illustration2.png')`;
              illustration.style.width = '12rem';
              illustration.style.height = '12rem';
              illustration.style.backgroundSize = '12rem';
              if (horarioFinal >= 24) {
                horarioFinal = horarioFinal - 24;
              }
              if (horarioFinal <= -1) {
                horarioFinal = horarioFinal + 24
              }
              if (hora < 10 && horarioFinal < 10) {
                  hora = "0" + hora;
                  horarioFinal = "0" + horarioFinal;
                } else if (hora < 10 && horarioFinal > 10) {
                  hora = "0" + hora;
                } else if (hora < 10 && horarioFinal == 10) {
                  hora = "0" + hora;
                } else if (hora > 10 && horarioFinal < 10) {
                  horarioFinal = "0" + horarioFinal;
                }
              if (horario != horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              } else if (horario == horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              }
              hora = document.querySelector('#hour');
            }
          }  else if (continent.value === 'Australia') {
            city = city_australia.value;
            obtenerHorario(continent.value, city).then(horario => mostrar(horario));
            const mostrar = (horario) => {
              horario = horario.datetime;
              horario = horario.slice(11,horario.length-19);
              horario = parseInt(horario);
              diferenciaHoraria = horaActual - horario;
              hora = hora.value;
              hora = parseInt(hora);
              horarioFinal = hora - diferenciaHoraria;
              if (diferenciaHoraria < 0) {
                diferenciaHoraria = Math.abs(diferenciaHoraria);
              }
              if (diferenciaHoraria == 1 || diferenciaHoraria == -1) {
                diferenciaHoraria = `${diferenciaHoraria} hora`
              } else {
                diferenciaHoraria = `${diferenciaHoraria} horas`
              }
              city = city.split('_').join(' ');
              illustration.style.backgroundImage = `url('/illustration2.png')`;
              illustration.style.width = '12rem';
              illustration.style.height = '12rem';
              illustration.style.backgroundSize = '12rem';
              if (horarioFinal >= 24) {
                horarioFinal = horarioFinal - 24;
              }
              if (horarioFinal <= -1) {
                horarioFinal = horarioFinal + 24
              }
              if (hora < 10 && horarioFinal < 10) {
                  hora = "0" + hora;
                  horarioFinal = "0" + horarioFinal;
                } else if (hora < 10 && horarioFinal > 10) {
                  hora = "0" + hora;
                } else if (hora < 10 && horarioFinal == 10) {
                  hora = "0" + hora;
                } else if (hora > 10 && horarioFinal < 10) {
                  horarioFinal = "0" + horarioFinal;
                }
              if (horario != horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              } else if (horario == horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              }
              hora = document.querySelector('#hour');
            }
          }  else if (continent.value === 'Pacific') {
            city = city_pacifico.value;
            obtenerHorario(continent.value, city).then(horario => mostrar(horario));
            const mostrar = (horario) => {
              horario = horario.datetime;
              horario = horario.slice(11,horario.length-19);
              horario = parseInt(horario);
              diferenciaHoraria = horaActual - horario;
              hora = hora.value;
              hora = parseInt(hora);
              horarioFinal = hora - diferenciaHoraria;
              if (diferenciaHoraria < 0) {
                diferenciaHoraria = Math.abs(diferenciaHoraria);
              }
              if (diferenciaHoraria == 1 || diferenciaHoraria == -1) {
                diferenciaHoraria = `${diferenciaHoraria} hora`
              } else {
                diferenciaHoraria = `${diferenciaHoraria} horas`
              }
              city = city.split('_').join(' ');
              illustration.style.backgroundImage = `url('/illustration2.png')`;
              illustration.style.width = '12rem';
              illustration.style.height = '12rem';
              illustration.style.backgroundSize = '12rem';
              if (horarioFinal >= 24) {
                horarioFinal = horarioFinal - 24;
              }
              if (horarioFinal <= -1) {
                horarioFinal = horarioFinal + 24
              }
              if (hora < 10 && horarioFinal < 10) {
                  hora = "0" + hora;
                  horarioFinal = "0" + horarioFinal;
                } else if (hora < 10 && horarioFinal > 10) {
                  hora = "0" + hora;
                } else if (hora < 10 && horarioFinal == 10) {
                  hora = "0" + hora;
                } else if (hora > 10 && horarioFinal < 10) {
                  horarioFinal = "0" + horarioFinal;
                }
              if (horario != horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, serán las ${horarioFinal}hs en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sean las ${hora}hs en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Cuando sea la ${hora}h en ${final}, será la ${horarioFinal}h en ${city}.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              } else if (horario == horarioFinal) {
                if (hora != '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal != '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} son las ${horarioFinal}hs.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora != '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Son las ${hora}hs en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                } else if (hora == '01' && horarioFinal == '01') {
                  resultado.innerHTML = `<span class="done">Es la ${hora}h en ${final}, y en ${city} es la ${horarioFinal}h.</span><br><span class="hour-difference">Diferencia horaria: ${diferenciaHoraria}</span>`;
                }
              }
              hora = document.querySelector('#hour');
            }
          }
        } else {
        resultado.innerHTML = `¡Ups! Parece que te faltaron completar datos.`
      }
      } else {
        resultado.innerHTML = `¡Ups! Parece que te faltaron completar datos.`
      }
    });
    const obtenerHorario = horario => new Promise((resolve,reject)=> {
      const url = `http://worldtimeapi.org/api/${continent.value}/${city}`
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(Error (xhr.statusText))
        }
      }
      xhr.send();
    });
  },
  methods: {
    onChange(event) {
      let locationContainer = document.querySelector('#location-container');
      let america = document.querySelector('#america');
      let europa = document.querySelector('#europa');
      let africa = document.querySelector('#africa');
      let asia = document.querySelector('#asia');
      let atlantico = document.querySelector('#atlantico');
      let australia = document.querySelector('#australia');
      let pacifico = document.querySelector('#pacifico');
      if (event.target.value === 'America') {
        locationContainer.style.display = "block";
        america.style.display = "block";
        europa.style.display = "none";
        africa.style.display = "none";
        asia.style.display = "none";
        atlantico.style.display = "none";
        australia.style.display = "none";
        pacifico.style.display = "none";
      } else if (event.target.value === 'Europe') {
        locationContainer.style.display = "block";
        europa.style.display = "block";
        america.style.display = "none";
        africa.style.display = "none";
        asia.style.display = "none";
        atlantico.style.display = "none";
        australia.style.display = "none";
        pacifico.style.display = "none";
      } else if (event.target.value === 'Africa') {
        locationContainer.style.display = "block";
        africa.style.display = "block";
        europa.style.display = "none";
        america.style.display = "none";
        asia.style.display = "none";
        atlantico.style.display = "none";
        australia.style.display = "none";
        pacifico.style.display = "none";
      } else if (event.target.value === 'Asia') {
        locationContainer.style.display = "block";
        asia.style.display = "block";
        europa.style.display = "none";
        africa.style.display = "none";
        america.style.display = "none";
        atlantico.style.display = "none";
        australia.style.display = "none";
        pacifico.style.display = "none";
      } else if (event.target.value === 'Atlantic') {
        locationContainer.style.display = "block";
        atlantico.style.display = "block";
        europa.style.display = "none";
        africa.style.display = "none";
        america.style.display = "none";
        asia.style.display = "none";
        australia.style.display = "none";
        pacifico.style.display = "none";
      } else if (event.target.value === 'Australia') {
        locationContainer.style.display = "block";
        atlantico.style.display = "none";
        europa.style.display = "none";
        africa.style.display = "none";
        america.style.display = "none";
        asia.style.display = "none";
        australia.style.display = "block";
        pacifico.style.display = "none";
      } else if (event.target.value === 'Pacific') {
        locationContainer.style.display = "block";
        atlantico.style.display = "none";
        europa.style.display = "none";
        africa.style.display = "none";
        america.style.display = "none";
        asia.style.display = "none";
        australia.style.display = "none";
        pacifico.style.display = "block";
      }
    }
  }
}
</script>
<style>
.main {
  margin-top: 8vh;
  margin-bottom: 12vh;
}
.intro {
  color: var(--black);
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 3rem;
}
.location {
  margin-top: 1.5rem;
}
.location-field {
  color: var(--dark-gray);
  margin-bottom: 0.8rem;
  font-weight: 500;
  font-size: 1.2rem;
}
.current-location-container {
  text-align: center;
  width: 100%;
  height: 3rem;
  background-color: var(--light-gray);
  border-radius: 10px;
  cursor: not-allowed;
}
.current-location-input {
  width: 95%;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: none;
  font-weight: 600;
  cursor: not-allowed;
  color: var(--black);
}
#location-container {
  display: none;
}
.discover-location-container {
  text-align: center;
  width: 100%;
  height: 3rem;
  background-color: var(--light-gray);
  border-radius: 10px;
}
.discover-location-select {
  width: 95%;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: none;
  font-weight: 500;
  color: var(--black);
}
.hour {
  margin-top: 1.5rem;
}
.hour-field {
  color: var(--dark-gray);
  margin-bottom: 0.8rem;
  font-weight: 500;
  font-size: 1.2rem;
}
.hour-container {
  text-align: center;
  width: 20%;
  height: 3rem;
  background-color: var(--light-gray);
  border-radius: 10px;
}
.hour-select {
  width: 90%;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: none;
  font-weight: 600;
  color: var(--black);
}
.get-container {
  margin-top: 2.5rem;
}
.get-button {
  background: var(--purple);
  box-shadow: 0px 4px 20px rgba(66, 66, 66, 0.25);
  border-radius: 5px;
  width: 60%;
  height: 3rem;
  text-align: center;
  color: var(--white);
  font-weight: 600;
}
.get-button:hover {
  background: #4646e2;
  color: var(--white);
}
.right-content {
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.illustration {
  display: block;
  margin: auto;
  background-image: url('/illustration.png');
  width: 15rem;
  height: 15rem;
  background-size: 15rem;
  background-repeat: no-repeat;
}
.resultado {
  display: block;
  margin-bottom: 20vh;
}
.done {
  display: block;
  color: var(--dark-gray);
  font-weight: 500;
  margin-bottom: 0.8rem;
}
.hour-difference {
  display: block;
  font-size: 1.3rem;
  color: var(--dark-gray);
  font-weight: 500;
}
/* Mobile */
@media only screen and (max-width: 768px) {
  .main {
    margin-top: 5vh;
  }
  .intro {
    text-align: center;
  }
  .location-field {
    text-align: center;
  }
  .hour-field {
    text-align: center;
  }
  .location-container {
    margin: auto;
  }
  .hour-container {
    margin: auto;
  }
  .get-container {
    text-align: center
  }
  .get-button {
    width: 100%;
  }
  #resultado-container {
    display: none;
  }
}
</style>