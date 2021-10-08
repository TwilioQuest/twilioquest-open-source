# Synchronize a Fork

## Git is a distributed system

One important aspect of git is it is distributed, and being distributed largely means there is no inherent “upstream” or “downstream” in the system.

Every repository contains a same git history and snapshots of your code. That being said, there are some naming conventions the open source community uses to help keep track of things. Just in keep in mind they're not inherently special!

## Local vs Remote

The first useful classification of repositories is `local` vs. `remote`. The version that you cloned onto your own computer is called a `local` repository. The original version on GitHub and your copy that you forked are called `remote` repositories.

Your changes will live in your local repository only until you push them back up to your fork. One complication of working on an open source project is that other developers are pushing up their own changes too!

## How do I get their changes?

While you've been working here, there's a chance that new changes got uploaded to GitHub you don't have locally! When we originally cloned our Open Pixel Art fork to this computer, we linked it as a remote repository.

You can see all of the linked repositories by using the `git remote` command. Adding the `-v` command gives more information about the remote, like the URL of the git repoistory its linked to.

```bash
git remote  -v
```

When you run `git remote`, you'll see a few lines that look like this:

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

However, other developers won't be making changes to your fork, they'll be changing the original. We need to add another remote repository. By convention, we'll be calling it `upstream`.

## How do I add the upstream remote?

First, you'll need the URL of the [original Open Pixel Art project's](https://github.com/twilio-labs/open-pixel-art) git repository. This will be very similar to the browser URL and end in `.git`. You'll get this URL the same way you did when you originally [cloned this repository from the GitHub documentation](https://help.github.com/en/articles/cloning-a-repository).

The URL should look like this, but will be different for any other repository you use in the future:

```bash
https://github.com/twilio-labs/open-pixel-art.git
```

Now we're going to use the `add` functionality of `git remote`. The command we want to run looks like this:

```bash
git remote add upstream https://github.com/twilio-labs/open-pixel-art.git
```

`git remote add` is the command we're running, `upstream` is the name of the remote we're creating, and `https://github.com/twilio-labs/open-pixel-art.git` comes from the Open Pixel Art project repository on GitHub.

Let's run `git remote -v` one more time to verify we created `upstream` correctly. It should show both `origin` and `upstream` now.

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
upstream	https://github.com/twilio-labs/open-pixel-art.git (fetch)
upstream	https://github.com/twilio-labs/open-pixel-art.git (push)
```

## Lets sync our fork with the remote

There's no functionality in GitHub to synchronize two remote repositories directly.

1. Instead we're going to pull the code on the `master` branch from the original Open Pixel Art repository down locally.
2. Then, merge it with the `master` branch on our local repository.
3. Finally, we'll push the updated `master` branch back up to our fork.

This will end with all three of our repositories in sync.

**1.** First we need to switch to our master branch:

```bash
git checkout master
```

Switching to our master branch will put our code back to the state it was when we originally cloned it. If you check the `_data/pixels.json` file you won't see your added pixel any more.

Don't worry! If you switch back to your branch, `<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>` your changes are still there safe and sound.

**2.** Now we use the `git pull` command to get the code from our recently configured `upstream` repository. We need to specify the `master` branch to pull from as well.

```bash
git pull upstream master
```

**3.** After you run the pull command, you should see a message detailing all the code differences between your local `master` and the `open-pixel-art` `master`. This might be a ton of files or you might get a message that you're already up to date!

If you did get changes, you need to push them back up to your fork. You can do that by running the git push command.

```bash
git push
```

This will push your local changes on the `master` branch to your fork's `master` branch. Now our fork's git history for master, our local master, and the open-pixel-art master branch are all in sync!

## Verify

You can see the list of the latest commits on each repository by visiting these URLS. Be sure to refresh to make sure the latest commit is the same on your fork and the original repository.

There's a chance that new commits have shown up since you did your last sync! This is especially common on this learning repository where Pull Requests are being automatically approved and merged!

[https://github.com/twilio-labs/open-pixel-art/commits/master](https://github.com/twilio-labs/open-pixel-art/commits/master)

[https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master](https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/commits/master)

Once you've synced up all three repositories' master branches, go ahead and hit `HACK` on the right!
