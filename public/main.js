let thumbUp = document.getElementsByClassName("fa-thumbs-up");
// Selected the ThumbDown icon same way Thumb up was selected
let thumbDown = document.getElementsByClassName("fa-thumbs-down");
let trash = document.getElementsByClassName("fa-trash");
const questions = document.getElementsByClassName('question')


Array.from(questions).forEach(function (element) {
  element.addEventListener('click', function () {
  const q = this.childNodes[1].classList.toggle('hidden')
  const a = this.childNodes[3].classList.toggle('hidden')
  console.log(a)
  });
});

Array.from(thumbUp).forEach(function (element) {
  element.addEventListener('click', function () {
    const cardId = element.dataset.cardId
    console.log(cardId)
    const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cardId,
        'thumbUp': thumbUp
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

// THUMSB DOWN TRYING TO WORK
// Copy and Pasted what was in Thumbs Up
Array.from(thumbDown).forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.stopPropagation()
    const cardId = element.dataset.cardId
    console.log(cardId)
    // Change the Child Node to be 9 instead of 7 because that is where mine is
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
    fetch('messages', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cardId,
        'thumbDown': thumbDown
      })
    })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});


Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const cardId = element.dataset.cardId
    console.log(cardId)
    fetch('messages', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cardId
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
