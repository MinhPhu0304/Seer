import React from 'react';
import { render } from '@testing-library/react';

import { ArticleList } from './index';

const mockArticleListExample = [{
  author:"Aniche, M F and Testing, MA Gerosa Software and Verification and {and} and {2010}",
  journal:"ieeexplore.ieee.org",
  method:["TDD","XP"],
  methodlogy:["Agile","XP"],
  benefit:["Performance","Improve code quality"],
  participants:[],
  "_id":"5ec5bed7e4c97454eaf79c66",
  citeKey:"Aniche:er",
  title:"Most common mistakes in test-driven development practice: Results from an online survey with developers"
}]
test('renders article list', () => {
  const { getByText } = render(<ArticleList articles={mockArticleListExample}/>);
  const searchElement = getByText(mockArticleListExample[0].title);
  expect(searchElement).toBeInTheDocument();
});
