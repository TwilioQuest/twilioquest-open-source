<% const isWindows = context.systemInfo.os === 'win32'; %>

# Installing Git

## What is git?

Git is a type of tool called version control software. Version control software allows you to collaborate with other developers by maintaining a list of all the changes your codebase has undergone.

Each of the changes is stored in git as a snapshot of your code at a certain point in time. Git calls these snapshots "commits". The full list of commits is shared on your local computer and a remote server like GitHub. Now, anyone with permission can access the list of code changes using `git`.

We'll make our first local commit once we get to the center of the maze!

## Follow git's instructions to install

Git is a command line tool, which means you'll need to be familiar with how to open something like Terminal on MacOS or PowerShell on Windows.

There are other tools, like GitHub Desktop, that wrap command line git in a graphical user interface. This can be helpful and often powerful enough for most use cases!

This mission will require, and walk through the usage of command line `git`. The git website maintains a list of [instructions for how to install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on various different operating systems. Follow these instructions!

If the command line version doesn't click with you, give GitHub Desktop a try after this mission!

## Hack away!

Follow the [official git installation instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Once you've done that, you can run the following command in your terminal to ensure `git` is installed correctly.

```
git --version
```

If git is installed correctly, you should see text that looks like this:

```
git version 2.22.0
```

Next, we need to find the **full path** to where the `git` command was installed on your computer. Running the following command in `<%= isWindows ? "PowerShell" : "Terminal" %>` should give you a file path pointing to your `git` installation.

<% if(isWindows) { %>

```bash
Get-Command node.exe | Select-Object -ExpandProperty Definition
```

<% } else { %>

```bash
which node
```

<% } %>

Once you have the **full path** to the `git` installation, paste it into the text field on the right and click `HACK`.
