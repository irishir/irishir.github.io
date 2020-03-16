var updownElem = document.getElementById('updown');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'up':
      pageYLabel = pageY;
      window.scrollTo(0, 0);
      this.className = 'down';
      break;

    case 'down':
      window.scrollTo(0, pageYLabel);
      this.className = 'up';
  }

}

window.onscroll = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;
  var innerHeight = document.documentElement.clientHeight;

  switch (updownElem.className) {
    case '':
      console.log(pageY,innerHeight)
      if (pageY > innerHeight) {
        updownElem.className = 'up';
      }
      break;

    case 'up':
      console.log(pageY,innerHeight)
      if (pageY < innerHeight) {
        updownElem.className = '';
      }
      break;

    case 'down':
      console.log(pageY,innerHeight)
      if (pageY > innerHeight) {
        updownElem.className = 'up';
      }
      break;

  }
}
