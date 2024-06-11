const select = document.getElementById("select")

function q() {
  switch (select.selectedIndex) {
    case 0:
      document.body.style.backgroundColor = "#0000FF"
      break;
    case 1:
      document.body.style.backgroundColor = "#ffffff"
      break;
    case 2:
      document.body.style.backgroundColor = "#ffff00"
      break;
    default:
      break;
  }
}

q()

select.addEventListener("change", q)
