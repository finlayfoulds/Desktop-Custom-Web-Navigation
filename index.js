document.addEventListener("DOMContentLoaded", () => {

  //initializing dot
  const dot = document.querySelector("#dot")

  //iterate over all .clickable elements and listen for clicks
  document.querySelectorAll(".clickable").forEach((item) => {
    item.addEventListener("click", () => {

      //move dot to item clicked on by user
      const navStyles = window.getComputedStyle(document.querySelector("#navigation-control-container"), null)
      dot.style.top = item.getBoundingClientRect().top - parseFloat(navStyles.getPropertyValue("top"))

      //loop through clickables icon to add appropriate colors
      document.querySelectorAll(".clickable").forEach((object) => {
        const icon = object.querySelector("svg")
        if (object === item) {

          //change objects color when dot arrives (140ms after click)
          setTimeout(() => {
            icon.style.fill = "black"
          }, 140)
        } else {

          //make non-clicked objects white
          icon.style.fill = "white"
        }
      })
    })
  })
})