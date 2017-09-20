$(document).ready(function() {
  $('.parallax').parallax();
});


const elements = {
  documents: $('.js-documents'),
  participants: $('.js-participants'),
  price: $('.js-pirce')
};


const checkboxes = {
  param_too: $('#too'),
  param_ip: $('#ip'),
  param_usn: $('#usn'),
  param_nds: $('#nds')
}

const values = {
  documentsValue: 20,
  participantsValue: 2,
  price: null
}

let DEFAULT_SUM = 25000;

let BASE_DOC_AMOUNT = 5000;

_updateDefaultSum();



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
  let value = Number(values[handle]);
  const sum = (2 * value) / 10 * 1000;
  _updateDefaultSum(sum);
  values.documentsValue = value;
  elements.documents.text(values);
  _checkValuesTypo('documents', values.documentsValue);
});

sliderParticipants.noUiSlider.on('update', function(values, handle) {
  let value = Number(values[handle]);
  values.participantsValue = value;

  elements.participants.text(values);
  _checkValuesTypo('participants', values.participantsValue);
});

function _updateDefaultSum(value) {
  if (value) {
    return elements.price.text(DEFAULT_SUM + value);
  }
  return elements.price.text(DEFAULT_SUM);
}

function _checkValuesTypo(name, value) {
  switch (name) {
    case 'documents':
      if (value === 300) {
        elements.documents.text(value + ' и выше');
      }
      break;
    case 'participants':
      if (value === 20) {
        elements.participants.text(value + ' и выше');
      }
      break;
  }

  function _calculate(sum, condition) {
    switch (condition) {
      case 'participants':
        return sum + DEFAULT_SUM
      default:

    }
    console.log(sum);
  }

}
