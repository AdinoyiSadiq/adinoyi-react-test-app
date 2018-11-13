import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';
import ArticleCard, { Card } from '../../containers/ArticleCard';
import Root from '../../root';

const articles = {
  authenticated: '',
  errorMessage: '',
  user: { },
  articles: {
    message: 'Articles gotten successfully!',
    articles: [
      {
        favorited: false,
        favoritesCount: 0,
        id: 7,
        slug: 'team-pacey',
        title: 'Team Pacey',
        description: 'Stressss',
        body:
            'Pacey and Dawson started out as friends. But here we are. Joey was on her own o. Well not on her own sha but l;et\'s end',
        image: 'image',
        tagList: null,
        read_time: '1 minute',
        averageRating: null,
        authorId: 2,
        createdAt: '2018-11-07T16:51:35.336Z',
        updatedAt: '2018-11-07T16:51:35.336Z',
        bookmarked: [],
        user: {
          firstname: 'Jake',
          lastname: 'Peralta',
          profile: {
            image: 'profileImage',
          },
        },
        reactions: [{
          reaction: 1,
        }],
        favorite: [],
        star_ratings: [],
      },
      {
        favorited: false,
        favoritesCount: 0,
        id: 4,
        slug: 'team-pacey-3',
        title: 'Team Pacey',
        description: 'Stressss',
        body:
          'Pacey and Dawson snd started out as friends. But here we are. Joey was on her own o. Well not on her own sha but l;et\'s end',
        image: null,
        tagList: null,
        read_time: '1 minute',
        averageRating: null,
        authorId: 1,
        createdAt: '2018-11-07T16:51:35.336Z',
        updatedAt: '2018-11-07T16:51:35.336Z',
        bookmarked: [],
        user: {
          firstname: 'Jake',
          lastname: 'Peralta',
          profile: {
            image: null,
          },
        },
        reactions: [],
        favorite: [],
        star_ratings: [],
      },
    ],
    pages: 2,
  },
  error: [],
};

let wrapper;
let wrapped;
let wrapperCard;
let mockGetArticles;
beforeEach(() => {
  wrapper = mount(
    <Root>
      <MemoryRouter initialEntries={[{ key: 'testkey' }]}>
        <ArticleCard />
      </MemoryRouter>
    </Root>,
  );

  mockGetArticles = jest.fn();
  wrapped = shallow(
    <Card
      getArticles={mockGetArticles}
      articles={articles.articles.articles}
      error={articles.error}
    />,
  );

  wrapperCard = mount(
    <Card
      getArticles={mockGetArticles}
      articles={articles.articles.articles}
      error={articles.error}
    />,
  );
});

afterEach(() => wrapper.unmount());

describe('Article Card UI', () => {
  describe('render features', () => {
    test('component should render as expected', () => {
      const tree = toJson(wrapper);
      expect(tree).toMatchSnapshot();
    });
  });
});


describe('Article Card Functionality', () => {
  it('should sort articles', () => {
    const inst = wrapped.instance();
    expect(inst).toBeInstanceOf(Card);
    expect(inst).not.toBeNull();
  });

  it('should click more articles button', () => {
    wrapperCard.find('.hero-moreArticles').simulate('click');
    expect(mockGetArticles).toBeCalled();
    wrapperCard.find('.hero-moreArticles').simulate('click');
    expect(mockGetArticles).toBeCalled();
  });
});
