let heures = document.querySelector('#heures')
let minutes = document.querySelector('#minutes')
let secondes = document.querySelector('#secondes')
const h_hand = document.querySelector('.h_hand')
const m_hand = document.querySelector('.m_hand')
const s_hand = document.querySelector('.s_hand')

setInterval(() => {
    let hh = new Date().getHours()
    let mm = new Date().getMinutes()
    let ss = new Date().getSeconds()

    // ajouter un zéro si < 10
    if (hh < 10) {
        heures.innerHTML = '0' + hh
    } else {
        heures.innerHTML = hh
    }

    if (mm < 10) {
        minutes.innerHTML = '0' + mm
    } else {
        minutes.innerHTML = mm
    }

    if (ss < 10) {
        secondes.innerHTML = '0' + ss
    } else {
        secondes.innerHTML = ss
    }

    if (hh > 12) {
        hh = hh - 12
    }

    let rotate_h = (hh / 12) * 360
    h_hand.style.transform = 'rotate(' + rotate_h + 'deg)'
    let rotate_m = (mm / 60) * 360
    m_hand.style.transform = 'rotate(' + rotate_m + 'deg)'
    let rotate_s = (ss / 60) * 360
    s_hand.style.transform = 'rotate(' + rotate_s + 'deg)'
});

