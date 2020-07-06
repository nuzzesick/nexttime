<template>
  <div class="container-fluid main">
    <div class="container main-content">
      <div class="row">
        <div class="col-9">
          <div class="left-content float-left">
            <div class="intro">NextTime te ayuda a predecir o conocer la hora en otras ciudades</div>
            <div class="location">
              <div class="location-field">Mi ciudad actual</div>
              <div class="current-location-container">
                <input id="user-location" class="current-location-input" type="text" readonly="readonly">
              </div>
            </div>
            <div class="location">
              <div class="location-field">Ciudad a predecir o conocer</div>
              <div class="discover-location-container">
                <select name="select" class="discover-location-select">
                  <option v-for="city in cities">{{city.name}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="right-content float-right">
            
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
      cities: cities.cities
    }
  },
  mounted: ()=> {
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
    obtenerUbicacionUsuario().then(resultado => imprimir(resultado))
    function imprimir(resultado) {
      let input = document.querySelector('#user-location');
      let final = resultado.timezone;
      final = final.split('/').join(' ');
      final = final.split(' ').slice(2).join(' ');
      final = final.split('_').join(' ');
      input.value = final;
    }
  }
}
</script>
<style>
  .main {
    height: 80vh;
  }
  .main-content {
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .intro {
    color: var(--black);
    font-weight: 600;
    letter-spacing: 0.01em;
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
  .location {
    margin-top: 1.5rem;
  }
  .location-field {
    color: var(--dark-grey);
    margin-bottom: 0.8rem;
    font-weight: 500;
    font-size: 1.2rem;
  }
  .current-location-container {
    text-align: center;
    width: 25rem;
    height: 3rem;
    background-color: var(--light-grey);
    border-radius: 10px;
    cursor: not-allowed;
  }
  .current-location-input {
    width: 90%;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: none;
    font-weight: 600;
    cursor: not-allowed;
    color: var(--black);
  }
  .discover-location-container {
    text-align: center;
    width: 25rem;
    height: 3rem;
    background-color: var(--light-grey);
    border-radius: 10px;
  }
  .discover-location-select {
    width: 90%;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: none;
    font-weight: 500;
    color: var(--black);
  }
</style>