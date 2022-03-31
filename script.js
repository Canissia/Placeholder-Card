const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2300)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1583957723119-330fc2738e64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1257&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, delectus?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />'
    name.innerHTML = 'Jane Doe'
    date.innerHTML = 'March 31, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg'))
}