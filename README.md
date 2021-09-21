# civil-registration-prototype

Prototype for civil registration journeys.


# Setup

## Clone repository

```
git clone https://github.com/HMPO/civil-registration-prototype.git
```

## Install npm dependencies

`cd` to the directory where the project is, then run:

```
npm install
```


# Development

## Run locally

```
npm start
```

This will build sources, and serve pages.

Visit <a href="http://localhost:3000" target="_blank">localhost:3000</a> in your browser.

## View the prototype online

Visit <a href="https://civil-registration-prototypes.herokuapp.com/" target="_blank">https://civil-registration-prototypes.herokuapp.com/</a> in your browser.

It may take a few seconds to load.

## Deploying to Heroku

Get yourself a Heroku account and added to the prototype app.

Add the Heroku remote (that you will push to, to deploy):

```
heroku git:remote -a civil-registration-prototypes
```

To deploy the main branch:

```
git push heroku main
```

## Archiving the prototype

Once your prototype is ready for testing, it’s time to create an archived version.

Below is a step-by-step process on how to do this.

### 1. Create a tag

```
git tag YYMMDD-feature-name
```

Alternatively, you can add a message with your tag, similar to commits. This is known as an annotated tag:

```
git tag -a YYMMDD-feature-name -m "First iteration of feature-name for lab 1"
```

### 2. Push tags to origin

```
git push --tags origin main
```

You should be able to see that git has pushed your tag to the remote:

```
To https://github.com/HMPO/civil-registration-prototype.git
* [new tag]           YYMMDD-feature-name -> YYMMDD-feature-name
```

### 3. Checkout the archived tag:

Tags can be checked out similar to branches.

If you’re not already at the specific commit you want to archive:

```
git checkout YYMMDD-feature-name
```

### 4. Create a new branch for archiving

Create a new branch from that specific commit or tag:

```
git checkout -b archive/feature-branch-name-v1
```

### 5. Remove irrelevant stuff for archiving

Make relevant changes, such as removing links from the app’s start page, the navigation, etc.

### 6. Commit your changes locally

```
git commit -m “Update start page to archive feature-name lab session 1”
```

### 7. Push your changes to remote

```
git push origin +archive/feature-branch-name-v1
```

### 8. Create a new Heroku app

Each prototype archive will be hosted on a separate Heroku app.

```
heroku apps:create civil-registration-YYMMDD-feature-name -r heroku-feature-name-v1 --region eu
```

`civil-registration-YYMMDD-feature-name` becomes the subdomain in the URL of the Heroku app.

`heroku-feature-name-v1` is the remote added to your repository.

### 9. Deploy the prototype archive to the new Heroku app

To deploy from another branch, where `archive/feature-branch-name-v1` is the branch you want to push:

```
git push heroku-feature-name-v1 archive/feature-branch-name-v1:main
```
