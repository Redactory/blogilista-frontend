import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from '../App';

describe('Integration testing', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(
      <App />
    );
    component.rerender(<App />);

    await waitForElement(
      () => component.getByText('login')
    );

    // expectations here
    expect(component.container).toHaveTextContent('Login into application');
    expect(component.container).toHaveTextContent('Username');
    expect(component.container).toHaveTextContent('password');
    expect(component.container.querySelector('.blogDataShow')).toBe(null);
  });
});