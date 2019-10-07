import { observable, action, computed } from 'mobx'

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
