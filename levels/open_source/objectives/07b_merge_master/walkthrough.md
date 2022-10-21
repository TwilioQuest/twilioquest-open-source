# Becoming the Merge Master

## What is a merge?

When you pulled the commits from the original Open Pixel Art repository into your local repository everything went smoothly. This is because you didn't change any files on that branch.

However, you've made changes on your pixel branch `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>` when you committed a new pixel. Chances are, when you pulled the commits from the Open Pixel Art project someone else also added a new pixel. In order to reconcile these changes that effect the same code we need to go through a merge process.

Sometimes, git can automatically figure out what the merged code should look like. If I edit the first line of a file and you edit the 200th line, git is able to tell that both of those lines should make it into the final file. However, if I edit the 3rd line and you edit the 5th line things get more complicated.

When changes like that happen that where git cannot determine the result automatically, we need to help it out by manually deciding what code makes it into the final file. We call this situation a merge conflict.

## Conflict!

Merge conflicts can be challenging to work through. If you ask developers what they're least favorite part of working with git and version control is you will frequently hear "resolving merge conflicts" as the answer. We don't say this to scare you, but to let you know that event the most veteran developers still have problems with this process! It can be genuinely hard!

Fortunately, since you're only changing a single line of the file `_data/pixels.json` your merge conflict resolution should be more straightforward.

Thoroughly covering this topic could take an entire extra mission! GitHub has some deeper [information about what merge conflicts are and their causes](https://help.github.com/en/articles/about-merge-conflicts). They also have [a detailed guide on how to resolve conflicts via the command line](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line).

## How do I merge it?

First we need to return to our branch with the pixel on it. This will get us our pixel addition back in the `_data/pixels.json` file!

```bash
git checkout <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Now, since we no longer have the latest code from the master, we'll kick off the merge process to merge branch `master` into our current branch, `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`.

```bash
git merge master
```

When you ran the merge command you'll likely have seen a lot of output telling you about how the merge went. Git will tell you if it tried to auto-merge any files and whether there were conflicts while trying to merge.

If you did not see any `CONFLICT` messages then you're in luck! Git doesn't need any help resolving your merge!

We can get some more information about the current state of our merge by running the `git status` command. This will tell us a lot of information.

It will let us know we need to manually resolve a merge `You have unmerged paths.` and will give us a command to abort our merge `git merge --abort` in case we've made a mistake.

Also, at the bottom of this command result with be a list of the unmerged paths we need to resolve conflicts in. If you've just added a pixel, you'll see something like:

```bash
Unmerged paths:
  (use "git add <file>..." to mark resolution)

	both modified:   _data/pixels.json
```

[Its time to resolve the conflicts!](https://help.github.com/en/articles/resolving-a-merge-conflict-using-the-command-line)

Once you've resolved your merge conflicts, you need to commit that resolution so git knows your final decision! We're leaving the `-m` off this time so we can use git's auto generated merge message.

## Commit it

```
git commit
```

If you run this command and see a message like this `error: Committing is not possible because you have unmerged files.` then your merge isn't resolved yet!

If you didn't see the above message, that means your in the text editor git is having you write your comit message in!

The default tool that git will open to edit commit message in is vim. This is a command line only text editor that can be confusing if you've never used it before. To save this message inside of vim we need to do a couple steps.

1. first hit the `ESC` key to enter command mode
2. type `:` to start a command
3. type `w` to instruct vim to write your changes to the file
4. type `q` to instruct vim to quit
5. hit `ENTER` to run your vim command

If everything worked correctly you should be back on the terminal and outside of vim again!

## Verify

Let's double check everything is fine by running `git status` one last time. We should now see a message like `nothing to commit, working tree clean` indicating we're all up to date.

Additionally, lets run `git log` to find our merge commit. Your most recent commit should have the message you entered in vim for your commit. If you left the auto generated message it will look something like this:

```bash
Merge branch 'master' into <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Once you've merged master into your branch, `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>`, go ahead and hit `HACK` on the right!
