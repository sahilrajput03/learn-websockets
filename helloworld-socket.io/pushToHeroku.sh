#!/bin/bash
set -x
echo +MAKE COMMIT AND PUSH IF STAGING AREA HAS CHANGES
git add -A; git commit -m 'chore:push to heroku'; git push

echo
echo +PUSH TO HEROKU
git push -f heroku main
