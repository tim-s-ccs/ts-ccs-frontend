# Update using Node.js package manager (npm)

You can update with Node.js package manager (npm) if you [originally installed CCS Components with npm](../instillation/install-with-npm.md).

## Find out which version you’re using

To find out which version of CCS Components your project is using, you can run:

```
npm list ts-ccs-components
```

If you do not have command line access, you can see the version number in the `package.json` file in the root of your project directory. For example:

```
"ts-ccs-components": "0.3.0"
```

## Update CCS Components using npm

To find out the latest version of CCS Components, check the [release notes](https://github.com/tim-s-ccs/tim-ccs-components/releases) in the CCS Components GitHub repository.

You may need to make code changes to keep CCS Components working in your project, if the major version number changes when you update. The major version number is the first digit in the version number.

Also check that the GOV.UK Frontend version in the latest release is compatible with the version already in your project.

If they are no longer compatible you should do one of the following:
- [Update the GOV.UK Frontend version](https://frontend.design-system.service.gov.uk/updating-with-npm/#update-using-node-js-package-manager-npm)
- Use the most recent version of CCS Components that is compatible with your version of GOV.UK Frontend

To update to the most recent version, run:

```
npm install ts-ccs-components@latest
```

If you want to install an earlier version, replace latest with the version that you want to update to. For example:
```
npm install ts-ccs-components@0.2.0
```
