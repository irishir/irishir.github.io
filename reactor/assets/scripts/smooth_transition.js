let element = document.querySelector('.list');
let link_about_the_system = element.children[0].children[0];
let link_how_it_works = element.children[1].children[0];
let leave_a_request_btn = document.getElementById('leave-a-request-btn');
let leave_a_request_btn_2 = document.getElementById('leave-a-request-btn-2');

link_about_the_system.addEventListener('click', () => {
  let about_the_system = document.getElementById('About-the-system');
  about_the_system.scrollIntoView({block: "start", behavior: "smooth"});
})

link_how_it_works.addEventListener('click', () => {
  let how_it_works = document.getElementById('How-it-works');
  how_it_works.scrollIntoView({block: "start", behavior: "smooth"});
})

try_btn.addEventListener('click', () => {
  try_it_for_free.scrollIntoView({behavior: "smooth"});
})

leave_a_request_btn.addEventListener('click', () => {
  let leave_a_request = document.getElementById('leave-a-request');
  leave_a_request.scrollIntoView({block: "start", behavior: "smooth"});
})

leave_a_request_btn_2.addEventListener('click', () => {
  let leave_a_request = document.getElementById('leave-a-request');
  leave_a_request.scrollIntoView({block: "start", behavior: "smooth"});
})
