import { parser } from '../../src/main';

import articles from '../examples/articles.json';

describe('parser -> articles', () => {
  it('parses correctly', () => {
    expect(parser(articles)).toEqual([
      {
        id: '1',
        type: 'article',
        title: 'JSON API paints my bikeshed!',
        body: 'The shortest article. Ever.',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
        author: {
          id: '42',
          type: 'person',
          name: 'John',
          age: 80,
          gender: 'male'
        }
      }
    ]);
  });
});
