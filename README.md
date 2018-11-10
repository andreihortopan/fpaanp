## Finanțarea publică a activităților nonprofit

This project was created using React in a Node.js environment. React and ReactDOM must be installed to render the page.
Additional node packages that have been used are listed [below](#additional-packages).

## Short structure overview

- `index` connects to the ReactDOM, rendering `App`.
- `App` renders the following:
    - `Menu` is the top-right menu, which contains the logo and four of the menu options.
    - `GraphMenu` is the bottom-right menu, which contains the last of the five available menu options: "Date si resurse". This option includes customization options (data fields (dropdown menus) and a display field (the five icons)) and it directly changes the `Canvas`.
    - `Canvas` represents the main part of the page, displaying the chosen data in a certain format (default is: all data on a `RomaniaMap`). Other display options are: `BarChart` and `TableView`.

## Current bugs

- `barChart.js`:
    Bar Chart feature is not working.
- `dropdown.js`:
    `onClickOutside` event is not being triggered.
- `romaniaMapRSM.js`:
    Map is not being centered properly on dynamic resize. It works when reloading the page, but not on window resize via dragging corners.

## To do

- Add diacritics to text.
- `submenu*.js`:
    - Resize submenu box in order to prevent gap between menu item and submenu so as not to rerender animation on mouse drag.
- `menu.js`:
    - Change text color on hover.
    - Modularize submenu components using a single component which takes props to generate content dynamically.
- `graphmenu.js`:
    - Change icon color on hover.
    - Change current canvas mode icon to download icon.
- `css.css`:
    - Clean css, eventually integrate via constants in `dropdown.js`.

## To implement

- Excel table view in `canvas.js`.
- Submenu items individual pages
- Calendar
- News

## Data related

Data must be updated in `romania-counties.json` in order to include county data; or it can be added externally and then linked.

Data must be added for:
- Public funding
- Resources:
    - Domains of interest
    - Authorities
    - Money data
    - Calendaristic data
- Events
- News

## Additional packages

- `react` and `react-dom` for rendering everything.

- `react-simple-maps` for rendering the interactive map.
- `d3-geo` for mapping projections for the map. It works in conjuction with the previous package.
- `topojson-client` for manipulating the `romania-counties.json` TopoJSON file.
- `react-onclickoutside` for detecting clicks outside the `Dropdown` components.
- `react-fontawesome` for arrow icons used across the menus.
- `react-tooltip` for generating county info on hovering over the map.
- `react-transition-group` for generating menu animations.
- `webfontloader` for rendering text using Google Fonts.
<br />
Run the following command in the project directory to install neccesary modules:

`npm install react react-dom react-onclickoutside react-fontawesome react-bar-chart react-simple-maps d3-geo --save`
<br />
<br />
- NOTE: `canvasjs.min.js` and `canvasjs.react.js` have been added manually, not installed as modules.
