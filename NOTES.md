# Backend

## routes/cohort.js

- move this to helpers/dates.js::getxxxx(date) `new Day({ date: startDay.date.setTime(startDay.date.getTime() + 1 * 86400000) });`
- not waiting for `firstDayAm.save();` to finish - should collect all those into an array of promises and then `Promise.all(promises)` before going to `Curriculum.findOne`
- maybe `Curriculum.findOne` should be the first thing, because it sbould have a 404 protection
- no authorization?
- CHAIN ALL THE promises, e.g.: return missing in `return cohort.save()`
- get /:id - no 404 protection (if !cohort)
- put /:id/add
  - no id validation
  - no req.body validation, weird if else without {}
  - this should probably be a POST /:id (means create something inside)
- put /:id/remove (weird code is exactly like the one before, I assume copy paste and work in progress)
  - no id validation
  - no req.body validation
  - weird if else without {}
   - this should probably be a DELETE /:id/:something (means delete it duh)

WARNING: very hard to tell what these routes should be and should look like as they are not documented in the README


## routes/curriculum.js

- no authorization?
- no 404 protection if (!results), singular result by the way ;-)

## routes/unit.js

- return promises and Promise.all()s
- again PUT /transfer? I can guess but README not updated so hard to tell


# Frontend

## _login.scss

- this is when you wanna write your scss down in the `log-in-page.component.scss` file

## footer

- hover is displacing the fotter, make it have `border: Ypx solid transparent by default` ;-)
- logout hover not working for some reason, add a `display: inline-block;`

## log-in-page.ts

- `this.error = err.error.code || 'unexpected'`  - make sure somthing shows in the template if server is not reacheable

## app-arrow-back

- `cursor: pointer`

## app-cohort-page

- modules-menu p `cursor: pointer`

## curriculums-page.component.html

- move routerLink to the li (only the text is clickable now) and make sure it has `cursor: pointer`

