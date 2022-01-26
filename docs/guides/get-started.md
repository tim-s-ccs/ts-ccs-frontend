# Get started

<!-- Get CCS Components working in your application, so you can test everything works before you add more components or styles. -->
Get one CCS Components component working in your application, so you can test everything works before you add more components or styles.

You will need to do all the following steps to get your component working.

1. Install CCS Components (along with GOV.UK Frontend).
2. Add the HTML for a component to your application.
3. Get the CSS working.
4. Get the font and images working.
5. Get the JavaScript working.

## 1. Install

[Install CCS Components using npm](/docs/instillation/install-with-npm.md).

If you’ve installed using precompiled files, get started with [a basic page](/docs/instillation/install-using-compiled-files.md#check-an-example-page) instead.

## 2. Add the HTML for a component to your application

[Run this project locally](/docs/contributing/running-locally.md) and go to the example header component, then copy the HTML.

Paste the HTML into a page or template in your application.

You should also add a GOV.UK Frontend component to make sure that it is working too.
For example, you can use the [example accordion component](https://design-system.service.gov.uk/components/accordion/#accordion-example) on the GOV.UK Design System website.

## 3. Get the CSS working

1.  Add the following to the main Sass file in your project, so your Sass compiler adds all of CCS Components' and GOV.UK Frontend’s styles to your CSS file.

    ```
    @import "node_modules/govuk-frontend/govuk/all";
    @import "node_modules/ts-ccs-components/ccs/all";
    ```

2.  Add your CSS file to your page layout if you need to. For example:

    ```
    <head>
      ...
      <link rel="stylesheet" href="<YOUR-CSS-FILE>.css">
    </head>
    ```

3. Run your application and check that the header and accordion display correctly.

The header and accordion will use a generic font until you get the font and images working, and will not be interactive until you get the JavaScript working.

<!-- TODO: Add Link -->
There are also different ways you can [import CCS Components CSS](import-assets.md#css).

## 4. Get the font and images working

Your components will not use the right font or images until you’ve added CCS Component's and GOV.UK Frontend’s assets to your application.

1.  Copy the following 2 folders:

    - `/node_modules/ts-ccs-components/ccs/assets/images` folder to `<YOUR-APP>/assets/images`
    - `/node_modules/govuk-frontend/govuk/assets/fonts` folder to `<YOUR-APP>/assets/fonts`

    Note, while GOV.UK Frontend also contains images, you will only need the images from CCS Components.

2.  Run your application, then use [the Fonts tab in Firefox Page Inspector](https://frontend.design-system.service.gov.uk/get-started/#:~:text=the%20Fonts%20tab%20in%20Firefox%20Page%20Inspector) to check the header and accordion is using the GDS Transport font.
<!-- TODO: Update this link -->
3. In your live application, we recommend [using an automated task or your build pipeline](import-assets.md#image-assets) instead of copying the files manually.

## 5. Get the JavaScript working

1.  Add the following to the top of the `<body>` section of your page template:

    ```
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>
    ```

2.  Copy the following two files:
    - `/node-modules/govuk-frontend/govuk/all.js` to `<YOUR-JAVASCRIPT-FOLDER>/govuk.js`
    - `/node-modules/ts-ccs-components/ccs/all.js` to `<YOUR-JAVASCRIPT-FOLDER>/ccs.js`

3.  Import the file before the closing `</body>` tag of your page template, then run the `initAll` function to initialise all the components. For example:

    ```
    <body>
      ...
      <script src="<YOUR-JAVASCRIPT-FOLDER>/ccs.js"></script>
      <script src="<YOUR-JAVASCRIPT-FOLDER>/govuk.js"></script>
      <script>
        window.CCSComponents.initAll()
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

- you must use `initAll` to initialise all components that use CCS Components' and GOV.UK Frontend’s JavaScript, or some components will not work correctly for disabled users who use assistive technologies
<!-- TODO: Update this link -->
- we recommend [using an automated task or your build pipeline](import-assets.md#javascript) instead of copying the files manually

<!-- TODO: Update this link in future for space -->
For CCS Components, you can find the code by running this [project as locally](/docs/contributing/running-locally.md).

For GOV.UK Frontend, you can now get the full code for page layouts and other components from the [Design System website](https://design-system.service.gov.uk/).
