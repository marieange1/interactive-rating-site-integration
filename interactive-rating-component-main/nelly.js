const form = document.getElementsByTagName("form")[0]

const rating1 = form.rating1
const rating2 = form.rating2
const rating3 = form.rating3
const rating4 = form.rating4
const rating5 = form.rating5
const rating = document.getElementById("rating")
const content = document.getElementById("content")
const submitted = document.getElementById("submittedContent")


form.addEventListener("submit" , submit)
rating1.addEventListener("click" , rate1)
rating2.addEventListener("click" , rate2)
rating3.addEventListener("click" , rate3)
rating4.addEventListener("click" , rate4)
rating5.addEventListener("click" , rate5)


function submit (e) {
    e.preventDefault();
    content.classList.add("hidden")
    submitted.classList.remove("hidden")
}

function rate1 () {
    rating.value = rating1.value
}

function rate2 () {
    rating.value = rating2.value
}

function rate3 () {
    rating.value = rating3.value
}

function rate4 () {
    rating.value = rating4.value
}

function rate5 () {
    rating.value = rating5.value
}