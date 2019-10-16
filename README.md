# Numbers by Category

Goal of the project is to evaluate different state management libraries/techniques

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

- [x] prototype
- [ ] compare state management strategies
  - [x] mobX
  - [ ] mobx-state-tree
  - [ ] redux-starter-kit
  - [ ] context
  - [ ] component state + prop-drilling
- [ ] styling
- [ ] deploy
