const element = document.querySelector('select');
const choices = new Choices(element, {
  allowHTML: true,
  searchEnabled: false,
  placeholder: true,
  itemSelectText: '',
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: 'Вы не ввели имя',
    tel: 'Вы не ввели телефон',
    mail: 'Вы не ввели e-mail'
  },
});

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      center: [48.872185, 2.354224],
      zoom: 16,
  });

  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-marker.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42],
  });

  myMap.geoObjects.add(myPlacemark);
}


