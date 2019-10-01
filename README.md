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
  - [x] delete categories
  - [x] add category
  - [x] add support for @decorators
  - [x] reset balances
  - [ ] delete category
  - [ ] button: re-add total category if all categories have been deleted
  - [ ] make total field editable like name (doubleClick and submit onEnter or onBlur)
  - [ ] pass the store around with context?
    - might not be needed b/c it seems that every level requires an action or prop off of category
  - [ ] verify that all `observer`s are actually needed
    - this was sprinkled liberally to get things working and the docs said there was no downside (https://mobx.js.org/refguide/observer-component.html -> Characteristics of observer components -> "you cannot under-subscribe or over-subscribe")
- [ ] styling
  - [ ] subCategories (indenting)
  - [ ] buttons
- [ ] deploy
