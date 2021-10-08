# Git Logging

## What is a commit hash?

Git works by tracking a series of snapshots of your code as a list of commits. This commit list is called a repository's `git history`. In order to find this snapshots later, they're each assigned a long, random, unique string called a `commit hash`.

## Git history

You can view your repository's git history by running the `git log` command in your terminal. This will open a list of every single commit on your repository in the terminal. You can `scroll up and down this list with your arrow keys` starting with the most recent and working all the way back to the very first commit. You can `exit this view by hitting the Q` key.

## Fine tuning the log

As you can imagine, scrolling through every single commit in a git history would be overwhelming and not very effective. To help with that, `git log` comes with [a lot of options](https://git-scm.com/docs/git-log) for fine tuning your search results!

## Just my commits!

To find your pixel commit, we're going to look at using the `--author` flag!

One of the options `git log` provides will allow you to filter out commits only by a provided author. Run this command to see only your git commits!

```
git log --author="<%= env.TQ_LOCAL_GIT_USER_NAME.value %>"
```

## What's my hash?

After you ran `git log` with the author flag, you will see a lot of information like the author, date, and message of the commit. At the top of your commit you will see a long string like `b256b5e67556d331ca6876d137db4f61a1eb031a`. That is your commit hash!

## Verify

Copy that commit hash string for your pixel commit into the field on the right and hit `HACK`!
