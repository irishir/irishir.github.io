//-----------------------active btn check form--------------------------//
const form_two_checkbox = document.getElementById("form_two_checkbox");
const form_one_btn = document.getElementById("form_one_btn");
const form_two_btn = document.getElementById("form_two_btn");
const form_leave_a_request = document.getElementById("form-leave-a-request");
const form_first_request = document.getElementById("form-first-request");

form_two_checkbox.addEventListener("click", function() {
  if (form_two_checkbox.checked === true) {
    form_two_btn.classList.remove("btn__disabled");
  } else {
    form_two_btn.classList.add("btn__disabled");
  }
});

//-----------------------animation scroll and resize--------------------------//
const screen = document.getElementsByTagName("html")[0];
const system_cards = document.getElementById("system-cards");
const system_card = document.querySelectorAll(".system-card");
const carousel = document.getElementById("carousel");
const try_it_for_free = document.getElementById("try-it-for-free");
const moon = document.getElementById("moon");
const saturn_01 = document.getElementById("saturn_01");
const saturn_02 = document.getElementById("saturn_02");
const title_how_it_works = document.getElementById("title-how-it-works");
const description_how_it_works = document.getElementById(
  "description-how-it-works"
);
const work_cards = document.getElementById("work-cards");
const work_card = document.querySelectorAll(".work-card");
const try_leave_a_request = document.getElementById("try-leave-a-request");
const title_leave_a_request = document.getElementById("title-leave-a-request");
const description_leave_a_request = document.getElementById(
  "description-leave-a-request"
);
const ufo = document.querySelector(".ufo__wrapper");
const updownElem = document.getElementById("updown");

if (screen.clientWidth > 1199) {
  window.onscroll = () => {
    let screen_height = screen.clientHeight;
    let system_cards_cord_top = system_cards.getBoundingClientRect().top;
    let carousel_3d_slide_cord_top = carousel.getBoundingClientRect().top;
    let try_it_for_free_cord_top = try_it_for_free.getBoundingClientRect().top;
    let title_how_it_works_cord_top = title_how_it_works.getBoundingClientRect()
      .top;
    let description_how_it_works_cord_top = description_how_it_works.getBoundingClientRect()
      .top;
    let work_cards_cord_top = work_cards.getBoundingClientRect().top;
    let try_leave_a_request_cord_top = try_leave_a_request.getBoundingClientRect()
      .top;
    let title_leave_a_request_cord_top = title_leave_a_request.getBoundingClientRect()
      .top;
    let description_leave_a_request_cord_top = description_leave_a_request.getBoundingClientRect()
      .top;
    let form_leave_a_request_cord_top = form_leave_a_request.getBoundingClientRect()
      .top;
    let title_about_the_system_cord_top = title_about_the_system.getBoundingClientRect()
      .top;

    if (title_about_the_system_cord_top <= 0) {
      setTimeout(() => {
        updownElem.classList.add("up");
      }, 500);
      updownElem.classList.remove("hide");
      updownElem.classList.add("show");
    } else {
      setTimeout(() => {
        updownElem.classList.remove("up");
      }, 500);
      updownElem.classList.remove("show");
      updownElem.classList.add("hide");
    }

    if (screen_height - screen_height / 3 >= system_cards_cord_top) {
      for (let i = 0; system_card.length >= i; i++) {
        if (i >= system_card.length) {
          break;
        } else {
          system_card[i].classList.add("manifestation__system-card_0" + i);
        }
      }
    }

    if (screen_height - screen_height / 5 >= carousel_3d_slide_cord_top) {
      carousel.classList.add("manifestation__carousel-3d-slide");
    }

    if (screen_height - screen_height / 5 >= try_it_for_free_cord_top) {
      try_it_for_free.classList.add("manifestation__try-it-for-free");
      moon.classList.add("manifestation__moon");
    }

    if (screen_height - screen_height / 5 >= title_how_it_works_cord_top) {
      title_how_it_works.classList.add("manifestation__title-how-it-works");
    }

    if (
      screen_height - screen_height / 5 >=
      description_how_it_works_cord_top
    ) {
      description_how_it_works.classList.add(
        "manifestation__description-how-it-works"
      );
    }

    if (screen_height - screen_height / 5 >= work_cards_cord_top) {
      for (let i = 0; work_card.length >= i; i++) {
        if (i >= work_card.length) {
          break;
        } else {
          work_card[i].classList.add("manifestation__work-card_0" + i);
        }
      }
    }

    if (screen_height - screen_height / 5 >= try_leave_a_request_cord_top) {
      try_leave_a_request.classList.add("manifestation__try-leave-a-request");
      ufo.classList.add("manifestation__ufo");
      saturn_01.classList.add("manifestation__saturn");
      saturn_02.classList.add("manifestation__saturn");
    }

    if (screen_height - screen_height / 5 >= title_leave_a_request_cord_top) {
      title_leave_a_request.classList.add(
        "manifestation__title-leave-a-request"
      );
    }

    if (
      screen_height - screen_height / 5 >=
      description_leave_a_request_cord_top
    ) {
      description_leave_a_request.classList.add(
        "manifestation__description-leave-a-request"
      );
    }

    if (screen_height - screen_height / 5 >= form_leave_a_request_cord_top) {
      form_leave_a_request.classList.add("manifestation__form-leave-a-request");
    }
  };
}

if (screen.clientWidth < 1199) {
  window.onscroll = () => {
    let title_about_the_system_cord_top = title_about_the_system.getBoundingClientRect()
      .top;

    if (title_about_the_system_cord_top <= 0) {
      setTimeout(() => {
        updownElem.classList.add("up");
      }, 500);
      updownElem.classList.remove("hide");
      updownElem.classList.add("show");
    } else {
      setTimeout(() => {
        updownElem.classList.remove("up");
      }, 500);
      updownElem.classList.remove("show");
      updownElem.classList.add("hide");
    }
  };
}

window.onresize = () => {
  if (screen.clientWidth > 1199) {
    window.onscroll = () => {
      let screen_height = screen.clientHeight;
      let system_cards_cord_top = system_cards.getBoundingClientRect().top;
      let carousel_3d_slide_cord_top = carousel.getBoundingClientRect().top;
      let try_it_for_free_cord_top = try_it_for_free.getBoundingClientRect()
        .top;
      let title_how_it_works_cord_top = title_how_it_works.getBoundingClientRect()
        .top;
      let description_how_it_works_cord_top = description_how_it_works.getBoundingClientRect()
        .top;
      let work_cards_cord_top = work_cards.getBoundingClientRect().top;
      let try_leave_a_request_cord_top = try_leave_a_request.getBoundingClientRect()
        .top;
      let title_leave_a_request_cord_top = title_leave_a_request.getBoundingClientRect()
        .top;
      let description_leave_a_request_cord_top = description_leave_a_request.getBoundingClientRect()
        .top;
      let form_leave_a_request_cord_top = form_leave_a_request.getBoundingClientRect()
        .top;
      let title_about_the_system_cord_top = title_about_the_system.getBoundingClientRect()
        .top;

      if (title_about_the_system_cord_top <= 0) {
        setTimeout(() => {
          updownElem.classList.add("up");
        }, 500);
        updownElem.classList.remove("hide");
        updownElem.classList.add("show");
      } else {
        setTimeout(() => {
          updownElem.classList.remove("up");
        }, 500);
        updownElem.classList.remove("show");
        updownElem.classList.add("hide");
      }

      if (screen_height - screen_height / 3 >= system_cards_cord_top) {
        for (let i = 0; system_card.length >= i; i++) {
          if (i >= system_card.length) {
            break;
          } else {
            system_card[i].classList.add("manifestation__system-card_0" + i);
          }
        }
      }

      if (screen_height - screen_height / 5 >= carousel_3d_slide_cord_top) {
        carousel.classList.add("manifestation__carousel-3d-slide");
      }

      if (screen_height - screen_height / 5 >= try_it_for_free_cord_top) {
        try_it_for_free.classList.add("manifestation__try-it-for-free");
        moon.classList.add("manifestation__moon");
      }

      if (screen_height - screen_height / 5 >= title_how_it_works_cord_top) {
        title_how_it_works.classList.add("manifestation__title-how-it-works");
      }

      if (
        screen_height - screen_height / 5 >=
        description_how_it_works_cord_top
      ) {
        description_how_it_works.classList.add(
          "manifestation__description-how-it-works"
        );
      }

      if (screen_height - screen_height / 5 >= work_cards_cord_top) {
        for (let i = 0; work_card.length >= i; i++) {
          if (i >= work_card.length) {
            break;
          } else {
            work_card[i].classList.add("manifestation__work-card_0" + i);
          }
        }
      }

      if (screen_height - screen_height / 5 >= try_leave_a_request_cord_top) {
        try_leave_a_request.classList.add("manifestation__try-leave-a-request");
        ufo.classList.add("manifestation__ufo");
        saturn_01.classList.add("manifestation__saturn");
        saturn_02.classList.add("manifestation__saturn");
      }

      if (screen_height - screen_height / 5 >= title_leave_a_request_cord_top) {
        title_leave_a_request.classList.add(
          "manifestation__title-leave-a-request"
        );
      }

      if (
        screen_height - screen_height / 5 >=
        description_leave_a_request_cord_top
      ) {
        description_leave_a_request.classList.add(
          "manifestation__description-leave-a-request"
        );
      }

      if (screen_height - screen_height / 5 >= form_leave_a_request_cord_top) {
        form_leave_a_request.classList.add(
          "manifestation__form-leave-a-request"
        );
      }
    };
  }

  if (screen.clientWidth < 1199) {
    window.onscroll = () => {
      let title_about_the_system_cord_top = title_about_the_system.getBoundingClientRect()
        .top;

      if (title_about_the_system_cord_top <= 0) {
        setTimeout(() => {
          updownElem.classList.add("up");
        }, 500);
        updownElem.classList.remove("hide");
        updownElem.classList.add("show");
      } else {
        setTimeout(() => {
          updownElem.classList.remove("up");
        }, 500);
        updownElem.classList.remove("show");
        updownElem.classList.add("hide");
      }
    };
  }
};

//-----------------------прокрутка вверх старницы--------------------------//
updownElem.addEventListener("click", () => {
  let body = document.getElementsByTagName("body");

  window.scrollTo({
    top: body,
    behavior: "smooth"
  });
});

//---------------------------------валидация email------------------------------------//
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

let popup = document.getElementById("popup");

//--------------------------первая форма--------------------------------------//
//показать всплывашку для первой формы
function togglePopupFirstForm() {
  let form_first_collection_input =
    validateEmail(form_first_request[0].value) &&
    form_first_request[1].value.length > 0;

  if (form_first_collection_input === true) {
      var fd = new FormData( form_first_request );
      $.ajax({
          url: 'mailer/send.php',
          type: 'POST',
          contentType: false,
          processData: false,
          data: fd,
          success: function(msg){
                  popup.classList.add("popup_show");
                  setTimeout(() => {
                      popup.classList.add("popup_hide");
              }, 3000);
                  setTimeout(() => {
                      form_first_request.reset();
              }, 3700);
          }
      });

    form_first_request[0].classList.remove("input_error");
    form_first_request.children[0].children[1].setAttribute("hidden", "false");
    form_first_request[1].classList.remove("input_error");
    form_first_request.children[1].children[1].setAttribute("hidden", "false");

  } else {
    console.log(validateEmail(form_first_request[0].value))
    if (validateEmail(form_first_request[0].value)) {
      form_first_request[0].classList.remove("input_error");
      form_first_request.children[0].children[1].setAttribute(
        "hidden",
        "false"
      );
    } else {
      form_first_request[0].classList.add("input_error");
      form_first_request.children[0].children[1].setAttribute("hidden", "true");
    }

    if (form_first_request[1].value.length === 0) {
      form_first_request[1].classList.add("input_error");
      form_first_request.children[1].children[1].setAttribute("hidden", "true");
    } else {
      form_first_request[1].classList.remove("input_error");
      form_first_request.children[1].children[1].setAttribute(
        "hidden",
        "false"
      );
    }
  }
}

//обработка 2-х полей по нажатию для первой формы - начало
form_first_request[0].addEventListener("keypress", () => {
  form_first_request[0].classList.remove("input_error");
  form_first_request.children[0].children[1].setAttribute("hidden", "false");
});

form_first_request[1].addEventListener("keypress", () => {
  form_first_request[1].classList.remove("input_error");
  form_first_request.children[1].children[1].setAttribute("hidden", "false");
});

//сообщение об успешной отправки для первой формы
form_one_btn.addEventListener("click", e => {
  e.preventDefault();
  togglePopupFirstForm();
});

//--------------------------вторая форма--------------------------------------//

//показать всплывашку для второй формы
function togglePopupTwoForm() {
  console.log($('body'))
  let form_two_collection_input =
    form_leave_a_request[0].value.length > 0 &&
    validateEmail(form_leave_a_request[1].value) &&
    form_leave_a_request[2].value.length > 0;

  if (form_two_collection_input === true) {
    var fd = new FormData( form_leave_a_request );
    $.ajax({
        url: 'mailer/send.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: fd,
        success: function(msg){
                popup.classList.add("popup_show");
                setTimeout(() => {
                    popup.classList.add("popup_hide");
            }, 3000);
                setTimeout(() => {
                    form_leave_a_request.reset();
            }, 3700);
        }
    });

    form_leave_a_request[0].classList.remove("input_error");
    form_leave_a_request[1].classList.remove("input_error");
    form_leave_a_request[2].classList.remove("input_error");


  } else {
    if (form_leave_a_request[0].value.length === 0) {
      form_leave_a_request[0].classList.add("input_error");
      form_leave_a_request.children[1].setAttribute("hidden", "true");
    } else {
      form_leave_a_request[0].classList.remove("input_error");
      form_leave_a_request.children[1].setAttribute("hidden", "false");
    }

    if (validateEmail(form_leave_a_request[1].value)) {
      form_leave_a_request[1].classList.remove("input_error");
      form_leave_a_request.children[3].setAttribute("hidden", "false");
    } else {
      form_leave_a_request[1].classList.add("input_error");
      form_leave_a_request.children[3].setAttribute("hidden", "true");
    }

    if (form_leave_a_request[2].value.length === 0) {
      form_leave_a_request[2].classList.add("input_error");
      form_leave_a_request.children[5].setAttribute("hidden", "true");
    } else {
      form_leave_a_request[2].classList.remove("input_error");
      form_leave_a_request.children[5].setAttribute("hidden", "false");
    }
  }
}

//обработка 3-х полей по нажатию для второй формы
form_leave_a_request[0].addEventListener("keypress", () => {
  form_leave_a_request[0].classList.remove("input_error");
  form_leave_a_request.children[1].setAttribute("hidden", "false");
});

form_leave_a_request[1].addEventListener("keypress", () => {
  form_leave_a_request[1].classList.remove("input_error");
  form_leave_a_request.children[3].setAttribute("hidden", "false");
});

form_leave_a_request[2].addEventListener("keypress", () => {
  form_leave_a_request[2].classList.remove("input_error");
  form_leave_a_request.children[5].setAttribute("hidden", "false");
});

//сообщение об успешной отправки для второй формы
form_two_btn.addEventListener("click", e => {
  console.log('click')
  e.preventDefault();
  togglePopupTwoForm();
});
