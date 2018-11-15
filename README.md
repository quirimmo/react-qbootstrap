# react-qbootstrap

The bootstrap project generated automatically by the following node module:

[react-qbootstrap-typescript-generator](https://www.npmjs.com/package/react-qbootstrap-typescript-generator)

This project already includes and sets up the following main tools:

- react
- react-router
- typescript
- redux
- redux-thunk
- rxjs
- axios
- reactstrap
- moment
- bootstrap
- sass
- jest
- enzyme
- tslint
- babel
- webpack

## Scripts

The package.json already includes the following scripts ready to be used:

- **start**: Run the application through webpack-dev-server opening the browser and listening at http://localhost:8080/ , with live reload enabled
- **build**: Publish the bundle through webpack at the subfolder _dist_ of your project
- **test**: Executes the unit tests through jest watching for changes with live reload
- **test-single-run**: Executes the unit tests through jest and exits at the end of the tests execution
- **test-coverage**: Executes the script _test-single-run_ creating the current coverage of the tests at the subfolder _coverage_ of your project
- **test-update-snapshots**: Updates the snapshots through jest

## Features

The following features are working in the project, and ready to be used if you want to:

- **redux**: Redux is already set up in the project, with redux-thunk added too. You already have a fake store with a fake reducer defined in the application, which you can delete when you will add your real store, reducers and actions.
- **api interfacing**: There is a service called `http-proxy.service.ts` which already implements a custom class for interfacing with an api, through *axios* for performing the http request, providing few custom methods for *get, post, put, delete*
- **routing**: 

## Structure

## Instructions

1. package.json url, homepage, repository, name, author, description, bugs
2. index.html title
3. add git or your svn. If using git, the .gitignore is ready to be used with the current structure. If you are not using git, simply delete the .gitignore file


