# Get started

<!-- Get CCS Frontend working in your application, so you can test everything works before you add more components or styles. -->
Get one CCS Frontend component working in your application, so you can test everything works before you add more components or styles.

You will need to do all the following steps to get your component working.

1. Install CCS Frontend (along with GOV.UK Frontend).
2. Add the HTML for a component to your application.
3. Get the CSS working.
4. Get the font and images working.
5. Get the JavaScript working.

## 1. Install

[Install CCS Frontend using npm](/docs/guides/install-with-npm.md).

If you’ve installed using precompiled files, get started with [a basic page](/docs/guides/install-using-compiled-files.md#check-an-example-page) instead.

## 2. Add the HTML for a component to your application

Go to the [example header component](https://ts-ccs-frontend.herokuapp.com/components/header) on the CCS Frontend website, then copy the HTML.

Paste the HTML into a page or template in your application.

You should also add a GOV.UK Frontend component to make sure that it is working too.
For example, you can use the [example accordion component](https://design-system.service.gov.uk/components/accordion/#accordion-example) on the GOV.UK Design System website.

## 3. Get the CSS working

1.  Add the following to the main Sass file in your project, so your Sass compiler adds all of CCS Frontend’s and GOV.UK Frontend’s styles to your CSS file.

    ```scss
    @import "node_modules/govuk-frontend/govuk/all";
    @import "node_modules/ts-ccs-frontend/ccs/all";
    ```

2.  Add your CSS file to your page layout if you need to. For example:

    ```html
    <head>
      ...
      <link rel="stylesheet" href="<YOUR-CSS-FILE>.css">
    </head>
    ```

3. Run your application and check that the header and accordion display correctly.

The header and accordion will use a generic font until you get the font and images working, and will not be interactive until you get the JavaScript working.

There are also different ways you can [import CCS Frontend CSS](/docs/guides/import-assets.md#css).

## 4. Get the font and images working

Your components will not use the right font or images until you’ve added CCS Frontend’s and GOV.UK Frontend’s assets to your application.

1.  Copy the following 2 folders:

    - `/node_modules/ts-ccs-frontend/ccs/assets/images` folder to `<YOUR-APP>/assets/images`
    - `/node_modules/govuk-frontend/govuk/assets/fonts` folder to `<YOUR-APP>/assets/fonts`

    Note, while GOV.UK Frontend also contains images, you will only need the images from CCS Frontend.

2.  Run your application, then use [the Fonts tab in Firefox Page Inspector](https://frontend.design-system.service.gov.uk/get-started/#:~:text=the%20Fonts%20tab%20in%20Firefox%20Page%20Inspector) to check the header and accordion is using the GDS Transport font.

3. In your live application, we recommend [using an automated task or your build pipeline](/docs/guides/import-assets.md#image-assets) instead of copying the files manually.

## 5. Get the JavaScript working

1.  Add the following to the top of the `<body>` section of your page template:

    ```html
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>
    ```

2.  Copy the following two files:
    - `/node-modules/govuk-frontend/govuk/all.js` to `<YOUR-JAVASCRIPT-FOLDER>/govuk.js`
    - `/node-modules/ts-ccs-frontend/ccs/all.js` to `<YOUR-JAVASCRIPT-FOLDER>/ccs.js`

3.  Import the file before the closing `</body>` tag of your page template, then run the `initAll` function to initialise all the components. For example:

    ```html
    <body>
      ...
      <script src="<YOUR-JAVASCRIPT-FOLDER>/ccs.js"></script>
      <script src="<YOUR-JAVASCRIPT-FOLDER>/govuk.js"></script>
      <script>
        window.CCSFrontend.initAll()
      </script>
      <script>
        window.GOVUKFrontend.initAll()
      </script>
    </body>
    ```
4.  Run your application and check it works:
    - For the header, on a mobile screen the `Menu` button should show and hide the navigation links
    - For the accordion it should act in the same way as the Design System example, by selecting the buttons and checking the accordion shows and hides sections.

In your live application:

- you must use `initAll` to initialise all components that use CCS Frontend’s and GOV.UK Frontend’s JavaScript, or some components will not work correctly for disabled users who use assistive technologies

- we recommend [using an automated task or your build pipeline](/docs/guides/import-assets.md#javascript) instead of copying the files manually

For CCS Frontend, you can now get the full code for page layouts and other components from the [CCS Frontend website](https://ts-ccs-frontend.herokuapp.com/).

For GOV.UK Frontend, you can now get the full code for page layouts and other components from the [Design System website](https://design-system.service.gov.uk/).
