## Finanțarea publică a activităților nonprofit

This project was created using React in a Node.js environment. React and ReactDOM must be installed to render the page.
Additional node packages that have been used are listed [below](#additional-packages).

## Short structure overview

- `index` connects to the ReactDOM, rendering `App`.
- `App` renders the following:
    - `Menu` is the top-right menu, which contains the logo and four of the menu options.
    - `GraphMenu` is the bottom-right menu, which contains the last of the five available menu options: "Date si resurse". This option includes customization options (data fields (dropdown menus) and a display field (the five icons)) and it directly changes the `Canvas`.
    - `Canvas` represents the main part of the page, displaying the chosen data in a certain format (default is: all data on a `RomaniaMap`). Other display options are: `BarChartView` and `TableView`.

## Current bugs

- `romaniaMapRSM.js`:
    Map is not being centered properly on dynamic resize. It works when reloading the page, but not on window resize via dragging corners.
- `tableView.js`:
    Table does not resize when window resizing via dragging corners. It does work when reloading the page, however.

## To do

- Translate `Table` and `Calendar` into Romanian
- Move constants and styles to a separate file then import them all at once to each file which requires them (especially with regards to the components which display a white div to the right of the menus, like `Membri`).
- Check compilation warnings.
- `menu.js`:
    - Change text color on hover.
    - Modularize submenu components using a single component which takes props to generate content dynamically.
- `graphmenu.js`:
    - Check if imported menu size constants have been properly implemented in all styling options (for proper resizing when changing them).
- `css.css`:
    - Clean css, eventually integrate via constants in `dropdown.js`.
- `membri.js`:
    - Add styling to the page, but only once the data to-be-added is known (so a design can be created around the data).
- `calendar.js` & `event.js`:
    - Calculate and import `GraphMenu` height instead of hardcoding it (to allow for flexibility upon margin and/or padding change).
    - Fix the paddings and margins and sizes - they might not be perfectly set.
    - Bind mouse wheel scrolling to the horizontal event scrollbar.
- Modularize the blank white page used to display most of the pages (implement it as a component).

## To implement

- Submenu items individual pages
- News
- JPG downloader

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
- Metadata in `index.html`

## Build Guide

1) Install `npm` (or, alternatively, `yarn`).
2) Clone repository (or download the zip file).
3) Open a terminal in the source folder and run `npm install`.
4) Run `npm start` in the terminal and connect (if not done automatically) to `localhost:3000` in the browser.

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
- `react-big-calendar` for displaying the events in a `Calendar`.
- `moment` for localization and data formatting used by `Calendar`.
- `react-table` for displaying the `TableView`.
- `recharts` for displaying the `BarChartView`.
<br />
Run the following command in the project directory to install the neccesary packages:

`npm install react react-dom react-simple-maps d3-geo topojson-client react-onclickoutside react-fontawesome react-tooltip react-transition-group webfontloader react-big-calendar moment react-table recharts --save`
<br />
<br />
- NOTE: `canvasjs.min.js` and `canvasjs.react.js` have been added manually, not installed as modules.
- NOTE: `package.json` & `package-lock.json` are NOT updated; additional redundant packages are still present.