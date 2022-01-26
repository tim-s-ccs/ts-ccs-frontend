# Components

You can find components in `src/ccs/components`.

## Name your components

Generally, folder and file names should be singular, for example ‘accordion’, ‘backlink’, ‘button’. Only use plural names when the component is usually used in groups, for example ‘breadcrumbs’, ‘checkboxes’, ‘radios’.

## Structure your component folder

When creating your component, you should create the following files in the component’s folder:

      - `README.md`
      - `_[component-name].scss`
      - `_index.scss`
      - `[component-name].yaml`
      - `macro.njk`
      - `template.njk`
      - `template.test.js`

If your component uses JavaScript, you must also create the following files in the component’s folder:

      - `_[component-name].js`
      - `_[component-name].test.js`

## Building your components

If you need help building a component, [contact the CCS Development team](https://github.com/tim-s-ccs/tim-ccs-components#contact-the-team) and we'll support you.

Learn more about styling components in our [CSS style guide](./css.md). Our [JavaScript style guide](./js.md) has more information on coding components.
