import '../../vendor/polyfills/Event'
import '../../vendor/polyfills/Element/prototype/classList'
import '../../vendor/polyfills/Function/prototype/bind'

function CCSHeader ($module) {
  this.$module = $module
  this.$menuButton = $module && $module.querySelector('.ccs-js-header-toggle')
  this.$menu = this.$menuButton && $module.querySelector(
    '#' + this.$menuButton.getAttribute('aria-controls')
  )
}

/**
 * Initialise header
 *
 * Check for the presence of the header, menu and menu button – if any are
 * missing then there's nothing to do so return early.
 */
CCSHeader.prototype.init = function () {
  if (!this.$module || !this.$menuButton || !this.$menu) {
    return
  }

  this.syncState(this.$menu.classList.contains('ccs-header__navigation-lists--open'))
  this.$menuButton.addEventListener('click', this.handleMenuButtonClick.bind(this))
}

/**
 * Sync menu state
 *
 * Sync the menu button class and the accessible state of the menu and the menu
 * button with the visible state of the menu
 *
 * @param {boolean} isVisible Whether the menu is currently visible
 */
CCSHeader.prototype.syncState = function (isVisible) {
  this.$menuButton.classList.toggle('ccs-header__menu-button--open', isVisible)
  this.$menuButton.setAttribute('aria-expanded', isVisible)
}

/**
 * Handle menu button click
 *
 * When the menu button is clicked, change the visibility of the menu and then
 * sync the accessibility state and menu button state
 */
CCSHeader.prototype.handleMenuButtonClick = function () {
  var isVisible = this.$menu.classList.toggle('ccs-header__navigation-lists--open')
  this.syncState(isVisible)
}

export default CCSHeader
