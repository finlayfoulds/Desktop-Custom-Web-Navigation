# Desktop-Custom-Web-Navigation

This is a custom web navigation bar for a desktop website

Getting Started: 

Change href attributes in html to destination of anchor tag


For mobile version go to: https://github.com/finlayfoulds/Mobile-Custom-Web-Navigation.git


Adding or Removing Clickables:

To add clickables copy and paste other ones and substitute in href attribute values and the svg icons inside. Make sure they keep the class clickable or the JavaScript will not work

Each clickable is by default 50px and their ancestor (the #navigation-control-container) is 200px in height (line 9 of styles.css) which will need to be increased or decreased relative to the amount of clickables removed or added. (50px per clickable). The top (line 13 of styles.css) needs to be adjusted if height is adjusted to keep if in the middle of viewport height. (25px per clickable)