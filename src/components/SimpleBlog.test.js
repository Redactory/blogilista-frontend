import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import SimpleBlog from './SimpleBlog';

afterEach(cleanup);

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
