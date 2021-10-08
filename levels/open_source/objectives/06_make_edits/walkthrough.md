# Pixel Time

Now that we have our project copied locally, and a development branch created, we are ready to make our contribution. But before that can happen, we need to set up the project and get it running! This way we can check out our changes on our own computer before pushing them back up to GitHub for everyone else to see.

## Node.js and NPM

The Open Pixel Art project is build on top of Node.js and will use `npm` as well. This objective assumes you understand how `npm` works and have it installed.

If you're unfamiliar with these tools, follow this [installation guide to get Node.js installed](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/). After you have Node.js installed, you should be able to blindly copy and paste the `npm` commands in this objective.

## Install the project dependencies

Now that you have Node.js and `npm` installed, in the main folder of your Open Pixel Art project run the following command:

```
npm install
```

This will download all of the code dependencies this project needs to run onto your computer. You should now see status messages as the dependenices install.

This process can take some time!

## Boot it up

Now that our project is installed and configured, lets start it up locally. Run the following command in the root directory of your repository:

```
npm start
```

This will start a local web server on your computer that is running your own personal version of the Open Pixel Project. In the terminal, after the server has started you should see a URL printed that will usually be:

```url
http://localhost:8080
```

Open this page in your web browser to see your own local Open Pixel Art project page live!

## Pixels.json

Now that we can see our pixels locally, let's learn how to change them! Open the Open Pixel Art project in a text editor of your choice! Now, open up the file located at `_data/pixels.json`.

Inside of this file you'll find a JSON array of pixel obects that look like this:

```diff
{
  "data": [
    { "y": 1, "x": 1, "color": "#F22F46", "username": "<UNCLAIMED>" },
    { "y": 1, "x": 2, "color": "#F22F46", "username": "<UNCLAIMED>" },
    { "y": 1, "x": 3, "color": "#F22F46", "username": "<UNCLAIMED>" },
    ...
  ]
}
```

## Pixel object properties

- `x`: The x-coordinate of your pixel. 0 is the left-most column of pixels
- `y`: The y-coordinate of your pixel. 0 is the bottom-most row of pixels
- `color`: The color your pixel should have as a hex code (e.g. #ff0000 for red)
- `username`: The GitHub username you'll use to create the pull request

Create a new row in the `_data/pixels.json` file that looks something like this:

```diff
{
  "data": [
+    { "y": 1, "x": 2, "color": "#FFFF00", "username": "cedric" },
    { "y": 1, "x": 3, "color": "#F22F46", "username": "<UNCLAIMED>" },
    ...
  ]
}
```

You should now see your new pixel on your locally hosted URL!

## Keep it sorted!

Make sure you pixel addition to the `_data/pixels.json` is added in sorted order. It should start with `y` and then `x`. We've also added an npm task that you can run to do this sorting for you!

```bash
npm run sort:open-pixels
```

After you've added your new pixel, run this in your terminal to re-sort the pixels file!

## Make sure everything still works!

We're going to run one final `npm` command before we finish making our change. This command is called `npm test`. Most open source projects have a suite of automatic tests. This helps you ensure that you've not done anything to break the project with your changes!

Open a new Terminal tab or window and run the following command:

```
npm test
```

You should not see any tests have failed, they should all say `passed`. This means everything is still working!

## How do I confirm my change?

You've finally added a pixel to the canvas and confirmed you didn't break anything!

Now we need to let `git` know that we're happy with our changes. We do this my creating something called a `commit`. A commit is one snapshot of your code base captured in time.

## How do I commit?

The first step is to add the files you want to be commited. You only need to add the files you want to change, so for this commit we'll only add our updated `_data/pixels.json` file.

```
git add _data/pixels.json
```

To verify you've added the correct files, you can run the following command:

```
git status
```

This command will show you which files are about to be commited in green. The `_data/pixels.json` file should be the only one listed!

Now we need to use the `git commit` command to finalize our changes. We also add a `-m` flag to this command so that we can add a message that goes along with out commit.

The `feat(pixels):` part before our message is added so that we the Open Pixel Art project can progamatically analyze commit messages. You can learn more about that by checking out the [Conventional Commits Standard](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

```
git commit -m "feat(pixels): add my new pixel"
```

## Hack away!

This objective had a lot of steps! But now you have a commited new pixel and are ready to share it with the world. Press `HACK` to confirm your pixel has been changed and commited correctly.
