# Branching

Branches are like an alternate version of history. When you make a new branch, its code will be identical to your old code. However, once you make a change **only** the new branch will remember that change.

This means you have a safe place to test out code changes without worrying they'll break your code forever. You can have as many different branches as you want, but we're only going to create one new branch for this objective.

## How do I make a new branch?

Use the `git branch` command to create a new branch in a git repository. An example command is shown below. replace `<BRANCH_NAME>` with the name of the branch you want to create.

It's usually a good idea to name your branch something that tells you about the changes inside that branch. In this mission we're going to create a new pixel, so it might be a good idea to name your branch something like `new-pixel`.

```
git branch <BRANCH_NAME>
```

Now that you've made a new branch, let's print the list of all branches in this repository to make sure you've made it correctly.

```
git branch
```

This should have printed a list to your terminal that includes your new branch's name. You'll also notice another branch named `master`.

## So what is master?

Every git repository has to have at least one branch. By convention, this default branch is usually called `master`. Frequently, this is the most current, stable version of a project. New features are developed in branches like the one we just created and then merged back into master.

In the branch list, you'll notice master has an asterisk `*` next to it. That means you're currently making changes to the `master` branch. git uses the phrase "checked out" to describe which branch you have selected.

## How do I use the new branch?

Now that you know you're on the `master` branch and not your new branch, we should check out our new branch.

Git provides the `checkout` command to allow you to switch between branches. Use the following command with `<BRANCH_NAME>` replaced to switch to your new branch.

```
git checkout <BRANCH_NAME>
```

If you want to switch back to master (or any other branch) in the future, run `git checkout` with a different branch name.

```
git checkout master
```

## Check my work!

Now, you should have created your new branch and checked it out. We'll make out code change on this branch in the next objective! For now, type your branch name into the field on the right and click `HACK`!
