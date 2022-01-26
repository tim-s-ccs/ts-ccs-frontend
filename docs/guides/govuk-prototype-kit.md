# Using CCS Components with GOV.UK Prototype Kit

*The [GOV.UK Prototype Kit](https://github.com/alphagov/govuk-prototype-kit) provides a simple way to make interactive prototypes that look like pages on GOV.UK. These prototypes can be used to show ideas to people you work with, and to do user research.*

As CCS Components is setup in the same way as GOV.UK Frontend, it is simple to use with the GOV.UK Prototype Kit.

## Install CCS Components into the Prototype Kit

1.  You must first download the GOV.UK Prototype Kit which can be done by [following the instructions in the GOV.UK Prototype Kit site](https://govuk-prototype-kit.herokuapp.com/docs/install).

2.  Next you need to [install the CCS Components package using Node Package Manager (npm)](/docs/instillation/install-with-npm.md) which can be done by running the command:
    ```
    npm install ts-ccs-components --save
    ```

## Setting up the assets for use

Because CCS Components has a [GOV.UK Prototype Kit config file](../../package/govuk-prototype-kit.config.json) you do not need to import the assets as they will be mounted by the kit automatically.

The only thing you need to do is add the following line into the `application.scss` file:
```
$ccs-assets-path: '/extension-assets/ts-ccs-components/ccs/assets/';
```

This tells the kit where to find the images which are used in the headers and footers.

## Using the template and components
You can either use the CCS Components you need or import the template which will include both the header and footer component which, currently, are the only components in CCS Components.

To use the CCS Components template, you need to add the following lines to the `layout.html`, or equivalent page you have setup:
```
{%- set assetPath = '/extension-assets/ts-ccs-components/ccs/assets' -%}

{% extends "ccs/template.njk" %}
```

Otherwise, you can import a specific component just like any other.
For example, to import the header, you would add the line:
```
{% from "ccs/components/header/macro.njk"   import ccsHeader %}
```
