import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

// add a func
export const findArticleById = id => (store)=> {
  const articles = store.articleState.entries;
  return articles.find((el)=>el.id === id)
}
const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default articleReducer;
