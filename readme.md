# What ss node.js

* Javascript Runtime (not a language or framework)
* Build on the V8 Javascript engine
* Written in C++
* Esentially allows us to run Javascript on server side

# What you should know first

* Javascript fundamentals (Object, Arrays, Conditions, etc)

It may help to learn these
* HTTP (status code, headers, etc)
* JSON
* Arrow functions
* Promises
* MVC Pattern

# Why use node

* Node is very fast and highly scalable
* Node is event driven and non-blocking I/O model
* Popular in the industry
* Same language on the front and back end

# Non-blocking I/O

* Works on a single thread use non-blocking I/O calls
* Supports tens of thousands concurrent connections
* Optimizes throughput & scalability in apps with many I/O calls
* All of this makes Node.js apps very fast and efficient

# Node's event loop

* Single threaded
* Supports concurrency via events and callbacks
* EventEmitter class is used to bind events and listeners

![image](http://lc-jOYHMCEn.cn-n1.lcfile.com/543a80b7303109d528eb.jpg)

# Best types of projects for node

* Rest API & Microservices
* Real time services (Chat, Live Updates)
* CRUD App - Blogs, Shopping Carts, Social Networks
* Tools & Utilities
* Basically anything that is not CPU intensive

# NPM - node package manager

* Install 3rd party packages (frameworks, libraries, tools, etc)
* Packages get stores in the "node_modules" folder
* All dependencies are listed a 'package.json' file
* NPM scripts can be created to run certain tasks such as run a server

```
npm init // generate a package.json file
npm install express // install a package locally
npm install -g nodemon // install a package globally
npm install -D nodemon // install a package as dev dependency
```

# Node Modules

* Node core modules (path, fs, http, etc)
* 3rd party modules/packages installed via npm
* Custom modules

```
const path = require('path');
const myFile = require('./myFile');
```