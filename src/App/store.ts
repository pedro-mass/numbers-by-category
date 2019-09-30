import { observable, decorate, action, computed } from 'mobx'

export class Category {
  name = ''
  _total = 0
  subcategories?: Category[] = []

  constructor(input?: {
    name?: string
    total?: number
    subcategories?: Category[]
  }) {
    if (!input) return this

    const { name, total, subcategories } = input
    if (name) this.name = name
    if (total) this.total = total
    if (subcategories) this.subcategories = subcategories || []
  }

  setName(val: string): void {
    this.name = val
  }

  get total(): number {
    if (!this.hasSubcategories) {
      return this._total
    }

    return (this.subcategories || []).reduce(
      (total, current) => total + current.total,
      0
    )
  }

  set total(value: number) {
    if (this.hasSubcategories) {
      // return
      throw new Error(
        "Can't set value directly. Update or delete subcategories."
      )
    }

    this._total = value
  }

  resetTotal(): void {
    try {
      this.total = 0
    } catch (error) {
      console.error(error)
    }
  }

  get hasSubcategories(): boolean {
    return this.subcategories != null && this.subcategories.length > 0
  }

  addCategory(category: Category): void {
    if (this.subcategories == null) this.subcategories = []
    this.subcategories.push(category)
  }

  removeCategory(category: Category): void {
    if (this.subcategories == null) return
    const index = this.subcategories.findIndex(c => c === category)
    this.subcategories.splice(index, 1)
  }

  deleteSubcategories(): void {
    this.subcategories = []
  }
}

decorate(Category, {
  name: observable,
  _total: observable,
  subcategories: observable,
  setName: action,
  total: computed,
  resetTotal: action,
  hasSubcategories: computed,
  addCategory: action,
  removeCategory: action,
  deleteSubcategories: action,
})
