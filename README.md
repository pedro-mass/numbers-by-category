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
  - [ ] update total
  - [ ] add split
  - [ ] add category
  - [ ] reset balances
  - [ ] delete categories
- [ ] styling
  - [ ] subCategories (indenting)
  - [ ] buttons
- [ ] deploy
