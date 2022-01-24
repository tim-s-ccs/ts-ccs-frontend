/* eslint-env jest */

const { renderSass } = require('../../../lib/jest-helpers')

const configPaths = require('../../../config/paths.json')

const sassConfig = {
  includePaths: [configPaths.src, 'node_modules/'],
  outputStyle: 'compressed'
}

describe('CCS Colours', () => {
  it('should define websafe colours that meet contrast requirements', async () => {
    const sass = `
      @import "settings/colours-palette";
      @import "settings/colours-applied";
      @import "helpers/colour";

      @import "sass-color-helpers/stylesheets/color-helpers";

      $minimum-contrast: 4.5;

      $colour: ccs-colour("white");
      $background-colour: $ccs-brand-colour;

      $contrast: ch-color-contrast($background-colour, $colour);

      @if ($contrast < $minimum-contrast) {
        @error "Contrast ratio for #{$organisation} too low."
        + " #{$colour} on #{$background-colour} has a contrast of: #{$contrast}."
        + " Must be higher than #{$minimum-contrast} for WCAG AA support.";
      }`

    await renderSass({ data: sass, ...sassConfig })
  })
})
