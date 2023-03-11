// Découpage du texte en lettres individuelles
const text = document.querySelector('.text')
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')

// Ajout d'un event listener "mouseover" sur chaque lettre => ajout d'une classe déclenchant l'animation.
const lettres = document.querySelectorAll('span')
for (let i = 0; i < lettres.length; i++) {
    lettres[i].addEventListener('mouseover', () => {
        lettres[i].classList.add('smoke')
    })
}