import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Blog from './Blog';

test('check that only limited view shows', () => {
  const blog = {
    title: 'Three Men',
    author: 'Lex Luthor',
    likes: 3,
    url: 'www.hs.fi',
    user: {
      name: 'Teemu Matvejeff'
    },
    id: '5da5c567258a100540ba6da2'
  };

  const adderName = 'Teemu Matvejeff';
  const setBlogs = ''; // FUNKTIO!!
  const blogs = []; // TILA, TÄSSÄ TYHJÄ
  const user = {
    name: 'Teemu Matvejeff'
  };

  const component = render(
    <Blog
      blog={blog}
      name={adderName}
      setBlogs={setBlogs}
      blogs={blogs}
      key={blog.id}
      loggedUser={user}
    />
  );

  //const element = component.getByText('3 likes')  

  expect(component.container).toHaveTextContent(
    'Three Men Lex Luthor'
  );

  expect(component.container.querySelector('.blogURL')).toBeNull();
  expect(component.container.querySelector('.blogLikes')).toBeNull();
  expect(component.container.querySelector('.blogAdder')).toBeNull();
  expect(component.container.querySelector('.blogRemove')).toBeNull();

});

test('check that expanded view shows', () => {
  const blog = {
    title: 'Three Men',
    author: 'Lex Luthor',
    likes: 3,
    url: 'www.hs.fi',
    user: {
      name: 'Teemu Matvejeff'
    },
    id: '5da5c567258a100540ba6da2'
  };

  const adderName = 'Teemu Matvejeff';
  const setBlogs = ''; // FUNKTIO!!
  const blogs = []; // TILA, TÄSSÄ TYHJÄ
  const user = {
    name: 'Teemu Matvejeff'
  };

  const component = render(
    <Blog
      blog={blog}
      name={adderName}
      setBlogs={setBlogs}
      blogs={blogs}
      key={blog.id}
      loggedUser={user}
    />
  );

  const button = component.container.querySelector('.blogDataShow');
  fireEvent.click(button);

  expect(component.container).toHaveTextContent(
    'Three Men Lex Luthor'
  );

  expect(component.container).toHaveTextContent(
    'www.hs.fi'
  );

  expect(component.container).toHaveTextContent(
    '3 likes'
  );

  expect(component.container).toHaveTextContent(
    'added by Teemu Matvejeff'
  );

  expect(component.container).toHaveTextContent(
    'remove'
  );
});
