function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("lightMode")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("lightMode")) {
    img.setAttribute("src", "./fotoLight.jpg")
    img.setAttribute("alt", "foto de caio collete no modo light")
  } else {
    img.setAttribute("src", "./foro.jpg")
    img.setAttribute("alt", "foto de caio collete no modo /dark")
  }
}
