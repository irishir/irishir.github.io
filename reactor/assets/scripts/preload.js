const star_bg = `
<div class="preload__wrapper">
  <div class="preload__reactor">
    <!--<div class="reactor__ring reactor__ring_01"></div>-->
    <!--<div class="reactor__ring reactor__ring_02"></div>-->
    <!--<div class="reactor__ring reactor__sun"></div>-->
    <div class="reactor__logo"></div>
  </div>
</div>
`

const preload = document.getElementById('preload');
const wrapper = document.getElementById('wrapper');
const title = document.getElementById('title');
const slogan = document.getElementById('slogan');
const cosmonaut = document.getElementById('cosmonaut');
const try_btn = document.getElementById('try_btn');
const title_about_the_system = document.getElementById('title_about_the_system');
const description_about_the_system = document.getElementById('description_about_the_system');

preload.innerHTML = star_bg;

window.onload = function() {
  setTimeout(function() {
    preload.classList.add('hide');
    wrapper.classList.add('show');

    if (screen.clientWidth > 1199) {
      title.classList.add('manifestation__title');
      title.lastChild.classList.add('manifestation__reactor');
      slogan.classList.add('manifestation__slogan');
      cosmonaut.classList.add('manifestation__cosmonaut');
      try_btn.classList.add('manifestation__try_btn');
      title_about_the_system.classList.add('manifestation__title_about_the_system');
      description_about_the_system.classList.add('manifestation__description_about_the_system');
    }
  }, 2500);
}
