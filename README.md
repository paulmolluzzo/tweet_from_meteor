# Meteor Twitter API Integration Demo

This is showcases ways to perform common Twitter actions using the `twitter-api` Atmosphere package for the Meteor framework.

For this repo to work, you'll need to install the following Meteor or Atmosphere pacakages:

* standard-app-packages
* streams
* semantic-ui
* momentjs
* underscore
* accounts-ui
* accounts-twitter

To install and run this repo:

```
git clone git@github.com:paulmolluzzo/meteor_twitter_actions.git
cd meteor_twitter_actions
mrt
```

A note about the `twitter-api` package: I'm not using this package available on Atmosphere as it is currently outdated (and non-functional). Instead I'm using a personal fork. To make sure you're running the same version, your `smart.json` file should include:

```
"twitter-api": {
        "git": "https://github.com/paulmolluzzo/meteor-twitter-api.git"
    }
```

Your `smart.lock` should also refer to that GitHub repo.

If you had to manually change your `smart.json` file, run `mrt update twitter-api` afterwards to ensure you have the latest version.