function nav() {
  let navbar = document.createElement("div")
  let logo = document.createElement("div")
  let link = document.createElement("div")
  let btn = document.createElement("div")

  navbar.appendChild(logo)
  navbar.appendChild(link)
  navbar.appendChild(btn)

  logo.innerHTML = `<img src="https://preview.colorlib.com/theme/alime/img/core-img/logo.png" alt="">`

  link.innerHTML = 
    `<a href="#">Home</a>
    <a href="#">Pages</a>
    <a href="#">About</a>
    <a href="#">Gallery</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>`

  btn.innerHTML = `<button>Read more</button>`

  return navbar
}
export default nav