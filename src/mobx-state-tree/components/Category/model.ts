import { observable, action, computed } from 'mobx'
import { types } from 'mobx-state-tree'

export const Category2 = types
  .model({
    id: types.optional(types.identifierNumber, Math.random()),
    name: '',
    _total: 0,
    // _subcategories: types.late(() => types.array(CategoryList2)),
    // parentList: types.late(() => types.array(CategoryList2)),
  })
  .views(self => ({
    // get total(): number | string {
    //   if (self.subcategories == null || self.subcategories.isEmpty) {
    //     return self._total === undefined ? '' : self._total
    //   }
    //   return self.subcategories.total
    // },
    // get subcategories(): CategoryList | undefined {
    //   return this._subcategories
    // },
    // get hasSubcategories(): boolean {
    //   return self.subcategories != null && !self.subcategories.isEmpty
    // },
    // get hasParentList(): boolean {
    //   return this.parentList != null
    // },
  }))
  .actions(self => ({
    setName(val: string): void {
      self.name = val
    },
    // resetTotal(): void {
    //   try {
    //     self.total = 0
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    // setTotal(value: number | string): void {
    //   if (self.hasSubcategories) {
    //     throw new Error(
    //       "Can't set value directly. Update or delete subcategories."
    //     )
    //   }

    //   if (typeof value === 'string') {
    //     self._total = undefined
    //     return
    //   }

    //   self._total = value
    // },
    // setSubcategories(subcategories: CategoryList | undefined): void {
    //   self._subcategories = subcategories
    // },
    // addSubcategory(category: Category = new Category()): void {
    //   if (self.subcategories == null) self.subcategories = new CategoryList()
    //   if (!category.parentList) category.parentList = self._subcategories

    //   self.subcategories.add(category)
    // },
    // removeSubcategory(category: Category): void {
    //   self.subcategories && self.subcategories.delete(category)
    // },
    // deleteSubcategories(): void {
    //   self.subcategories = undefined
    // },
    // resetSubcategoriesTotal(): void {
    //   self.subcategories && self.subcategories.resetTotals()
    // },
    // split(): void {
    //   self.addSubcategory(
    //     new Category({
    //       total: self.total,
    //     })
    //   )
    // },
    // delete(): void {
    //   if (self.parentList == null)
    //     throw new Error('Cannot delete without parent list')

    //   self.parentList.delete(self)
    // },
  }))

export const CategoryList2 = types
  .model({
    list: types.late(() => types.array(Category2)),
  })
  .views(self => ({
    get isEmpty(): boolean {
      return self.list == null || self.list.length === 0
    },
    // get count(): number {
    //   return self.isEmpty ? 0 : self.list.length
    // },
  }))
  .actions(self => ({
    // add(category: Category = new Category()): void {
    //   if (self.list == null) self.list = []
    //   if (category.parentList == null) category.parentList = self
    //   self.list.push(category)
    // },
    delete(category: Category): void {
      const index = self.list.findIndex(c => c === category)
      if (index < 0)
        throw new Error(`Category named ${category.name} not found`)
      self.list.splice(index, 1)
    },
    // reset(): void {
    //   self.list = []
    // },
    // resetTotals(): void {
    //   self.list.forEach(category => category.resetTotal())
    // },
  }))

export class CategoryList {
  @observable list: Category[] = []

  constructor(categories: Category[] = []) {
    this.list = categories
  }

  @computed
  get count(): number {
    return this.isEmpty ? 0 : this.list.length
  }

  @computed
  get total(): number {
    return this.list.reduce((total, current) => {
      if (typeof current.total === 'string') {
        return total
      }

      return total + (current.total || 0)
    }, 0)
  }

  @computed
  get isEmpty(): boolean {
    return this.list == null || this.list.length === 0
  }

  @action
  add(category: Category = new Category()): void {
    if (this.list == null) this.list = []
    if (category.parentList == null) category.parentList = this
    this.list.push(category)
  }

  @action
  delete(category: Category): void {
    const index = this.list.findIndex(c => c === category)
    if (index < 0) throw new Error(`Category named ${category.name} not found`)
    this.list.splice(index, 1)
  }

  @action
  reset(): void {
    this.list = []
  }

  @action
  resetTotals(): void {
    this.list.forEach(category => category.resetTotal())
  }
}

export class Category {
  id = Math.random()
  @observable name = ''
  @observable _total: number | undefined = 0
  @observable.ref _subcategories: CategoryList | undefined
  @observable.ref parentList: CategoryList | undefined

  constructor(input?: {
    name?: string
    total?: number | string | undefined
    subcategories?: CategoryList
    parentList?: CategoryList
  }) {
    if (!input) return this

    const { name, total, subcategories, parentList } = input
    if (name) this.name = name
    if (total) this.total = total
    if (subcategories) this.subcategories = subcategories
    if (parentList) this.parentList = parentList
  }

  @action
  setName(val: string): void {
    this.name = val
  }

  @computed
  get total(): number | string {
    if (this.subcategories == null || this.subcategories.isEmpty) {
      return this._total === undefined ? '' : this._total
    }

    return this.subcategories.total
  }

  set total(value: number | string) {
    if (this.hasSubcategories) {
      throw new Error(
        "Can't set value directly. Update or delete subcategories."
      )
    }

    if (typeof value === 'string') {
      this._total = undefined
      return
    }

    this._total = value
  }

  @action
  resetTotal(): void {
    try {
      this.total = 0
    } catch (error) {
      console.error(error)
    }
  }

  @computed
  get subcategories(): CategoryList | undefined {
    return this._subcategories
  }

  set subcategories(subcategories: CategoryList | undefined) {
    this._subcategories = subcategories
  }

  @computed
  get hasSubcategories(): boolean {
    return this.subcategories != null && !this.subcategories.isEmpty
  }

  @action
  addSubcategory(category: Category = new Category()): void {
    if (this.subcategories == null) this.subcategories = new CategoryList()
    if (!category.parentList) category.parentList = this._subcategories

    this.subcategories.add(category)
  }

  @action
  removeSubcategory(category: Category): void {
    this.subcategories && this.subcategories.delete(category)
  }

  @action
  deleteSubcategories(): void {
    this.subcategories = undefined
  }

  @action
  resetSubcategoriesTotal(): void {
    this.subcategories && this.subcategories.resetTotals()
  }

  @action
  split(): void {
    this.addSubcategory(
      new Category({
        total: this.total,
      })
    )
  }

  @computed
  get hasParentList(): boolean {
    return this.parentList != null
  }

  @action
  delete(): void {
    if (this.parentList == null)
      throw new Error('Cannot delete without parent list')

    this.parentList.delete(this)
  }
}
