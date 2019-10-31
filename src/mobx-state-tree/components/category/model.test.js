/* eslint-disable @typescript-eslint/explicit-function-return-type */
import _ from 'lodash'
import { getSnapshot } from 'mobx-state-tree'
import * as Models from './model'

describe('Model: Category', () => {
  function create(input) {
    return Models.Category.create(input)
  }

  it('constructor(): accepts name, total, list of subcategories', () => {
    const input = { name: 'test', total: 100 }
    const category = create(input)
    expect(category).toMatchObject(input)
  })
  it('setName(): updates name', () => {
    const category = create()
    const name = 'newName'
    category.setName(name)
    expect(category.name).toEqual(name)
  })
  it('total: returns total field IF no subcategories', () => {
    const total = 67
    const category = create({ total })
    expect(category.total).toEqual(total)
  })
  it.todo('total: returns total of subcategories')
  it('set total: if has subcategories: throw error', () => {
    const total = 3423
    const category = create()
    expect(category.total).not.toEqual(total)
    category.setTotal(total)
    expect(category.total).toEqual(total)
  })
  it.todo('set total: if NO subcategories: set value')
  it('resetTotal(): sets total to 0', () => {
    const category = create({ total: 123421 })
    expect(category.total).not.toEqual(0)
    category.resetTotal()
    expect(category.total).toEqual(0)
  })
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
  const createList = input => Models.CategoryList.create(input)

  function createCategory(fields) {
    fields = _.assign({}, fields, {
      name: 'random-' + _.random(1000),
      total: _.random(100),
    })

    return Models.Category.create(fields)
  }

  const createCategories = (amount = 1, fields) =>
    _.times(amount, () => createCategory(fields))

  it.todo('should allow instantiation with list of Categories', () => {
    const categories = createCategories(5)
    // console.log({ categories })
    const CategoryList = createList({
      list: categories,
    })
    console.log(CategoryList.list.map(getSnapshot))
  })
  it.todo('count: provides number of categories')
  it.todo('total: gives the summation of all the categories total')
  it.todo('isEmpty: true when no categories')
  it.todo('isEmpty: false when categories are found')
  it.todo('add(): adds category to list')
  it.todo('delete(): removes category from list')
  it.todo('reset(): empties the list')
  it.todo('resetTotals(): zeros out all categories total')
})
