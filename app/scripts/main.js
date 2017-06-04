$(document).ready(function() {
  $('.parallax').parallax();
  $('select').material_select();
});


const elements = {
  documents: $('.js-documents'),
  participants: $('.js-participants'),
  price: $('.js-pirce')
};
const checkboxes = {
  param_too: $('#too'),
  param_ip:  $('#ip'),
  param_usn: $('#usn'),
  param_nds: $('#nds')
}

const values = {
  documentsValue: 20,
  participantsValue: 2,
  price: null
}





// docoments slider
const sliderDocs = document.querySelector('.js-slider-documents');
const documentFormat = wNumb({
  decimals: 0,
});
noUiSlider.create(sliderDocs, {
  start: values.documentsValue,
  connect: 'lower',
  step: 25,
  range: {
    'min': 25,
    'max': 300
  },
  format: documentFormat
});

// participants slider

const sliderParticipants = document.querySelector('.js-slider-participants');
const formatParticipants = wNumb({
  decimals: 0,
  thousand: ',',
});
noUiSlider.create(sliderParticipants, {
  start: values.participantsValue,
  connect: 'lower',
  step: 1,
  range: {
    'min': 2,
    'max': 20
  },
  format: formatParticipants
});


sliderDocs.noUiSlider.on('update', function(values, handle) {
  let value = parseInt(values[handle]);
  values.documentsValue = value;
  console.log(values.price);
  console.log(values.documentsValue);
  elements.documents.text(values);
  if (value === 300) {
    elements.documents.text(values.documentsValue + ' и выше');
  }
});

sliderParticipants.noUiSlider.on('update', function(values, handle) {
  let value = parseInt(values[handle]);
  values.participantsValue = value;
  console.log(values.participantsValue);
  elements.participants.text(values);
  if (value === 20) {
    elements.participants.text(values.participantsValue + ' и выше');
  }

});
