document.getElementById('subbtn').addEventListener('click', e =>
{e.preventDefault()

const db = firebase.firestore()

db.collection('messages').doc().set({
    text:document.getElementById('train').value
})
db.collection('messages').doc().set({
    text:document.getElementById('destination').value  
})
db.collection('messages').doc().sec({
    text:document.getElementById('firsttrn').value
})
db.collection('messages').doc().sec({
    text: document.getElementById('frequency').value
})
document.getElementById('subbtn').value=''
})


const getNext = (original, rate) => {
    const rateInSeconds = rate * 60
    const now = moment().unix()
    let lapse = original
    while (lapse < now) {
      lapse += rateInSeconds
    }
    return moment((lapse + rate), 'X').format('MMMM, Do YYYY hh:mm a')
  }