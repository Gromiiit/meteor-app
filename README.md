# Meteor-app

## Prerequisites
Node v22.14.0

Meteor v3.3

## Run project locally
meteor npm install

meteor run --settings server/settings.json

## My Approach to the Exercise
1) Didn't use any of accessible LLMs.
2) For each of a additional requirement I approached them as if it were being introduced incrementally, reflecting a development process.

## Explanation of implementation
Due to time constraints, some trade-offs were made.

1) Not using linter, some of imports might be unnecesary and some trailing whitespaces may appear.
2) Some part of a main app could be separated to own components. However given the size of the project, it didn’t seem that important to me.
3) Not using typescript, same as previous point due to size of a project didn't seem that important to check types and user input check.
4) Lastly download button is repeating itself, should be added as separete component or part of a hook.
