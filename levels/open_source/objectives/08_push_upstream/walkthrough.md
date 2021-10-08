# Pushing Upstream

## Local vs Remote

Git repositories come in two flavors depending on where they're located. The version that you cloned onto your own computer is called a `local` repository. The original version on GitHub and your copy that you forked are called `remote` repositories.

Right now, your new pixel change only lives on your computer in a local repository. In order to share it with the world, you need to send it upstream to a remote repository.

We'll be doing this with the `git push` command. We need to add some arguments and flags to this command before we run it though.

## Upstream

The process of sending local changes to a remote repostiory is called pushing upstream in git. "Upstream" is a term that refers to the remote branch of the same name as the one you're working on locally.

When you made your branch earlier with the `git branch` command, you only created it locally. We need to use the `--set-upstream` flag when we push in order to create your branch on the remote repository as well.

Our command now looks like:

```bash
git push --set-upstream
```

## Where is upstream? Origin!

The `--set-upstream` flag is the first part of our puzzle! However, upstream doesn't know where to find our remote repository yet. Run the following command in your terminal:

```bash
git remote  -v
```

You'll see a few lines that look like this:

```bash
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (fetch)
origin	https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art.git (push)
```

You might recognize these URLs as the same ones you cloned to create your original local copy of the your Open Pixel Art fork. That's because `git` has linked our remote fork for us.

To the left of those URLs you'll see the word `origin`. This is the default name that git assigns to your first linked remote repository when you do an intial git clone.

To specify that we want to push upstream to our `origin` remote repository, we need to add it as a parameter after the `--set-upstream` flag.

Our command now looks like this:

```bash
git push --set-upstream origin
```

## What do we call it?

The last thing git needs to know about how we're pushing our local branch to our remote repository is the branch name. We want to call our new remote branch the same thing as our local branch name.

Pass the name of your local branch you've been worknig on as the final paramter to our `git push` command.

Your final command should look like this:

```bash
git push --set-upstream origin <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>
```

Go ahead and run it! You'll be prompted to enter your GitHub username and password and then everything should be uploaded to GitHub.

## Verify

Check it out on your GitHub repository to make sure your branch is there now.

The url for your new branch should look something like the following:

[https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/<%= env.TQ_GITHUB_USERNAME.value %>/open-pixel-art/tree/<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

You can also navigate to this view using GitHub's UI, there's no need to memorize URLs.

## Hack!

Once you've pushed your local branch to your remote fork, go ahead and press `HACK`!
