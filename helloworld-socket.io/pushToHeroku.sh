#!/bin/bash
set -x
shopt -s expand_aliases
git add -A; git commit -m 'chore:push to heroku'; git push
git push -f heroku main
