# CCS Frontend

CCS Frontend contains the code you need to start building a user interface
for CCS platforms and services.

This is based off of [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) which was created and is maintained by a team at the Government Digital Service.

Because of this, CCS Frontend can be used in an identical way to GOV.UK Frontend.

As part of future work, there will be a place where you can view live examples and guidance on when to use CCS Frontend as part of your service.

## STATUS: BUILD AND DEVELOPMENT
At the moment this project is still in the build and development phase.

As it is still not decided if CCS wants to take on this project, it is being hosted on the personal accounts of `tim-s-ccs`.

That is why the package is called [`ts-ccs-frontend` on NPM](https://www.npmjs.com/package/ts-ccs-frontend).

This will all be updated, with real package name confirmed, before the first major release.

## Contact the team

CCS Frontend is maintained by a team at the Crown Commercial Service.

If you want to know more about CCS Frontend, please email [Tim South](mailto:timothy.south@crowncommercial.gov.uk)

## Quick start

Please note that this package is designed to be used in the same way as GOV.UK Frontend so if these documents are not sufficient, please try the [documentation for GOV.UK Frontend](https://frontend.design-system.service.gov.uk/).

There are 2 ways to start using CCS Frontend in your app.

### 1. Install with npm (recommended)

We recommend [installing CCS Frontend using node package manager (npm)](https://github.com/tim-s-ccs/ts-ccs-frontend/blob/main/docs/guides/install-with-npm.md).

### 2. Install using compiled files

You can also install CCS Frontend by [copying our CSS, JavaScript and asset files into your project](https://github.com/tim-s-ccs/ts-ccs-frontend/blob/main/docs/guides/install-using-compiled-files.md).

## Importing styles, JavaScripts and assets

### Before you start
GOV.UK Frontend is a dependency of CCS Frontend.
Therefore, before you import the styles, JavaScripts and assets CCS Frontend, you need to import them from GOV.UK Frontend first.

You can do this by following the steps on the [Design System website](https://frontend.design-system.service.gov.uk/get-started/#get-started)

### Importing styles

You need to import the CCS Frontend styles into the main Sass file in your project.
You should place the below code before your own Sass rules (or Sass imports) if you want to override CCS Frontend with your own styles.

To import add the below to your Sass file:

  ```scss
  @import "node_modules/ts-ccs-frontend/ccs/all";
  ```

[More details on importing styles](https://github.com/tim-s-ccs/ts-ccs-frontend/blob/main/docs/guides/import-assets.md#css)

### Importing JavaScript

Some of the JavaScript included in CCS Frontend improves the usability and accessibility of the components.
You should make sure that you are importing and initialising Javascript in your application to ensure that all users can use it successfully.

You can include Javascript for all components either by copying the `all.js` from `node_modules//ts-ccs-frontend/ccs/` into your application or referencing the file directly:

```html
<script src="<path-to-ts-ccs-frontend-all-file>/all.js"></script>
```
Next you need to initialise the script by adding:

```html
<script>window.CCSFrontend.initAll()</script>
```

[More details on importing Javascript and advanced options](https://github.com/tim-s-ccs/ts-ccs-frontend/blob/main/docs/guides/import-assets.md#javascript)

### Importing assets

In order to import CCS Frontend images to your project, you should configure your application to reference or copy the relevant CCS Frontend assets.

[More details on importing assets](https://github.com/tim-s-ccs/ts-ccs-frontend/blob/main/docs/guides/import-assets.md#image-assets)

## Getting updates

To be notified when there’s a new release, you can:

- [watch the ts-ccs-frontend Github repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)

Find out how to [update with npm](https://github.com/tim-s-ccs/ts-ccs-frontend/blob/main/docs/guides/update-with-npm.md).

## Licence

Unless stated otherwise, the codebase is released under the MIT License. This
covers both the codebase and any sample code in the documentation. The
documentation is &copy; Crown copyright and available under the terms of the
Open Government 3.0 licence.

## Contributing

[To learn how to help us build CCS Frontend, see our contribution guidelines.](https://github.com/tim-s-ccs/ts-ccs-frontend/blob/main/CONTRIBUTING.md)

The ts-ccs-frontend repository is public and we welcome contributions from anyone.

However, please note this a small project compared to GOV.UK Frontend and is only concerned with assets relating to CCS.

We're unable to monitor activity on this repository outside of our office hours (10am to 4pm, UK time). To get a faster response at other times, you can [report abuse or spam to GitHub](https://docs.github.com/en/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).

## Credits :trophy:
This project was created from GOV.UK Frontend so a lot of the credit needs to go to the team at Government Digital Services.
Beyond adding the CCS stylings, nearly all the code comes from that original project.

So a big **Thank you** to the team at GDS because, without your hard work on GOV.UK Frontend, CCS Frontend would be a much lesser offering.
