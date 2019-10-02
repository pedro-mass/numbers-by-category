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

## todo

- [ ] wire up all the actions
- [ ] styling
  - [ ] subCategories (indenting)
  - [ ] buttons
- [ ] deploy

> the [mobx branch](https://github.com/pedro-mass/numbers-by-category/tree/mobx#numbers-by-category) is much further ahead, and has improvements that I'll bring back into `master` once it's completed
