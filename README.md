## Finanțarea publică a activităților nonprofit

This project was created using React in a Node.js environment. React and ReactDOM must be installed to render the page.
Additional node packages that have been used are listed [below](#additional-packages).

## Short structure overview

- `index` connects to the ReactDOM, rendering `App`.
- `App` renders the following:
  - `Menu` is the hamburger menu.
  - `GraphMenu` is the left menu, which contains the Data & Resources panel. This option includes customization options (data fields (multiple dropdown menus - `Select`) and a display field (the five icons)); the selections made here change the data based on which `Canvas` renders other components.
  - `Canvas` represents the main part of the page, displaying the chosen data in a certain format (default is: all data on a `RomaniaMap`). Other display options are: `BarChartView` and `TableView`. It manages data, first by sending it to `GraphMenu`, which returns a filtered version of it, and then passing it to the other components (`RomaniaMap`, `TableView`, `BarChartView`).

## Current bugs

- **MAJOR**: Calendar (events view) has not yet been updated to work with the new layout. As such, it currently looks like garbage. Consider refactoring using CSS Flexbox or Grid.
- Table and bar chart views do not resize when footer disclaimer is dismissed.

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
- Dynamic map color scale

## Data-related

Data must be added for:

- News
- Members
- Citation
- Metadata in `index.html`

## Build Guide

1. Install `npm` (or, alternatively, `yarn`).
2. Clone repository (or download the zip file).
3. Open a terminal in the source folder and run `npm install`.
4. Run `npm start` in the terminal and connect (if not done automatically) to `localhost:3000` in the browser.

<br />
<br />
- NOTE: `canvasjs.min.js` and `canvasjs.react.js` have been added manually, not installed as modules.
- NOTE: `package.json` & `package-lock.json` are NOT updated; additional redundant packages are still present.
