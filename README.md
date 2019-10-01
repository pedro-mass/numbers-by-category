# Numbers by Category

## A category has:

- name
- total
- subCategories

If a category has subcategories, it's total is computed by summing the total of the subCategories

## Workflow:

- create a category
- set a name
- decide if it will have subCategories
  - no: enter the total as normal
  - yes: create more categories nested within this one

## things left

- [x] introduce mobX
- [ ] wire up all the actions
  - [x] update name
  - [x] update total
  - [x] add split
  - [x] change name onEnterPressed/onBlur
  - [x] allow number to be nothing
  - [ ] delete categories
  - [ ] delete category
  - [ ] reset balances
  - [ ] add category
  - [ ] make total field editable like name (doubleClick and submit onEnter or onBlur)
- [ ] styling
  - [ ] subCategories (indenting)
  - [ ] buttons
- [ ] deploy
