<template>
  <div class="container-fluid header">
    <div class="container header-container">
      <div class="row">
        <div class="col-6">
          <div class="logo-container float-left">
            <router-link class="logo" :to="{name: 'home'}">
            </router-link>
          </div>
        </div>
        <div class="col-6">
          <div class="menu-desktop float-right">
            <router-link class="menu-item" :to="{name: 'help'}">
              <div>Ayuda</div>
            </router-link>
            <router-link class="menu-item" :to="{name: 'about'}">
              <div>Acerca</div>
            </router-link>
            <a class="menu-item" href="http://github.com/nuzzesick/nexttime" target="_blank"><i class="fab fa-github"></i></a>
          </div>
          <div class="menu-mobile float-right">
            <div class="dropdown">
              <button class="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menú</button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <router-link class="menu-item" :to="{name: 'help'}">
                  <div>Ayuda</div>
                </router-link>
                <router-link class="menu-item" :to="{name: 'about'}">
                  <div>Acerca</div>
                </router-link>
                <a class="menu-item" href="http://github.com/nuzzesick/nexttime" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.header {
  position: relative;
  background: var(--white);
  height: 8vh;
  -webkit-box-shadow: 0px 4px 20px #EDEDED;
  -moz-box-shadow: 0px 4px 20px #EDEDED;
  box-shadow: 0px 4px 20px #EDEDED;
  z-index: 1;
}
.header-container {
  margin: auto;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.logo {
  display: block;
  background-image: url('/logo-black.png');
  width: 9.6rem;
  height: 2rem;
  background-size: 9.6rem 2rem;
  background-repeat: no-repeat; 
}
.logo:hover {
  background-image: url('/logo.png')!important;
}
.dropdown-menu {
  min-width: 0;
  width: 100%;
}
.menu-mobile {
  display: none;
}
.dropdown-toggle {
  margin-top: -1.5px;
  font-weight: 500;
  font-size: 1.1rem;
}
.menu-item {
  display: inline-flex;
  margin-left: 20px;
  font-size: 1.2rem;
  letter-spacing: -0.02em;
  color: var(--dark-gray);
  font-weight: 500;
}
.menu-item:hover {
  color: var(--purple);
}
.active {
  background-image: url('/logo.png')!important;
  color: var(--purple);
}
@media only screen and (max-width: 768px) {
  .menu-desktop {
    display: none;
  }
  .menu-mobile {
    display: block;
  }
  .menu-item {
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0;
    font-weight: 400;
    padding: 0.5rem 0 0.5rem 0;
  }
}
</style>