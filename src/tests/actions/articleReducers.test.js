import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import articleReducer from '../../reducers/articleReducer';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/articleActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const articles = {
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
};

const error = { error: 'Internal Server Error' };

// const error = [];
describe('getPosts actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates GET_ARTICLES after successfuly fetching articles', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: articles,
      });
    });

    const expectedActions = [
      {
        payload: articles,
        type: 'GET_ARTICLES',
      },
    ];

    const store = mockStore({ articles: {} });

    return store.dispatch(actions.getArticles()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates GET_ARTICLES after successfuly fetching articles', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 500,
        response: error,
      });
    });

    const expectedActions = [
      {
        payload: { response: { data: undefined, error: 'Internal Server Error' }, status: 500 },
        type: 'GET_ARTICLES_ERROR',
      },
    ];

    const store = mockStore({ articles: {} });

    return store.dispatch(actions.getArticles()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


describe('Article Reducer', () => {
  describe('INITIAL_STATE', () => {
    test('is correct', () => {
      const action = {
        type: 'wrong_action',
        payload: '',
      };
      const initialState = {
        authenticated: '',
        errorMessage: '',
        successMessage: '',
        user: {},
        articles: [],
        error: [],
      };
      expect(articleReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('GET_ARTICLES', () => {
    test('returns the correct state', () => {
      const action = { type: types.GET_ARTICLES, payload: [{ articles: 'new Articles' }] };
      const expectedState = {
        authenticated: '',
        errorMessage: '',
        successMessage: '',
        user: {},
        articles: [{ articles: 'new Articles' }],
        error: [],
      };
      expect(articleReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('GET_ARTICLES_ERROR', () => {
    test('returns the correct state', () => {
      const action = { type: types.GET_ARTICLES_ERROR, payload: 'Error getting articles' };
      const expectedState = {
        authenticated: '',
        errorMessage: '',
        successMessage: '',
        user: {},
        articles: [],
        error: 'Error getting articles',
      };
      expect(articleReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
