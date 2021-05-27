// breathing technique - https://www.medicalnewstoday.com/articles/324417#benefits

const container = document.getElementById('container')
const text = document.getElementById('text')

const totalTime = 9500 // 9.5s from css
const breathTime = totalTime / 4.75 // 2s
const holdTime = (totalTime / 4.75) * 1.75 // 3.5s
// console.log(totalTime, breathTime, holdTime)

function breathAnimation() {

    text.innerText = 'Breath In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold!'

        setTimeout(() => {
            text.innerText = 'Breathe out!'
            container.className = 'container shrink'
        }, holdTime);

    }, breathTime);
}
breathAnimation()

setInterval(() => {
    breathAnimation()
}, 9500);