$(document).ready(function(){
  function getUserCity() {
    return new Promise((resolve, reject) => {
        fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(({ ip }) => {
          fetch(
          `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}&token=f1ac81250cfced23efe8eb6ac2958b00310efb99`
          )
          .then(res => res.json())
          .then(json => {
              if (
              {}.hasOwnProperty.call(json, 'family') &&
              json.family.toLowerCase().indexOf('err')
              ) {
              return reject(json);
              }
              const {
              location: {
                data: { city },
              },
              } = json;
              resolve({ city, ip });
          });
      });
  });
  }
  getUserCity()
  .then(({ city }) => {
    $('.modal__geo').addClass('active');
    $('.modal__geo_header').html(`Ваш город ${city}?`);
    $('.modal__geo_button.correct').on('click', function() {
      $('.modal__geo').removeClass('active');
      getUserCity.innerHTML = city;
      $('.header__city_link').html(`${city}`);
    });
    $('.header__city_link').html(`${city}`);
    $('.modal__geo_button.other').on('click', function() {
      $('.modal__geo').removeClass('active');
      $('.modal').addClass('active');
    });
  });
   $(".products__slider").slick({
      speed: 1200,
      prevArrow:
         "<div class='prevArrow'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
      nextArrow:
         '<div class="nextArrow"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      responsive: [
        {
           breakpoint: 1800,
           settings: {
              arrows: false,
           },
        },
        {
           breakpoint: 1600,
           settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
           },
        },
        {
           breakpoint: 930,
           settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
           },
        },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               variableWidth: false,
               centerMode: false,
               centerPadding: '0',
               arrows: true,
               prevArrow: '<div class="prevArrow_card"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z" fill="#5BC3CF" fill-opacity="0.8"></path></svg></div>',
               nextArrow: '<div class="nextArrow_card"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"></path></svg></div>',
            },
         },
      ],
   });
   $(".fullimg").slick({
      speed: 1200,
      prevArrow:
         "<div class='prevArrow'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
      nextArrow:
         '<div class="nextArrow"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
           breakpoint: 1530,
           settings: {
              arrows: false,
              dots: true,
              dotsClass: 'slick-dots',
           },
        },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               dots: true,
               dotsClass: 'slick-dots',
               prevArrow: '<div class="prevArrow_card"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z" fill="#5BC3CF" fill-opacity="0.8"></path></svg></div>',
               nextArrow: '<div class="nextArrow_card"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"></path></svg></div>',
            },
         },
      ],
   });
   $(".collectionall__slider").slick({
      speed: 1200,
      prevArrow:
         "<div class='prevArrow'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
      nextArrow:
         '<div class="nextArrow"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
           breakpoint: 1800,
           settings: {
              arrows: false,
           },
        },
        {
           breakpoint: 1600,
           settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              variableWidth: true,
           },
        },
      ],
   });
   $(".organic-slider__slider").slick({
      speed: 1200,
      prevArrow:
         "<div class='prevArrow'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
      nextArrow:
         '<div class="nextArrow"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
           breakpoint: 1800,
           settings: {
              arrows: false,
           },
        },
        {
           breakpoint: 1530,
           settings: {
              arrows: false,
              variableWidth: true,
           },
        },
      ],
   });
   $(".fordesigners-slider-slide").slick({
      speed: 1200,
      prevArrow:
         "<div class='prevArrow'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
      nextArrow:
         '<div class="nextArrow"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      responsive: [
        {
           breakpoint: 1600,
           settings: {
              arrows: false,
           },
        },
      ],
   });
    $('.products__slide_button.price').each(function(i) {
        $(this).on('click', function() {
            $('.products__slide_button.price').eq(i).css('display', 'none');
            $('.products__slide_price_wrapper').each(function(e) {
                e = i;
                $('.products__slide_price_wrapper').eq(e).css('display', 'flex');
            });
        });
    });
    $('.project__slider').slick({
        prevArrow: "<div class='prevArrowProject'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
        nextArrow: '<div class="nextArrowProject"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
              dots: true,
              dotsClass: 'slick-dots',
            }
          },
      ]
    });
    $('.press__wrapper').slick({
        infinite: true,
        variableWidth: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: true,
              variableWidth: false,
              dotsClass: 'slick-dots',
            }
          },
      ]
    });
    $('.choice__slider').slick({
        infinite: true,
        autoplay: true,
        variableWidth: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: true,
              variableWidth: false,
              dotsClass: 'slick-dots',
            }
          },
      ]
    });
    $('.header__menu').click(function() {
      $('.header__menu_modal').addClass('active');
      $('body').css('overflowY', 'hidden');
    });
    $('.header__menu_times').click(function() {
      $('.header__menu_modal').removeClass('active');
      $('body').css('overflowY', 'visible');
    });
    $('.header__city').click(function() {
      $('.modal').addClass('active');
      $(".modal").removeClass("fade");
      $('body').css('overflowY', 'hidden');
    });
    $('.modal_times').click(function() {
      $('.modal').removeClass('active');
      $(".modal").addClass("fade");
      setTimeout(function() {$(".modal").removeClass("fade");}, 500);
      $('body').css('overflowY', 'visible');
    });

    $(document).ready(function(){
    let userCity = document.querySelector('.header__city_link');
    let modalCity = document.querySelectorAll('.modal__city');
    modalCity.forEach((item, i) => {
      modalCity[i].addEventListener("click", function() {
        userCity.innerHTML = modalCity[i].innerHTML;
        $('.modal').removeClass('active');
        $(".modal").addClass("fade");
        setTimeout(function() {$(".modal").removeClass("fade");}, 500);
        $('body').css('overflowY', 'visible');
      });
    });
    new WOW().init();
    });

    $('.approach__tab').on('click', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.container').find('div.approach__content').removeClass('approach__content_active').eq($(this).index()).addClass('approach__content_active');
    });
    $(document).click(function (e) {
      if ($(e.target).is('.modal')) {
        $('.modal').removeClass('active');
        $(".modal").addClass("fade");
        setTimeout(function() {$(".modal").removeClass("fade");}, 500);
        $('body').css('overflowY', 'visible');
      }
    });
    const footerUl = document.querySelectorAll('.footer__top-list_wrapper ul');
    footerUl.forEach((item, i) => {
      footerUl[i].addEventListener("click", function() {
        if (window.innerWidth <= 1600) {
          $(footerUl[i]).find('li').toggleClass('active');
        }
      });
    });
    $('.promo__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
    });
    $( window ).width(function() { 
    $('.promo__slider').on('setPosition', function () {
        $(this).find('.promo__block').height('auto');		      
        var slickTrack = $(this).find('.slick-track');		      
        var slickTrackHeight = $(slickTrack).height();		      
        $(this).find('.promo__block').css('height', slickTrackHeight + 'px');		      
      });
    })
      $( window ).resize(function() { 
      $('.promo__slider').on('setPosition', function () {
          $(this).find('.promo__block').height('auto');		      
          var slickTrack = $(this).find('.slick-track');		      
          var slickTrackHeight = $(slickTrack).height();		      
          $(this).find('.promo__block').css('height', slickTrackHeight + 'px');		      
        });
      })
});

$( window ).resize(function() { 
  if ( $(window).width() > 766) {
  $(function(){	
    var column = 0;
    $('.about__height').each(function(){
      h = $(this).height();
      if (h > column) {
        column = h;
      }
    })
    $(this).find('.about__height-img').css('height', column);
  });
  } else if ( $(window).width() < 767) {
  $(function(){	
    var column = 0;
    $('.about__height').each(function(){
      h = $(this).height();
      if (h > column) {
        column = h;
      }
    })
    $(this).find('.about__height-img').css('height', '261px');
  });
  }})
  
  if ( $(window).width() > 766) {
  $(function(){	
    var column = 0;
    $('.about__height').each(function(){
      h = $(this).height();
      if (h > column) {
        column = h;
      }
    })
    $(this).find('.about__height-img').css('height', column);
  });
  } else if ( $(window).width() < 767) {
  $(function(){	
    var column = 0;
    $('.about__height').each(function(){
      h = $(this).height();
      if (h > column) {
        column = h;
      }
    })
    $(this).find('.about__height-img').css('height', '261px');
  });
  }

  $(".products__slide-plus-minus").append('<div class="inc qtybutton">-</div><div class="dec qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          if (oldValue > 1) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 1;
          }
      }
      $button.parent().find("input").val(newVal);
  });

  $(document).ready(function () {
    $slick_slider = $('.trust__content_scroll-block');
    settings = {
       speed: 1200,
       prevArrow:
          '<img src="img/gallery/arrowBack.svg" alt="Back" class="section-gallery__carousel-prev">',
       nextArrow:
          '<img src="img/gallery/arrowForward.svg" alt="Forward" class="section-gallery__carousel-next">',
       infinite: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       autoplay: false,
       dots: true,
       responsive: [
        {
           breakpoint: 10000,
           settings: 'unslick',
           dots: false,
        },
          {
             breakpoint: 767,
             settings: 'slick',
             dots: true,
          },
       ],
    }
    $slick_slider.slick(settings);
    $( window ).resize(function() {
      if ($(window).width() < 768) {
        if (!$slick_slider.hasClass('slick-initialized')) {
          return $slick_slider.slick(settings);
        }
        return
      }
      if ($slick_slider.hasClass('slick-initialized')) {
        $slick_slider.slick('unslick');
      }
    });
    $( window ).width(function() {
      if ($(window).width() < 768) {
        if (!$slick_slider.hasClass('slick-initialized')) {
          return $slick_slider.slick(settings);
        }
        return
      }
      if ($slick_slider.hasClass('slick-initialized')) {
        $slick_slider.slick('unslick');
      }
    });
  })

  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      var links = this.el.find('.filternav__header');
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
  
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
  
      $next.slideToggle();
      $this.parent().toggleClass('open');
  
      // if (!e.data.multiple) {
      //   $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
      // };
    }	
  
    var accordion = new Accordion($('.filternav__accordion'), false);
  });


function short(elt, he, tr){
  var hs = he+'px',temp,
  elt = document.querySelectorAll(elt);
  [].forEach.call(elt, function(el,i){
    el.insertAdjacentHTML('afterend', '<div class="filternav__collection-more">Показать еще</div>');
    el.style.height = hs;
    el.style.transition = tr+'s';
    el.nextElementSibling.addEventListener('click', function(e){
      var prev = this.previousElementSibling;
      if (prev.style.height == hs) {
        prev.style.height = prev.scrollHeight+'px';
        setTimeout(()=>{
            prev.style.height = 'auto';
            prev.style.transition = '0s';
        },tr*0);
        this.textContent = "Свернуть";
        this.classList.add('open');
      }
      else {
        anim(prev, tr, temp);
        prev.style.height = getComputedStyle(el).height;
        prev.style.transition = tr+'s';
        setTimeout(()=>prev.style.height = hs,0);
        this.textContent ='Показать еще';
        this.classList.remove('open');
      }
    });
  });
}
function anim(sel, t, temp) {
  cancelAnimationFrame(temp);
  var start = performance.now();
  var from = window.pageYOffset || document.documentElement.scrollTop,
  to = sel.getBoundingClientRect().top;
  requestAnimationFrame(function step(timestamp) {
      var progress = (timestamp - start) / 350*t;
      1 <= progress && (progress = 1);
      window.scrollTo(0, from + to * progress | 0);
      1 > progress && (temp = requestAnimationFrame(step));
  });
}
onload = function(){
  short('.filternav__collection-short', 260, 0.4); //класс высота время анимации
};

$('body').on('input', '.form-control', function(){
	var value = this.value.replace(/[^0-9]/g, '');
	// var value = this.value.replace(/(\d{1,3})(?=((\d{3})*)$)/g, " $1");
	if (value < $(this).data('min')) {
		this.value = $(this).data('min');
	} else if (value > $(this).data('max')) {
		this.value = $(this).data('max');
	} else {
		this.value = value;
	}
});

jQuery(($) => {
  $('.doornav__selects').on('click', '.doornav__selects-head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.doornav__selects-head').removeClass('open');
          $('.doornav__select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });

  $('.doornav__selects').on('click', '.doornav__select__item', function () {
      $('.doornav__selects-head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.doornav__selects').length) {
          $('.doornav__selects-head').removeClass('open');
          $('.doornav__select__list').fadeOut();
      }
  });
});

jQuery(($) => {
  $('.collection-product__character__selects').on('click', '.collection-product__character__selects-head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
          $(this).next().addClass('closed');
          $('.body__overlay').removeClass('active');
      } else {
          $('.collection-product__character__selects-head').removeClass('open');
          $('.collection-product__character__select__list').fadeOut();
          $('.collection-product__character__select__list').addClass('closed');
          $('.body__overlay').removeClass('active');
          $(this).addClass('open');
          $(this).next().fadeIn();
          $(this).next().removeClass('closed');
          $('.body__overlay').addClass('active');
      }
  });

  $('.collection-product__character__selects').on('click', '.collection-product__character__select__item', function () {
      $('.collection-product__character__selects-head').removeClass('open');
      $('.body__overlay').removeClass('active');
      $(this).parent().fadeOut();
      $(this).parent().addClass('closed');
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.collection-product__character__selects').length) {
          $('.collection-product__character__selects-head').removeClass('open');
          $('.collection-product__character__select__list').fadeOut();
          $('.collection-product__character__select__list').addClass('closed');
          $('.body__overlay').removeClass('active');
      }
  });
});

jQuery(($) => {
  $('.collection-product__character__selects-2').on('click', '.collection-product__character__selects-head-2', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
          $(this).next().addClass('closed');
          $('.body__overlay-2').removeClass('active');
      } else {
          $('.collection-product__character__selects-head-2').removeClass('open');
          $('.collection-product__character__select__list-2').fadeOut();
          $('.collection-product__character__select__list-2').addClass('closed');
          $('.body__overlay-2').removeClass('active');
          $(this).addClass('open');
          $(this).next().fadeIn();
          $(this).next().removeClass('closed');
          $('.body__overlay-2').addClass('active');
      }
  });

  $('.collection-product__character__selects-2').on('click', '.collection-product__character__select__item-2', function () {
      $('.collection-product__character__selects-head-2').removeClass('open');
      $('.body__overlay-2').removeClass('active');
      $(this).parent().fadeOut();
      $(this).parent().addClass('closed');
      $(this).parent().prev().html($(this).html());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.collection-product__character__selects-2').length) {
          $('.collection-product__character__selects-head-2').removeClass('open');
          $('.collection-product__character__select__list-2').fadeOut();
          $('.collection-product__character__select__list-2').addClass('closed');
          $('.body__overlay-2').removeClass('active');
      }
  });
});

jQuery(($) => {
  $('.collection-product__character__selects-2').on('click', '.character__select-head-span', function () {
          $(this).removeClass('open');
          $(this).next().fadeOut();
          $(this).next().addClass('closed');
          $('.body__overlay-2').removeClass('active');
          $('.collection-product__character__selects-head-2').removeClass('open');
          $('.collection-product__character__select__list-2').fadeOut();
          $('.collection-product__character__select__list-2').addClass('closed');
          $('.body__overlay-2').removeClass('active');
          $(this).next().fadeIn();
          $(this).next().removeClass('closed');
  });

  $('.collection-product__character__selects-2').on('click', '.character__select-head-span', function () {
      $('.collection-product__character__selects-head-2').removeClass('open');
      $('.body__overlay-2').removeClass('active');
  });
});

jQuery(($) => {
  $('.collection-product__character__selects').on('click', '.character__select-head-span', function () {
          $(this).removeClass('open');
          $(this).next().fadeOut();
          $(this).next().addClass('closed');
          $('.body__overlay').removeClass('active');
          $('.collection-product__character__selects-head').removeClass('open');
          $('.collection-product__character__select__list').fadeOut();
          $('.collection-product__character__select__list').addClass('closed');
          $('.body__overlay').removeClass('active');
          $(this).next().fadeIn();
          $(this).next().removeClass('closed');
  });

  $('.collection-product__character__selects').on('click', '.character__select-head-span', function () {
      $('.collection-product__character__selects-head').removeClass('open');
      $('.body__overlay').removeClass('active');
  });
});

// кнопка переключения
$(".doornav__button-door").click(function() {
  $(".doornav__button-door").addClass("active");
  $(".doornav__button-col").removeClass("active");
  $(".collectionlist").addClass("fade");
  $(".doorlist").removeClass("fade");
  $(".doorlist").addClass("showcopied");
  $(".collectionlist").removeClass("showcopied");
  setTimeout(function() {$(".collectionlist").css("display", "none");}, 300);
  setTimeout(function() {$(".doorlist").css("display", "block");}, 300);
});
// кнопка переключения
$(".doornav__button-col").click(function() {
  $(".doornav__button-col").addClass("active");
  $(".doornav__button-door").removeClass("active");
  $(".doorlist").addClass("fade");
  $(".collectionlist").removeClass("fade");
  $(".collectionlist").addClass("showcopied");
  $(".doorlist").removeClass("showcopied");
  setTimeout(function() {$(".doorlist").css("display", "none");}, 300);
  setTimeout(function() {$(".collectionlist").css("display", "block");}, 300);
});

(function() {
	'use strict';
  document.body.addEventListener('click', copy, true);
	function copy(e) {
    var 
      t = e.target,
      c = t.dataset.copytarget,
      inp = (c ? document.querySelector(c) : null);
    if (inp && inp.select) {
      inp.select();
      try {
        document.execCommand('copy');
        inp.blur();
        t.classList.add('action__product-copied');
        setTimeout(function() { t.classList.remove('action__product-copied'); }, 1500);
      }
      catch (err) {
        alert('Не удалось скопировать, скопируйте вручную.');
      }
    }
	}
})();

// кнопка переключения
$(".doorinfo__button-description").click(function() {
  $(".doorinfo__button-description").addClass("active");
  $(".doorinfo__button-information").removeClass("active");
  $(".doorinfo__button-delivery").removeClass("active");
  $(".doorinfo__button-reviews").removeClass("active");
  $(".doorinfo-description").removeClass("fade");
  $(".doorinfo-information").addClass("fade");
  $(".doorinfo-delivery").addClass("fade");
  $(".doorinfo-reviews").addClass("fade");
  $(".doorinfo-description").addClass("showcopied");
  $(".doorinfo-information").removeClass("showcopied");
  $(".doorinfo-delivery").removeClass("showcopied");
  $(".doorinfo-reviews").removeClass("showcopied");
  setTimeout(function() {$(".doorinfo-information").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-delivery").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-reviews").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-description").css("display", "block");}, 300);
});
// кнопка переключения
$(".doorinfo__button-information").click(function() {
  $(".doorinfo__button-information").addClass("active");
  $(".doorinfo__button-description").removeClass("active");
  $(".doorinfo__button-delivery").removeClass("active");
  $(".doorinfo__button-reviews").removeClass("active");
  $(".doorinfo-information").removeClass("fade");
  $(".doorinfo-description").addClass("fade");
  $(".doorinfo-delivery").addClass("fade");
  $(".doorinfo-reviews").addClass("fade");
  $(".doorinfo-information").addClass("showcopied");
  $(".doorinfo-description").removeClass("showcopied");
  $(".doorinfo-delivery").removeClass("showcopied");
  $(".doorinfo-reviews").removeClass("showcopied");
  setTimeout(function() {$(".doorinfo-description").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-delivery").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-reviews").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-information").css("display", "block");}, 300);
});
// кнопка переключения
$(".doorinfo__button-delivery").click(function() {
  $(".doorinfo__button-delivery").addClass("active");
  $(".doorinfo__button-information").removeClass("active");
  $(".doorinfo__button-description").removeClass("active");
  $(".doorinfo__button-reviews").removeClass("active");
  $(".doorinfo-delivery").removeClass("fade");
  $(".doorinfo-information").addClass("fade");
  $(".doorinfo-description").addClass("fade");
  $(".doorinfo-reviews").addClass("fade");
  $(".doorinfo-delivery").addClass("showcopied");
  $(".doorinfo-description").removeClass("showcopied");
  $(".doorinfo-information").removeClass("showcopied");
  $(".doorinfo-reviews").removeClass("showcopied");
  setTimeout(function() {$(".doorinfo-information").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-description").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-reviews").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-delivery").css("display", "block");}, 300);
});
// кнопка переключения
$(".doorinfo__button-reviews").click(function() {
  $(".doorinfo__button-reviews").addClass("active");
  $(".doorinfo__button-information").removeClass("active");
  $(".doorinfo__button-delivery").removeClass("active");
  $(".doorinfo__button-description").removeClass("active");
  $(".doorinfo-reviews").removeClass("fade");
  $(".doorinfo-information").addClass("fade");
  $(".doorinfo-delivery").addClass("fade");
  $(".doorinfo-description").addClass("fade");
  $(".doorinfo-reviews").addClass("showcopied");
  $(".doorinfo-description").removeClass("showcopied");
  $(".doorinfo-information").removeClass("showcopied");
  $(".doorinfo-delivery").removeClass("showcopied");
  setTimeout(function() {$(".doorinfo-information").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-delivery").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-description").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinfo-reviews").css("display", "block");}, 300);
});

// кнопка переключения
$(".doorinformation__button-description").click(function() {
  $(".doorinformation__button-description").addClass("active");
  $(".doorinformation__button-information").removeClass("active");
  $(".doorinformation__button-delivery").removeClass("active");
  $(".doorinformation__button-reviews").removeClass("active");
  $(".doorinformation-description").removeClass("fade");
  $(".doorinformation-information").addClass("fade");
  $(".doorinformation-delivery").addClass("fade");
  $(".doorinformation-reviews").addClass("fade");
  $(".doorinformation-description").addClass("showcopied");
  $(".doorinformation-information").removeClass("showcopied");
  $(".doorinformation-delivery").removeClass("showcopied");
  $(".doorinformation-reviews").removeClass("showcopied");
  setTimeout(function() {$(".doorinformation-information").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-delivery").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-reviews").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-description").css("display", "block");}, 300);
});
// кнопка переключения
$(".doorinformation__button-information").click(function() {
  $(".doorinformation__button-information").addClass("active");
  $(".doorinformation__button-description").removeClass("active");
  $(".doorinformation__button-delivery").removeClass("active");
  $(".doorinformation__button-reviews").removeClass("active");
  $(".doorinformation-information").removeClass("fade");
  $(".doorinformation-description").addClass("fade");
  $(".doorinformation-delivery").addClass("fade");
  $(".doorinformation-reviews").addClass("fade");
  $(".doorinformation-information").addClass("showcopied");
  $(".doorinformation-description").removeClass("showcopied");
  $(".doorinformation-delivery").removeClass("showcopied");
  $(".doorinformation-reviews").removeClass("showcopied");
  setTimeout(function() {$(".doorinformation-description").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-delivery").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-reviews").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-information").css("display", "block");}, 300);
});
// кнопка переключения
$(".doorinformation__button-delivery").click(function() {
  $(".doorinformation__button-delivery").addClass("active");
  $(".doorinformation__button-information").removeClass("active");
  $(".doorinformation__button-description").removeClass("active");
  $(".doorinformation__button-reviews").removeClass("active");
  $(".doorinformation-delivery").removeClass("fade");
  $(".doorinformation-information").addClass("fade");
  $(".doorinformation-description").addClass("fade");
  $(".doorinformation-reviews").addClass("fade");
  $(".doorinformation-delivery").addClass("showcopied");
  $(".doorinformation-description").removeClass("showcopied");
  $(".doorinformation-information").removeClass("showcopied");
  $(".doorinformation-reviews").removeClass("showcopied");
  setTimeout(function() {$(".doorinformation-information").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-description").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-reviews").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-delivery").css("display", "block");}, 300);
});
// кнопка переключения
$(".doorinformation__button-reviews").click(function() {
  $(".doorinformation__button-reviews").addClass("active");
  $(".doorinformation__button-information").removeClass("active");
  $(".doorinformation__button-delivery").removeClass("active");
  $(".doorinformation__button-description").removeClass("active");
  $(".doorinformation-reviews").removeClass("fade");
  $(".doorinformation-information").addClass("fade");
  $(".doorinformation-delivery").addClass("fade");
  $(".doorinformation-description").addClass("fade");
  $(".doorinformation-reviews").addClass("showcopied");
  $(".doorinformation-description").removeClass("showcopied");
  $(".doorinformation-information").removeClass("showcopied");
  $(".doorinformation-delivery").removeClass("showcopied");
  setTimeout(function() {$(".doorinformation-information").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-delivery").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-description").css("display", "none");}, 300);
  setTimeout(function() {$(".doorinformation-reviews").css("display", "block");}, 300);
});

$('.collection-product__for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  dotsClass: 'slick-dots',
  asNavFor: '.collection-product__nav'
});
$('.collection-product__nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.collection-product__for',
  arrows: false,
  dots: false,
  vertical: true,
  verticalSwiping: true,
  focusOnSelect: true
});

// кнопка переключения
$(".searchnav__button-page").click(function() {
  $(".searchnav__button-page").addClass("active");
  $(".searchnav__button-blog").removeClass("active");
  $(".bloglist").addClass("fade");
  $(".pagelist").removeClass("fade");
  $(".pagelist").addClass("showcopied");
  $(".bloglist").removeClass("showcopied");
  setTimeout(function() {$(".bloglist").css("display", "none");}, 300);
  setTimeout(function() {$(".pagelist").css("display", "block");}, 300);
});
// кнопка переключения
$(".searchnav__button-blog").click(function() {
  $(".searchnav__button-blog").addClass("active");
  $(".searchnav__button-page").removeClass("active");
  $(".pagelist").addClass("fade");
  $(".bloglist").removeClass("fade");
  $(".bloglist").addClass("showcopied");
  $(".pagelist").removeClass("showcopied");
  setTimeout(function() {$(".pagelist").css("display", "none");}, 300);
  setTimeout(function() {$(".bloglist").css("display", "block");}, 300);
});

// если есть третий подпункт добавляем дивайдер
var obj_list = document.querySelector('.header__nav-list'),
    objs_list_li = obj_list.querySelectorAll('.header__subnav-item');
for(var i = 0; i < objs_list_li.length; i++){
  var objs_li_ul = objs_list_li[i].querySelectorAll('.header__tosubnav_list');
  if( objs_li_ul.length ){
    objs_list_li[i].querySelector('.header__subnav-span').style.display = 'inline-flex';
  };
};

$( window ).resize(function() {
  if ($(window).width() < 1201) {
    $(".header__tosubnav_list").css("display", "none");
    $(".header__subnav_drop").css("display", "none");
    $(".header__nav-item").removeClass("open");
    $(".header__subnav-item").removeClass("open");
  }
  if ($(window).width() > 1200) {
    $(".header__tosubnav_list").css("display", "block");
    $(".header__subnav_drop").css("display", "block");
    document.querySelector('.header').classList.remove("header-open");
  }
});
$( window ).width(function() {
  if ($(window).width() < 1201) {
    $(".header__tosubnav_list").css("display", "none");
    $(".header__subnav_drop").css("display", "none");
    $(".header__nav-item").removeClass("open");
    $(".header__subnav-item").removeClass("open");
  }
  if ($(window).width() > 1200) {
    $(".header__tosubnav_list").css("display", "block");
    $(".header__subnav_drop").css("display", "block");
    document.querySelector('.header').classList.remove("header-open");
  }
});

$(function(Accordion2) {
  var Accordion2 = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    $('.header__nav-dropbtn').on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  Accordion2.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('open');
    if (!e.data.multiple) {
      $el.find('.header__subnav_drop').not($next).slideUp().parent().removeClass('open');
    };
  }
  var Accordion2 = new Accordion2($('.header__nav-list'), false);
});
$(function(Accordion3) {
  var Accordion3 = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    $('.header__subnav-dropbtn').on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  Accordion3.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('open');
    if (!e.data.multiple) {
      $el.find('.header__tosubnav_list').not($next).slideUp().parent().removeClass('open');
    };
  }
  var Accordion3 = new Accordion3($('.header__nav-list'), false);
});

// меню аккордион
document.querySelector('.header__burger').addEventListener('click', function() {
  var menu = document.querySelector('.header__nav-list');
  var burger = document.querySelector('.header__burger');
  var overlay = document.querySelector('.header__overlay');
  var geo = document.querySelector('.header__geo');
  var header = document.querySelector('.header');
  var absolute = document.querySelector('.header__absolute');
  var dropdown = document.querySelectorAll('.header__subnav_drop');
  if (burger.classList.contains("header__burger-active")) {
    menu.classList.remove("header__open");
    burger.classList.remove("header__burger-active");
    overlay.classList.remove("header__overlay-open");
    geo.classList.remove("header__geo-open");
    header.classList.remove("header-open");
    setTimeout(function() {absolute.classList.remove("header__absolute-open");}, 300);
    for (let i = 0; i < dropdown.length; i++) {
     dropdown[i].style.maxHeight = null;
    }
  } else {
    menu.classList.add("header__open");
    burger.classList.add("header__burger-active");
    overlay.classList.add("header__overlay-open");
    geo.classList.add("header__geo-open");
    header.classList.add("header-open");
    absolute.classList.add("header__absolute-open");
    setTimeout(function() {absolute.classList.add("header__absolute-open");}, 300);
  }
  overlay.addEventListener('click', () => {
    menu.classList.remove('header__open');
    burger.classList.remove('header__burger-active');
    overlay.classList.remove('header__overlay-open');
    geo.classList.remove("header__geo-open");
    header.classList.remove("header-open");
    setTimeout(function() {absolute.classList.remove("header__absolute-open");}, 300);
    for (let i = 0; i < dropdown.length; i++) {
     dropdown[i].style.maxHeight = null;
   }
  });
})




// кнопка переключения фильтра
$( window ).resize(function() {
  if ($(window).width() < 1600) {
    $(".filternav__container").css("display", "none");
    $(".doornav__filter-button").on("click", function(){
      $(".filternav__container").toggle();
    });
  }
  if ($(window).width() > 1600) {
    $(".filternav__container").css("display", "flex");
  }
});
$( window ).width(function() {
  if ($(window).width() < 1600) {
    $(".filternav__container").css("display", "none");
    $(".doornav__filter-button").on("click", function(){
      $(".filternav__container").toggle();
    });
  }
  if ($(window).width() > 1600) {
    $(".filternav__container").css("display", "flex");
  }
});


$(document).ready(function () {
  $slick_slider2 = $('.fashion__list');
  settings = {
     speed: 1200,
     prevArrow:
        '<img src="img/gallery/arrowBack.svg" alt="Back" class="section-gallery__carousel-prev">',
     nextArrow:
        '<img src="img/gallery/arrowForward.svg" alt="Forward" class="section-gallery__carousel-next">',
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
     autoplay: false,
     dots: true,
     responsive: [
      {
         breakpoint: 10000,
         settings: 'unslick',
         dots: false,
      },
        {
           breakpoint: 767,
           settings: 'slick',
           dots: true,
        },
     ],
  }
  $slick_slider2.slick(settings);
  $( window ).resize(function() {
    if ($(window).width() < 768) {
      if (!$slick_slider2.hasClass('slick-initialized')) {
        return $slick_slider2.slick(settings);
      }
      return
    }
    if ($slick_slider2.hasClass('slick-initialized')) {
      $slick_slider2.slick('unslick');
    }
  });
  $( window ).width(function() {
    if ($(window).width() < 768) {
      if (!$slick_slider2.hasClass('slick-initialized')) {
        return $slick_slider2.slick(settings);
      }
      return
    }
    if ($slick_slider2.hasClass('slick-initialized')) {
      $slick_slider2.slick('unslick');
    }
  });
})

// кнопка переключения
$(".glass__button-all").click(function() {
  $(".glass__button-all").addClass("active");
  $(".glass__button-input").removeClass("active");
  $(".glass__button-interroom").removeClass("active");
  $(".glass__info-all").removeClass("fade");
  $(".glass__info-input").addClass("fade");
  $(".glass__info-interroom").addClass("fade");
  $(".glass__info-all").addClass("showcopied");
  $(".glass__info-input").removeClass("showcopied");
  $(".glass__info-interroom").removeClass("showcopied");
  setTimeout(function() {$(".glass__info-input").css("display", "none");}, 300);
  setTimeout(function() {$(".glass__info-interroom").css("display", "none");}, 300);
  setTimeout(function() {$(".glass__info-all").css("display", "block");}, 300);
});
// кнопка переключения
$(".glass__button-input").click(function() {
  $(".glass__button-input").addClass("active");
  $(".glass__button-all").removeClass("active");
  $(".glass__button-interroom").removeClass("active");
  $(".glass__info-input").removeClass("fade");
  $(".glass__info-all").addClass("fade");
  $(".glass__info-interroom").addClass("fade");
  $(".glass__info-input").addClass("showcopied");
  $(".glass__info-all").removeClass("showcopied");
  $(".glass__info-interroom").removeClass("showcopied");
  setTimeout(function() {$(".glass__info-all").css("display", "none");}, 300);
  setTimeout(function() {$(".glass__info-interroom").css("display", "none");}, 300);
  setTimeout(function() {$(".glass__info-input").css("display", "block");}, 300);
});
// кнопка переключения
$(".glass__button-interroom").click(function() {
  $(".glass__button-interroom").addClass("active");
  $(".glass__button-input").removeClass("active");
  $(".glass__button-all").removeClass("active");
  $(".glass__info-interroom").removeClass("fade");
  $(".glass__info-input").addClass("fade");
  $(".glass__info-all").addClass("fade");
  $(".glass__info-interroom").addClass("showcopied");
  $(".glass__info-input").removeClass("showcopied");
  $(".glass__info-all").removeClass("showcopied");
  setTimeout(function() {$(".glass__info-input").css("display", "none");}, 300);
  setTimeout(function() {$(".glass__info-all").css("display", "none");}, 300);
  setTimeout(function() {$(".glass__info-interroom").css("display", "block");}, 300);
});
// кнопка переключения
$(".delivery__button-delivery").click(function() {
  $(".delivery__button-delivery").addClass("active");
  $(".delivery__button-installation").removeClass("active");
  $(".delivery__info-delivery").removeClass("fade");
  $(".delivery__info-installation").addClass("fade");
  $(".delivery__info-delivery").addClass("showcopied");
  $(".delivery__info-installation").removeClass("showcopied");
  setTimeout(function() {$(".delivery__info-installation").css("display", "none");}, 300);
  setTimeout(function() {$(".delivery__info-delivery").css("display", "block");}, 300);
});
// кнопка переключения
$(".delivery__button-installation").click(function() {
  $(".delivery__button-installation").addClass("active");
  $(".delivery__button-delivery").removeClass("active");
  $(".delivery__info-installation").removeClass("fade");
  $(".delivery__info-delivery").addClass("fade");
  $(".delivery__info-installation").addClass("showcopied");
  $(".delivery__info-delivery").removeClass("showcopied");
  setTimeout(function() {$(".delivery__info-delivery").css("display", "none");}, 300);
  setTimeout(function() {$(".delivery__info-installation").css("display", "block");}, 300);
});


// кнопка переключения
$(".pay__button-credit").click(function() {
  $(".pay__button-credit").addClass("active");
  $(".pay__button-pay").removeClass("active");
  $(".pay__info-credit").removeClass("fade");
  $(".pay__info-pay").addClass("fade");
  $(".pay__info-credit").addClass("showcopied");
  $(".pay__info-pay").removeClass("showcopied");
  setTimeout(function() {$(".pay__info-pay").css("display", "none");}, 300);
  setTimeout(function() {$(".pay__info-credit").css("display", "block");}, 300);
});
// кнопка переключения
$(".pay__button-pay").click(function() {
  $(".pay__button-pay").addClass("active");
  $(".pay__button-credit").removeClass("active");
  $(".pay__info-pay").removeClass("fade");
  $(".pay__info-credit").addClass("fade");
  $(".pay__info-pay").addClass("showcopied");
  $(".pay__info-credit").removeClass("showcopied");
  setTimeout(function() {$(".pay__info-credit").css("display", "none");}, 300);
  setTimeout(function() {$(".pay__info-pay").css("display", "block");}, 300);
});



$( window ).resize(function() {
  if ( $(window).width() > 1529) {
  $(function(){	
    var column = 0;
    $('.weststyle-about__info').each(function(){
      h = $(this).height();
      if (h > column) {
        column = h;
      }
    })
    $(this).find('.weststyle-about__img').css('height', '545px');
  });
  } else if ( $(window).width() < 1530) {
  $(function(){
    var column = 0;
    $('.weststyle-about__info').each(function(){
      h = $(this).height();
      if (h > column) {
        column = h;
      }
    })
    $(this).find('.weststyle-about__img').css('height', column);
  });
  } if ( $(window).width() < 767) {
    $(function(){	
      var column = 0;
      $('.weststyle-about__info').each(function(){
        h = $(this).height();
        if (h > column) {
          column = h;
        }
      })
      $(this).find('.weststyle-about__img').css('height', '357px');
    });
  }
})

$( window ).width(function() {
  if ( $(window).width() > 1529) {
    $(function(){	
      var column = 0;
      $('.weststyle-about__info').each(function(){
        h = $(this).height();
        if (h > column) {
          column = h;
        }
      })
      $(this).find('.weststyle-about__img').css('height', '545px');
    });
  } else if ( $(window).width() < 1530) {
    $(function(){	
      var column = 0;
      $('.weststyle-about__info').each(function(){
        h = $(this).height();
        if (h > column) {
          column = h;
        }
      })
      $(this).find('.weststyle-about__img').css('height', column);
    });
  } if ( $(window).width() < 767) {
    $(function(){	
      var column = 0;
      $('.weststyle-about__info').each(function(){
        h = $(this).height();
        if (h > column) {
          column = h;
        }
      })
      $(this).find('.weststyle-about__img').css('height', '357px');
    });
  }
})

$('.technology-slider__slide').slick({
  infinite: true,
  autoplay: true,
  fade: true,
  prevArrow:
  "<div class='prevArrow'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
  nextArrow:
  '<div class="nextArrow"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1720,
      settings: {
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
      }
    },
]
});




$( window ).resize(function() {
  if ( $(window).width() > 767) {
  $(function(){	
$(".shops__item-map").css("display", "block");
$(".shops__item-map").removeClass("fade");
$(".shops__item-info").removeClass("fade");
$(".shops__button-info").addClass("active");
$(".shops__button-map").removeClass("active");
// кнопка переключения
$(".shops__button-info").click(function() {
  $(".shops__button-info").addClass("active");
  $(".shops__button-map").removeClass("active");
  $(".shops__item-info").removeClass("fade");
  $(".shops__item-map").addClass("fade");
  $(".shops__item-info").addClass("showcopied");
  $(".shops__item-map").removeClass("showcopied");
  setTimeout(function() {$(".shops__item-map").css("display", "none");}, 300);
  setTimeout(function() {$(".shops__item-info").css("display", "block");}, 300);
});
// кнопка переключения
$(".shops__button-map").click(function() {
  $(".shops__button-map").addClass("active");
  $(".shops__button-info").removeClass("active");
  $(".shops__item-map").removeClass("fade");
  $(".shops__item-info").addClass("fade");
  $(".shops__item-map").addClass("showcopied");
  $(".shops__item-info").removeClass("showcopied");
  setTimeout(function() {$(".shops__item-info").css("display", "none");}, 300);
  setTimeout(function() {$(".shops__item-map").css("display", "block");}, 300);
});
  });
  } else if ( $(window).width() < 768) {
  $(function(){
    $(".shops__item-info").css("display", "block");
    $(".shops__item-map").css("display", "none");
    $(".shops__button-info").addClass("active");
    $(".shops__button-map").removeClass("active");
  });
  }
})

$( window ).width(function() {
  if ( $(window).width() > 767) {
    $(function(){
$(".shops__item-map").css("display", "block");
$(".shops__item-map").removeClass("fade");
$(".shops__item-info").removeClass("fade");
$(".shops__button-info").addClass("active");
$(".shops__button-map").removeClass("active");
// кнопка переключения
$(".shops__button-info").click(function() {
  $(".shops__button-info").addClass("active");
  $(".shops__button-map").removeClass("active");
  $(".shops__item-info").removeClass("fade");
  $(".shops__item-map").addClass("fade");
  $(".shops__item-info").addClass("showcopied");
  $(".shops__item-map").removeClass("showcopied");
  setTimeout(function() {$(".shops__item-map").css("display", "none");}, 300);
  setTimeout(function() {$(".shops__item-info").css("display", "block");}, 300);
});
// кнопка переключения
$(".shops__button-map").click(function() {
  $(".shops__button-map").addClass("active");
  $(".shops__button-info").removeClass("active");
  $(".shops__item-map").removeClass("fade");
  $(".shops__item-info").addClass("fade");
  $(".shops__item-map").addClass("showcopied");
  $(".shops__item-info").removeClass("showcopied");
  setTimeout(function() {$(".shops__item-info").css("display", "none");}, 300);
  setTimeout(function() {$(".shops__item-map").css("display", "block");}, 300);
});
    });
  } else if ( $(window).width() < 768) {
    $(function(){	
      $(".shops__item-info").css("display", "block");
      $(".shops__item-map").css("display", "none");
      $(".shops__button-info").addClass("active");
      $(".shops__button-map").removeClass("active");
    });
  }
})

$('.press-center__for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,
  asNavFor: '.press-center__nav'
});
$('.press-center__nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.press-center__for',
  prevArrow:"<div class='prevArrow'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
  nextArrow:'<div class="nextArrow"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
  dots: false,
  vertical: true,
  verticalSwiping: true,
  focusOnSelect: true
});
$('.press-center__for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $('.press-center__for_image').attr('src', $('.press-center__for_image').attr('src'));
});
$(".press-center__for").on('afterChange', function(event, slick, currentSlide){
  $(".press-center__for-1").text(currentSlide + 1);
});
var texts = document.querySelectorAll(".press-center__for_item"),
suball = texts.length,
arrtext = Array.from(texts);
$('.press-center__for-2').append(suball);

// кнопка переключения
$(".press-center__button-news").click(function() {
  $(".press-center__button-news").addClass("active");
  $(".press-center__button-blog").removeClass("active");
  $(".press-center__button-video").removeClass("active");
  $(".press-center__news").removeClass("fade");
  $(".press-center__blog").addClass("fade");
  $(".press-center__video").addClass("fade");
  $(".press-center__news").addClass("showcopied");
  $(".press-center__blog").removeClass("showcopied");
  $(".press-center__video").removeClass("showcopied");
});
// кнопка переключения
$(".press-center__button-blog").click(function() {
  $(".press-center__button-blog").addClass("active");
  $(".press-center__button-news").removeClass("active");
  $(".press-center__button-video").removeClass("active");
  $(".press-center__blog").removeClass("fade");
  $(".press-center__news").addClass("fade");
  $(".press-center__video").addClass("fade");
  $(".press-center__blog").addClass("showcopied");
  $(".press-center__news").removeClass("showcopied");
  $(".press-center__video").removeClass("showcopied");
});
// кнопка переключения
$(".press-center__button-video").click(function() {
  $(".press-center__button-video").addClass("active");
  $(".press-center__button-blog").removeClass("active");
  $(".press-center__button-news").removeClass("active");
  $(".press-center__video").removeClass("fade");
  $(".press-center__blog").addClass("fade");
  $(".press-center__news").addClass("fade");
  $(".press-center__video").addClass("showcopied");
  $(".press-center__blog").removeClass("showcopied");
  $(".press-center__news").removeClass("showcopied");
});

let inputs = document.querySelectorAll('.modal__form_file-input');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.modal__form_file-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.modal__form_file-text').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.modal__form_file-text').innerText = labelVal;
  });
});