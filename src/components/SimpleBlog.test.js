import React from 'react';
import { render } from '@testing-library/react';
import SimpleBlog from './SimpleBlog';

test('renders content', () => {
  const simpleBlog = {
    title: 'Three Men',
    author: 'Lex Luthor',
    likes: 3
  };

  const component = render(
    <SimpleBlog blog={simpleBlog} />
  );

  expect(component.container).toHaveTextContent(
    'blog has 3 likes'
  );

  expect(component.container).toHaveTextContent(
    'Three Men Lex Luthor'
  );

});
