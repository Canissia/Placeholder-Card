# Placeholder-Card
Placeholder card with CSS animation, JS content inserted


✅ Timer for ‘loading’

      setTimeout(getData, 2300)


✅ Create function that will load img from web.

      function getData() {
        header.innerHTML = '<img src="https://images.unsplash.com/photo-1583957723119-330fc2738e64?ixlib=rb-              1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1257&q=80" alt="" />'

✅ Hardcoded title, excerpt, profile_image, name, date

    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, delectus?'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />'
    name.innerHTML = 'Jane Doe'
    date.innerHTML = 'March 31, 2022'

✅ Once timer is done, remove animation to reveal card information

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg'))
}
