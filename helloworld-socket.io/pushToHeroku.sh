#!/bin/bash
set -x
git add -A; git commit -m 'chore:push to heroku'; git push
git push -f heroku main
