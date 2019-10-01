import { observable, decorate, action, computed, autorun } from 'mobx'

export class Category {
  id = Math.random()
  name = ''
  _total: number | undefined = undefined
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

    autorun(
      () => {
        console.log(JSON.stringify(this, null, 2))
      },
      {
        delay: 250,
      }
    )
  }

  setName(val: string): void {
    this.name = val
  }

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

  addCategory(category: Category = new Category()): void {
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

  split(): void {
    this.addCategory()
  }
}

decorate(Category, {
  _total: observable,
  addCategory: action,
  deleteSubcategories: action,
  hasSubcategories: computed,
  name: observable,
  removeCategory: action,
  resetTotal: action,
  setName: action,
  split: action,
  subcategories: observable,
  total: computed,
})
