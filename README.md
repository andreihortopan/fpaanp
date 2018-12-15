## Finanțarea publică a activităților nonprofit

This project was created using React in a Node.js environment. React and ReactDOM must be installed to render the page.
Additional node packages that have been used are listed [below](#additional-packages).

## Short structure overview

- `index` connects to the ReactDOM, rendering `App`.
- `App` renders the following:
    - `Menu` is the hamburger menu, which contains the logo and five of the menu options, two of which contain submenus.
    - `GraphMenu` is the left menu, which contains the Data & Resources panel. This option includes customization options (data fields (multiple dropdown menus - `Select`) and a display field (the five icons)); the selections made here change the data based on which `Canvas` renders other components.
    - `Canvas` represents the main part of the page, displaying the chosen data in a certain format (default is: all data on a `RomaniaMap`). Other display options are: `BarChartView` and `TableView`. It manages data, by first sending it to `GraphMenu`, which returns a filtered version of it, and then passing it to the other components (`RomaniaMap`, `TableView`, `BarChartView`).

## Current bugs

- `romaniaMapRSM.js`:
    Map is not being centered properly on dynamic resize. It works when reloading the page, but not on window resize via dragging corners.
- `tableView.js`:
    Table does not resize when window resizing via dragging corners. It does work when reloading the page, however.

## To do

- Translate `Calendar` into Romanian
- Move constants and styles to a separate file then import them all at once to each file which requires them (especially with regards to the components which display a white div to the right of the menus, like `Membri`).
- Check compilation warnings.
- `menu.js`:
    - Change text color on hover.
- `graphmenu.js`:
    - Check if imported menu size constants have been properly implemented in all styling options (for proper resizing when changing them).
- `css.css`:
    - Clean css, eventually integrate via constants in `dropdown.js`.
- `members.js`:
    - Add styling to the page
- `calendar.js` & `event.js`:
    - Check the paddings and margins and sizes - they might not be perfectly set.
    - Bind mouse wheel scrolling to the horizontal event scrollbar.
- ?: Modularize the blank white page used to display most of the pages (implement it as a component).

## To implement

- News
- Data downloader
- Multiple tab bar chart
- Map description
- Dynamic map color scale

## Data-related

Data must be added for:
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
- `react-onclickoutside` for detecting clicks outside the `Select` components.
- `react-fontawesome` for arrow icons used across the menus.
- `react-tooltip` for generating county info on hovering over the map.
- `react-transition-group` for generating menu animations.
- `webfontloader` for rendering text using Google Fonts.
- `react-big-calendar` for displaying the events in a `Calendar`.
- `moment` for localization and data formatting used by `Calendar`.
- `react-table` for displaying the `TableView`.
- `recharts` for displaying the `BarChartView`.
- `react-select` for rendering the `Select` menus.
- `react-tooltip` for displaying pop-ups.
- `react-burger-menu` for displaying the `Sidemenu`.
- `react-popup` for displaying the `Popup`.
- `react-router` for changing the page URL.
<br />
Run the following command in the project directory to install the neccesary packages:

`npm install react react-dom react-simple-maps d3-geo topojson-client react-onclickoutside react-fontawesome react-tooltip react-transition-group webfontloader react-big-calendar moment react-table recharts react-select react-tooltip react-burger-menu react-popup react-router --save`
<br />
<br />
- NOTE: `canvasjs.min.js` and `canvasjs.react.js` have been added manually, not installed as modules.
- NOTE: `package.json` & `package-lock.json` are NOT updated; additional redundant packages are still present.