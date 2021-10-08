# Clones

## What is cloning?

One of the core things git lets you do is to make a local copy of someone else's server hosted code. The process of making this copy is called cloning. We're going to be making a local copy of the Open Pixel Art repository on GitHub using the `git clone` command.

## How do I clone?

The git command line tool provides a command called `clone` to enable you to do this. This command requires you to get the URL for the git repository you want to clone.

GitHub maintains [documentation about how to obtain the URL](https://help.github.com/en/articles/cloning-a-repository) for a GitHub hosted repository. This article walks you through the entire process of cloning, but we'll walk through it here too.

From GitHub you should find a URL that starts with `https://` and ends in `.git`. It should look something like this:

```
https://github.com/twilio-labs/open-pixel-project
```

Once you have this URL you're going to run the `git clone` command in your terminal with the URL after it like this:

```
git clone https://github.com/twilio-labs/open-pixel-project
```

Now the cloning process will begin!

## Change directory

Once the repository finishes cloning, you can now open these new files. They'll be an exact copy of the files in their current state on GitHub.

To validate the clone worked correctly, we're going to need the full file path of our newly cloned project. Type the following change directory command, `cd`, to enter your new directory.

```
cd open-pixel-art
```

If you run the list command, `ls` (or `dir` on Windows), you should now see a list of file names like `package.json` and `README.md`.

```
ls
```

## Present Working directory

Now that we have our newly cloned repository open in our terminal, we need to get its path. We can run the present working directory command, `pwd`, to figure this path out.

```
pwd
```

If you open this directory in your file explorer or text editor of choice you will also be able to view your clone of the Open Pixel Art repository.

## Validate!

Copy the file path to your cloned repository that you got from the `pwd` command. Paste that file path into the field on the right and press `HACK`!
