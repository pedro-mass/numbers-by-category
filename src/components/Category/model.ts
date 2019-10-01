import { observable, action, computed, autorun } from 'mobx'

export class Category {
  id = Math.random()
  @observable name = ''
  @observable _total: number | undefined = undefined
  @observable _subcategories?: Category[] = []

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
    this.subcategories.push(category)
  }

  @action
  removeCategory(category: Category): void {
    const index = this.subcategories.findIndex(c => c === category)
    this.subcategories.splice(index, 1)
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
    this.addCategory()
  }
}
