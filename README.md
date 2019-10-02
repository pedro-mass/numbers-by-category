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
- [x] wire up all the actions
  - [x] update name
  - [x] update total
  - [x] add split
  - [x] change name onEnterPressed/onBlur
  - [x] allow number to be nothing
  - [x] delete categories
  - [x] add category
  - [x] add support for @decorators
  - [x] reset balances
  - [x] delete category
  - ~~[ ] button: re-add total category if all categories have been deleted~~
    - not needed. Deletion is only allowed when current category is part of another's sub-category
    - the other strategy would be to switch the store to be a `Array<Category>`, instead of starting at just `Category`
- [ ] improvements
  - [ ] shift concept of the "Total" category, instead have the store be a list of categories?
  - [ ] make total field editable like name (doubleClick and submit onEnter or onBlur)
  - [ ] use Math library for financial calculations
    - b/c in javascript: `1.1 + 0.3 = 1.4000000000000001`
  - [ ] pass the store around with context?
    - might not be needed b/c it seems that every level requires an action or prop off of category
  - [ ] verify that all `observer`s are actually needed
    - this was sprinkled liberally to get things working and the docs said there was no downside (https://mobx.js.org/refguide/observer-component.html -> Characteristics of observer components -> "you cannot under-subscribe or over-subscribe")
    - [ ] use localstorage
    - [ ] switch to mobx-state-tree
      - https://www.youtube.com/watch?v=rwqwwn_46kA
      - https://github.com/mobxjs/mobx-state-tree/blob/master/docs/getting-started.md
      - https://egghead.io/courses/manage-application-state-with-mobx-state-tree
      - https://github.com/mobxjs/mobx-state-tree
    - [ ] read up on best tips for defining a data store: https://mobx.js.org/best/store.html
    - [ ] look into mobx-formatters to make console logging mobx observables readable: https://github.com/motion/mobx-formatters
    - [ ] https://github.com/zalmoxisus/mobx-remotedev
- [ ] styling
  - [ ] subCategories (indenting)
  - [ ] buttons
- [ ] deploy
