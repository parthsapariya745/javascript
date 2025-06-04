function foot() {
  let footer = document.createElement("div")
  let sec1 = document.createElement("div")
  let sec2 = document.createElement("div")
  let sec3 = document.createElement("div")
  let sec4 = document.createElement("div")
  footer.appendChild(sec1)
  footer.appendChild(sec2)
  footer.appendChild(sec3)
  footer.appendChild(sec4)

  sec1.innerHTML = `<img src="https://preview.colorlib.com/theme/alime/img/core-img/logo.png" alt="">`

  sec2.innerHTML = `<ul>
    <li><a href="#">Clothing Fashion</a></li>
    <li><a href="#">Winter</a></li>
    <li><a href="#">Summer</a></li>
    <li><a href="#">Formal</a></li>
    <li><a href="#">Casual</a></li>
  </ul>`

  sec3.innerHTML = ` <ul>
    <li><a href="#">Clothing Fashion</a></li>
    <li><a href="#">Winter</a></li>
    <li><a href="#">Summer</a></li>
    <li><a href="#">Formal</a></li>
    <li><a href="#">Casual</a></li>
  </ul>`

  sec4.innerHTML = ` <ul>
    <li><a href="#">Clothing Fashion</a></li>
    <li><a href="#">Winter</a></li>
    <li><a href="#">Summer</a></li>
    <li><a href="#">Formal</a></li>
    <li><a href="#">Casual</a></li>
  </ul>`
  
  return footer
}
export default foot