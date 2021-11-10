# About

Basecamp is a repository for the source and production code generating my graduate portfolio site. The source code is held and tracked in the `main` branch, while the production code is tracked in the `dev` branch. After verfying the site builds are correct, `release` branches are created off the `dev` branch creating backup builds, these align to tags in the `main` branch.

I've taken a modular approach to building my portfolio, integrating multiple web technologies, including (1) [Shorthand](https://shorthand.com), (2) [Jekyll](https://jekyllrb.com), (3) [MkDocs](https://www.mkdocs.org), (4) [Adobe Portfolio](https://portfolio.adobe.com), (5) [Moodle](https://moodle.org), and others. Both jekyll and mkdocs are static site generators, and are run from the code in the `main` branch. Shorthand, and others, use drag-and-drop editors which are then exported and added to the `dev` branch for production.

---
# Repository setup

Git orphan branches & working trees
Source: https://gist.github.com/vaidd4/fbb69e126da0d6f20e1d76dc5be13f92

## Creating an ophan branch
This command will create a branch with no parent (no commit history) on a repo.

[`git checkout --orphan <new-branch>`](https://git-scm.com/docs/git-checkout/#Documentation/git-checkout.txt---orphanltnewbranchgt)

## Managing working trees
Manage folders linked to others branches of your repo. Do not confuse them with `git submodules` which are links to **different** repositories.

You can create a folder in wich a branch of your repository is checked out.

[`git worktree <command>`](https://git-scm.com/docs/git-worktree)

## Usages
Exemple for *Github Pages* with a specific branch providing the static files:

- Create a new orphan branch: `git checkout --orphan dev`
- Clean all (untracked) files: `git reset --hard` or `git rm -rf .`
- Create first commit: `git commit --allow-empty -m "Initializing dev branch"`
- Push the new branch on your repo: `git push origin dev`
- Get back to your main branch: `git checkout main`
- Create the worktree in a `_site` folder: `git worktree add -B dev _site origin/dev`

Now, all the files put in the `_site` folder can simply be committed and pushed to the `dev` branch. Example: `cd public && git add --all && git commit -m "Published to gh-pages" && git push origin gh-pages`. The rest of your repo will stay in sync with your main branch.

To be sure to not mess with your main branch you can add the folder containing the worktree in your `.gitignore` file.
