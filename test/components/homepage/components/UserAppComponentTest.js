/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import UserAppComponent from 'components/homepage/components/UserAppComponent.js';

describe('UserAppComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(UserAppComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('userapp-component');
  });
});
