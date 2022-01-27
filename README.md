CCS Frontend ·
[![Build Status](https://github.com/tim-s-ccs/ts-ccs-frontend/workflows/Tests/badge.svg)](https://github.com/tim-s-ccs/ts-ccs-frontend/actions?query=workflow%3ATests+branch%3Amain)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
=====================

CCS Frontend contains the code you need to start building a user interface
for CCS platforms and services.

This is based off of [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) which was created and is maintained by a team at the Government Digital Service.

Because of this, CCS Frontend can be used in an identical way to GOV.UK Frontend.

See live examples of CCS Frontend in the [CCS Frontend website](https://ts-ccs-frontend.herokuapp.com/).

As part of future work, there will be a place where you can view live examples and guidance on when to use CCS Frontend as part of your service.

## STATUS: BUILD AND DEVELOPMENT
At the moment this project is still in the build and development phase.

As it is still not decided if CCS wants to take on this project, it is being hosted on the personal accounts of `tim-s-ccs`.

That is why the package is called [`ts-ccs-frontend` on NPM](https://www.npmjs.com/package/ts-ccs-frontend).

This will all be updated, with real package name confirmed, before the first major release.

## Contact the team

CCS Frontend is maintained by a team at the Crown Commercial Service.
<!-- TODO: add mail to link -->
If you want to know more about CCS Frontend, please email [Tim South](mailto:timothy.south@crowncommercial.gov.uk)
<!-- the [Development team](mailto:#). -->

## Quick start

Please note that this package is designed to be used in the same way as GOV.UK Frontend so if these documents are not sufficient, please try the [documentation for GOV.UK Frontend](https://frontend.design-system.service.gov.uk/).

There are 2 ways to start using CCS Frontend in your app.

Once installed, you will be able to use the code from the examples in the [CCS Frontend website](https://ts-ccs-frontend.herokuapp.com/) in your service.

### 1. Install with npm (recommended)

We recommend [installing CCS Frontend using node package manager (npm)](docs/instillation/install-with-npm.md).

### 2. Install using compiled files

You can also install CCS Frontend by [copying our CSS, JavaScript and asset files into your project](docs/instillation/install-using-compiled-files.md).

## Browser and assistive technology support

CCS Frontend supports:

- [recommended browsers](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in)
- [recommended assistive technologies](https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#which-assistive-technologies-to-test-with)
- Internet Explorer 8, 9 and 10, although components may not look perfect
- your users overriding colours in Windows, Firefox and Chrome

## Accessibility

The CCS Development team works hard to ensure that CCS Frontend is accessible.

Using CCS Frontend along with GOV.UK Frontend will help your service meet [level AA of WCAG 2.1](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag). But you must still [check that your service meets accessibility requirements](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction), especially if you extend or modify components.

You should also use:

- [the JavaScript from CCS Frontend](docs/guides/import-assets.md#javascript)
- [a separate stylesheet](https://frontend.design-system.service.gov.uk/supporting-ie8/) if you support Internet Explorer 8

<!-- You can also read the [accessibility statement for the CCS Design System](https://design-system.service.gov.uk/accessibility/). -->
An accessibility statement for the CCS Design System will be added in the future.

### Accessibility warnings

If you get a warning from a linter or accessibility checker, check the list of [issues you should not need to fix](https://github.com/alphagov/govuk-frontend/issues/1280#issuecomment-509588851) from GOV.UK Frontend.

## Getting updates

To be notified when there’s a new release, you can:

- [watch the ts-ccs-frontend Github repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)

Find out how to [update with npm](docs/guides/update-with-npm.md).

### Security

CCS is an advocate of responsible vulnerability disclosure. If you’ve found a vulnerability, we would like to know so we can fix it.

If you have discovered a security vulnerability in this code, we appreciate your help in disclosing it to us in a responsible manner.

Please follow the [CCS vulnerability reporting steps](https://www.crowncommercial.gov.uk/about-ccs/vulnerability-disclosure-policy/), giving details of any issue you find. Appropriate credit will be given to those reporting confirmed issues.

## Licence

Unless stated otherwise, the codebase is released under the MIT License. This
covers both the codebase and any sample code in the documentation. The
documentation is &copy; Crown copyright and available under the terms of the
Open Government 3.0 licence.

## Contributing

[To learn how to help us build CCS Frontend, see our contribution guidelines.](CONTRIBUTING.md)

The ts-ccs-frontend repository is public and we welcome contributions from anyone.

However, please note this a small project compared to GOV.UK Frontend and is only concerned with assets relating to CCS.

<!-- TODO: Add CCS Contributing rules -->
<!-- 
Contributors to alphagov repositories are expected to follow the [Contributor Covenant Code of Conduct](https://github.com/alphagov/.github/blob/main/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct). Contributors working within government are also expected to follow the [Civil Service code](https://www.gov.uk/government/publications/civil-service-code/the-civil-service-code). -->

We're unable to monitor activity on this repository outside of our office hours (10am to 4pm, UK time). To get a faster response at other times, you can [report abuse or spam to GitHub](https://docs.github.com/en/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam).

## Credits :trophy:
This project was created from GOV.UK Frontend so a lot of the credit needs to go to the team at Government Digital Services.
Beyond adding the CCS stylings, nearly all the code comes from that original project.

So a big **Thank you** to the team at GDS because, without your hard work on GOV.UK Frontend, CCS Frontend would be a much lesser offering.
