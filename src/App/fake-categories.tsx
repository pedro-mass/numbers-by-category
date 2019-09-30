import { Category } from './store'

export const categories: Category[] = [
  new Category({
    name: 'income',
    total: 1000,
  }),
  new Category({
    name: 'monthly',
    total: 530,
    subcategories: [
      new Category({
        name: 'electricity',
        total: 100,
      }),
      new Category({
        name: 'internet',
        total: 70,
      }),
      new Category({
        name: 'overhead',
        total: 360,
        subcategories: [
          new Category({
            name: 'pedro',
            total: 100,
          }),
          new Category({
            name: 'crystal',
            total: 260,
          }),
        ],
      }),
    ],
  }),
]
