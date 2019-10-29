describe('Model: Category', () => {
  it.todo('constructor(): accepts name, total, list of subcategories')
  it.todo('setName(): updates name')
  it.todo('total: returns total field IF no subcategories')
  it.todo('total: returns total of subcategories')
  it.todo('set total: if has subcategories: throw error')
  it.todo('set total: if NO subcategories: set value')
  it.todo('resetTotal(): sets total to 0')
  it.todo('subcategories: returns sublist')
  it.todo('set subcategories: sets sublist')
  it.todo('hasCategories: returns true when list is not empty and not null')
  it.todo('addSubcategory(): adds to existing list of subcategories')
  it.todo(
    'addSubcategory(): if no list already existing: creates new list and adds category to it'
  )
  it.todo('removeSubcategory(): does nothing if no list')
  it.todo('removeSubcategory(): removes from list')
  it.todo('deleteSubcategories(): resets subcategories prop')
  it.todo('resetSubcategoriesTotal(): resets subcategories totals')
  it.todo('split(): adds a subcategory using the current total')
  it.todo('delete(): removes itself from the list its a part of')
})

describe('Model: CategoryList', () => {
  it.todo('should allow instantiation with list of Categories')
  it.todo('count: provides number of categories')
  it.todo('total: gives the summation of all the categories total')
  it.todo('isEmpty: true when no categories')
  it.todo('isEmpty: false when categories are found')
  it.todo('add(): adds category to list')
  it.todo('delete(): removes category from list')
  it.todo('reset(): empties the list')
  it.todo('resetTotals(): zeros out all categories total')
})
