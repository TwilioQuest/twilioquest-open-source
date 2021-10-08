# Opening a Pull Request

## Pull Requests

We've pushed our changes to GitHub, so now lets ask the Open Pixel Art Project to pull them in!

A pull request is a way for other developers to ask the owner of a repository to include their suggested changes. We start by specifying the `base` or target of our Pull Request. Then, we pick the appropriate branch we've uploaded to `compare` against the base repository.

## The parts of our Pull Request

Github maintains [documentation about how to use their user interface to open a pull request from a forked repo](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork).

We want to make sure that we're opening a pull request against the `open-pixel-art` project's `master` branch. This means we make sure it's set as the base of our pull request.

Your forked repository should be set as the head repository. The branch you created, <%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>, should be set as the compare branch.

This URL should take you directly to the GitHub pull request creation screen with your `base` and `compare` branches already configured:

[https://github.com/twilio-labs/open-pixel-art/compare/master...<%= env.TQ_GITHUB_USERNAME.value %>:<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>](https://github.com/twilio-labs/open-pixel-art/compare/master...<%= env.TQ_GITHUB_USERNAME.value %>:<%= env.TQ_OPEN_PIXEL_ART_BRANCH.value %>)

## Create Pull Request

Once you've properly configured the Pull Request click the big `Create Pull Request` button. This will open an editor form where you can specify the Pull Request title and message.

That message starts with a preset message which you can adjust to talk about what your Pull Request contains. This message is created using something called [markdown which you can learn more about here](https://guides.github.com/features/mastering-markdown/).

Many repositories you contribute to in the future will have these customized presets. The preset for Open Pixel Art has a checklist of items for you to verify before opening.

We should have adhered to them back when we added our pixel, but double check them now! Checkboxes in GitHub markdown are created with the code `- [ ]`. To mark them as checked, put an `x` between the square brackets, so they look like this `- [ x ]`.

Once you've confirmed the checklist, click the `Create Pull Request` button!

## Pull Request Numbers

Every Pull Request opened on GitHub is assigned a number so that you can reference it later. You can find this number on the Pull Request screen next to the title of your Pull Request. You can also find the same number in the URL of your Pull Request.

```bash
https://github.com/twilio-labs/open-pixel-art/pull/<PULL_REQUEST_NUMBER>
```

If you've lost your Pull Request, you can find [all Pull Requests you've opened on GitHub](https://github.com/pulls).

## Click HACK!

Type the number of your Pull Request into the input on the right and then click `HACK` to complete this challenge!
