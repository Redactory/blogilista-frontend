import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test('clicking the button adds likes', async () => {
  const simpleBlog = {
    title: 'Three Men',
    author: 'Lex Luthor',
    likes: 3
  };

  const mockLikeHandler = jest.fn(likes => simpleBlog.likes = simpleBlog.likes + 1);

  const getByText = render(
    <SimpleBlog blog={simpleBlog} onClick={mockLikeHandler} />
  );

  const button = getByText.container.querySelector('.likeButton');
  fireEvent.click(button);
  fireEvent.click(button);

  expect(mockLikeHandler.mock.calls.length).toBe(2);
  expect(simpleBlog.likes).toBe(5);
});
