<template>
  <div class="footer">
    <div class="container footer-container">
      <span class="credits">Hecho con <i class="fas fa-heart"></i> por <a class="nuzze" href="https://nuzze.now.sh" target="_blank">Nuzze</a></span>
    </div>
  </div>
</template>
<style>
.footer {
  position: fixed;
  width: 100%;
  height: 8vh;
  bottom: 0;
  background-color: var(--white);
  -webkit-box-shadow: 0px 4px 20px #EDEDED;
  -moz-box-shadow: 0px 4px 20px #EDEDED;
  box-shadow: 0px 4px 20px #EDEDED;
  z-index: 2;
}
.footer-container {
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
}
.credits {
  color: var(--black);
  font-weight: 500;
}
.fa-heart {
  color: var(--purple);
}
.nuzze {
  color: var(--black);
  font-weight: 600
}
.nuzze:hover {
  color: var(--purple);
}
</style>