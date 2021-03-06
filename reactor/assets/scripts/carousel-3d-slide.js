new Vue({
  el: '#carousel',
  data: {
    slides: [{
      src: 'assets/images/carousel/1.png'
    }, {
      src: 'assets/images/carousel/2.png'
    }, {
      src: 'assets/images/carousel/3.png'
    }, {
      src: 'assets/images/carousel/4.png'
    }, {
      src: 'assets/images/carousel/5.png'
    }, {
      src: 'assets/images/carousel/6.png'
    }]
  },
  components: {
    'carousel-3d': Carousel3d.Carousel3d,
    'slide': Carousel3d.Slide
  }
})
