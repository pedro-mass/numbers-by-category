import { observable, action, computed } from 'mobx'

export class Category {
  id = Math.random()
  @observable name = ''
  @observable _total: number | undefined = undefined
  @observable _subcategories?: Category[] = []
  @observable.ref parent: Category | undefined = undefined

  constructor(input?: {
    name?: string
    total?: number | string | undefined
    subcategories?: Category[]
    parent?: Category
  }) {
    if (!input) return this

    const { name, total, subcategories, parent } = input
    if (name) this.name = name
    if (total) this.total = total
    if (subcategories) this.subcategories = subcategories || []
    if (parent) this.parent = parent
  }

  @action
  setName(val: string): void {
    this.name = val
  }

  @computed
  get total(): number | string {
    if (!this.hasSubcategories) {
      return this._total === undefined ? '' : this._total
    }

    return (this.subcategories || []).reduce((total, current) => {
      if (typeof current.total === 'string') {
        return total
      }

      return total + (current.total || 0)
    }, 0)
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
  get subcategories(): Category[] {
    return this._subcategories || []
  }

  set subcategories(categories: Category[]) {
    this._subcategories = categories
  }

  @computed
  get hasSubcategories(): boolean {
    return this.subcategories != null && this.subcategories.length > 0
  }

  @action
  addCategory(category: Category = new Category()): void {
    if (this.subcategories == null) this.subcategories = []
    if (!category.parent) category.parent = this

    this.subcategories.push(category)
  }

  @action
  removeCategory(category: Category): void {
    const index = this.subcategories.findIndex(c => c === category)
    if (index > -1) this.subcategories.splice(index, 1)
  }

  @action
  deleteSubcategories(): void {
    this.subcategories = []
  }

  @action
  resetSubcategoriesTotal(): void {
    this.subcategories.forEach(category => category.resetTotal())
  }

  @action
  split(): void {
    this.addCategory(
      new Category({
        total: this.total,
      })
    )
  }

  @computed
  get hasParent(): boolean {
    return this.parent != null
  }

  @action
  delete(): void {
    if (!this.parent) throw new Error('Cannot delete without parent')
    this.parent.removeCategory(this)
  }
}
