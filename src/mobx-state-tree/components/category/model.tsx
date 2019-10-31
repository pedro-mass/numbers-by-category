import { types } from 'mobx-state-tree'

export const Category = types
  .model({
    name: '',
    total: 0,
  })
  .actions(self => ({
    setName(newName: string): void {
      self.name = newName
    },
    setTotal(newTotal: number): void {
      self.total = newTotal
    },
    resetTotal(): void {
      self.total = 0
    },
  }))

export const CategoryList = types.model({
  list: types.array(Category),
})
