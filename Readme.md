Study git demo 13-02-2021
mkdir

- git init
- git add
- git commit -m "Content"
- git log
- git show
- git diff
  //////
  - gitk : UI git
    ////
- git checkout -- <file> : Undo change in file
- git reset HEAD <file> : Undo when error add
- git reset --soft <commit> :Undo when error commit. Comeback before commit
- git reset --mixed <commit> : Under when error commit. Comeback before add
- git reset --hard <commit> : Erase commit => deleted file. Careful!
  /////
  git checkout -b <branch> : Create new branch and access.
  git checkout <branch> : Access file to work
  git merge : Merge branch access master
  git branch -D <branch> : Deleted branch
