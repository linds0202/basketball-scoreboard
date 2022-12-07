let home = document.getElementById('home')
let guest = document.getElementById('guest')

let homeScore = home.textContent
let guestScore = home.textContent

const add1Home = () => {
    homeScore = +homeScore + 1
    home.textContent = homeScore
}

const add2Home = () => {
    homeScore = +homeScore + 2
    home.textContent = homeScore
}

const add3Home = () => {
    homeScore = +homeScore + 3
    home.textContent = homeScore
}

const add1Guest = () => {
    guestScore = +guestScore + 1
    guest.textContent = guestScore
}

const add2Guest = () => {
    guestScore = +guestScore + 2
    guest.textContent = guestScore
}

const add3Guest = () => {
    guestScore = +guestScore + 3
    guest.textContent = guestScore
}

const newGame = () => {
    homeScore = 0
    guestScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore
}