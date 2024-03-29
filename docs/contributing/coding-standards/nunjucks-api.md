
# Component API definition and use
The source for this document can be [found on GOV.UK Frontend](https://github.com/alphagov/govuk-frontend/blob/main/docs/contributing/coding-standards/nunjucks-api.md) but the same guidance applies to CCS Frontend.

We have chosen as Nunjucks as the templating language for CCS Frontend components. We expose those templates as reusable chunks of code: macros. Developers import macros into their application, call them as per documentation and provide data to its options.

To provide a level of consistency for developers we have standardised option names, their expected input, use and placement. There are exceptions, and  if so they are documented accordingly.

The options (arguments) accepted by the component macro are specified in a `[component-name].yaml` file as `params`. Each option should have the following attributes: `name`, `type`, `required`, `description`.

An option can additionally contain `params` that denotes nested items in the option (see [footer component](/src/ccs/components/footer/footer.yaml#L6)) and `isComponent: true` where the option is another component.
<!-- No examples yet -->
<!-- (see [checkboxes component](/src/ccs/components/checkboxes/checkboxes.yaml#L11)). -->

Component macro options are shipped as  `macro-options.json` in `package`.

## Specifying content
When providing *content* to a macro, say for a label or a button, we accept two options:

 - `text` accepts a plain string and is the default way of passing content
 - `html` accepts html markup. In the template we will not escape html so it will be rendered. In a scenario where both text and html are set, html option will take precedence over text.

Example:

`{{ ccsHeader({ "navigationPrimary": { "text": "Navigation text" }) }}`

`{{ ccsHeader({ "navigationPrimary": { "html": "Navigation <span class='bold'>text</span>" }) }}`

Example of implementing logic in a component template:

`{{ params.html | safe if params.html else params.text }}`

Example shows that if `html` and `text` options are present, then `html` takes precedence over `text` and we are not escaping it.

## Naming options
We should use **camelCase** for naming options.

If a component depends on another component, we group the options for the dependent component inside an object, where the name of the object is the name of the component using **camelCase** convention. In case of ambiguity we prefix the component name.

*The examples are from GOV.UK Frontend as we do not have a component from CCS Frontend that uses this convention yet.*

Example of a component depending on another component
```
{{ govukLabel({
  "text": "Label text",
  "errorMessage": {
    "text": "Error message"
  }
}) }}
```

Example of a component depending on two other components
```
{{ govukInput({
  "name": "example-input",
  "label": {
    "text": "Label text"
  },
  "errorMessage": {
    "text": "Error message"
  }
}) }}
```

## Mimic HTML attribute names
When there is a need to specify html attributes, such as *checked, disabled, id, name*, etc, and they map directly, we use the same option name. We use boolean value to check and render the attribute.

*The examples are from GOV.UK Frontend as we do not have a component from CCS Frontend that uses this convention yet.*

Example:

`{{ govukButton({"disabled": true}) }}`

`{{ govukCheckbox({"checked": true}) }}`


## Defining additional HTML attributes
When there is a need to add additional attributes to the component, we accept an ***"attributes"*** object with key : value pairs for each attribute.

You cannot use this to set attributes that are already defined, such as class – use the classes option instead.

*The examples are from GOV.UK Frontend as we do not have a component from CCS Frontend that uses this convention yet.*

Example:
```
{{ govukButton({
  "attributes" : {
    "data-target" : "contact-by-text",
    "aria-labelledby": "error-summary-heading-example-1",
    "tabindex": "-1"
  }
}) }}
```

## Specifying multiple items
When a component accepts a *single array of items* for an output, such as checkboxes or radios, we accept an ***"items"*** array of objects.  Table component is an exception is it can contain multiple array for rows, head, footer where there is need to for more specific names.

Example:
```
{{ ccsFooter({
   "navigation": {
    "items": [
      {
        "name": "Page 1"
        "href": "#page-1",
      },
      {
        "name": "Page 2"
        "href": "#page-2",
      }
    ]
   }
}) }}
```
## Use of classes to specify variants
When a component has multiple visual presentations, such default button vs start button, we make use of classes option to differentiate between them.

*The examples are from GOV.UK Frontend as we do not have a component from CCS Frontend that uses this convention yet.*

Default button example:
```
{{ govukButton({
  "text" : "Continue"
}) }}
```
Start button example:
```
{{ govukButton({
  "text" : "Start",
  "classes" : "govuk-button--start"
}) }}
```
