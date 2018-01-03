# The Museum of The Jewish People Databases Search App

This is the search interface over The Museum of The Jewish People databases.

It currently can be accessed at http://staging-dbs.bh.org.il/searchapp/

This app started as a fork of [The Budget Key Search App](https://github.com/OpenBudget/budgetkey-app-search)


## Quick Start (Set up a dev server)

* Clone && cd into directory
* `yarn install`
* `yarn run dist-serve`

You should make sure you use the latest node v8.

If you have [nvm](https://github.com/creationix/nvm/blob/master/README.md#installation) installed, 
you can just run `nvm install` and you will have the correct version.


## Running using docker

```
docker build -t mojpdbs-app-search .
docker run -it -p 8000:8000 mojpdbs-app-search
```

http://localhost:8000


## Documentation

Please refer to the [The Budget Key Search App](https://github.com/OpenBudget/budgetkey-app-search) documentation for more details.
