# Merge Time!

## What is a merge?

A merge is a git term for putting two branches back together again. When you forked the repository ealier and made a new branch, you created an alternate version of history with new code in it. The merge process stitches that history back into the main project so everyone can benefit from your code.

## Collaboration!

When you open a Pull Request against an open source project, you'll collaborate with the maintainers of that project to get your code merged.

For the Open Pixel Art Project, we don't need to talk to anyone! We have some tools that are automatically going to make sure your Pull Request is valid and merge it.

## Merge conflicts

Sometimes GitHub will tell you that you've hit a merge conflict and your code cannot be merged automatically. This means you need to help git figure out what the final code should look like.

This can be caused by many things, one of which is that two different developers have changed the same line of code at the same time.

[GitHub has information about resolving merge conflicts kept up to date](https://help.github.com/en/articles/about-merge-conflicts). Sometimes this can be resolved in their online editor and sometimes it requires a new commit be pushed.

## How do I know when my Pull Request has been merged?

When collaborating with a project's maintainers you'll need to give them time to respond to you. Once you've had your conversation and made your code changes, the owners will decide to finish the merge!

You'll get notifications from GitHub [based on your settings](https://help.github.com/en/articles/about-notifications) there that can tell you when your code is merged.

Since our tools will be automatically reviewing [your Pull Request](https://github.com/twilio-labs/open-pixel-art/pull/<%= env.TQ_OPEN_PIXEL_ART_PR_NUMBER.value %>), you should be able to come back to this Pull Request in a few minutes to a merged Pull Request!

## Hack!

Once [your Pull Request](https://github.com/twilio-labs/open-pixel-art/pull/<%= env.TQ_OPEN_PIXEL_ART_PR_NUMBER.value %>) has been successfully merged, click `HACK` so TwilioQuest can confirm it for you!
