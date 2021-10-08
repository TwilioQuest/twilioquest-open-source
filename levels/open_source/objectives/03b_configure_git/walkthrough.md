# Configuring Git

## How do I configure?

Git's global configuration file can be edited using the command `git config` in your terminal. There are a lot of different options that let you customize git to your particular workflow.

We're only going to need to set two options to use `git` with GitHub in this mission. Those two settings are our global user name and email. The following commands will set these for us. We're using the `--global` flag so that we use this same name and email for every `git` project.

## Show me the commands

Before running this command, replace `John Doe` with your name. Make sure to leave the quotes!

```
git config --global user.name "John Doe"
```

Before running this command, replace `johndoe@example.com` with your registered GitHub email address.

```
git config --global user.email johndoe@example.com
```

## Verify!

To ensure you've configured everything correctly, run the following command:

```
git config --list
```

You should see your `user.name` and `user.email` set with the correct values!

## Hack it!

Once You've verified git is configured correctly, press `HACK`!
