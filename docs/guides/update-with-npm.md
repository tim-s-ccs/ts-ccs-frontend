# Update using Node.js package manager (npm)

You can update with Node.js package manager (npm) if you [originally installed CCS Frontend with npm](/docs/instillation/install-with-npm.md).

## Find out which version you’re using

To find out which version of CCS Frontend your project is using, you can run:

```
npm list ts-ccs-frontend
```

If you do not have command line access, you can see the version number in the `package.json` file in the root of your project directory. For example:

```json
"ts-ccs-frontend": "0.3.0"
```

## Update CCS Frontend using npm

To find out the latest version of CCS Frontend, check the [release notes](https://github.com/tim-s-ccs/ts-ccs-frontend/releases) in the CCS Frontend GitHub repository.

You may need to make code changes to keep CCS Frontend working in your project, if the major version number changes when you update. The major version number is the first digit in the version number.

Also check that the GOV.UK Frontend version in the latest release is compatible with the version already in your project.

If they are no longer compatible you should do one of the following:
- [Update the GOV.UK Frontend version](https://frontend.design-system.service.gov.uk/updating-with-npm/#update-using-node-js-package-manager-npm)
- Use the most recent version of CCS Frontend that is compatible with your version of GOV.UK Frontend

To update to the most recent version, run:

```
npm install ts-ccs-frontend@latest
```

If you want to install an earlier version, replace latest with the version that you want to update to. For example:
```
npm install ts-ccs-frontend@0.2.0
```
