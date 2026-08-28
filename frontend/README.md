# Frontend

The frontend is a Lit-Element application written in plain Javascript. 
It uses npm as package manager, and Vite as build tool and development server.

It's mostly 'what you would get' if you followed the Vite+Lit tutorial, with a few changes to actually use a Backend.

## NPM

There's a couple of extra scripts here:

* `npm run dev` - Start a development server. The application will be available at `http://localhost:5173`.
* `npm run build` - Build the application for production. The output will be in the dist folder. That won't be good enough
  to actually deploy, but it's a start.
* `npm run format` - Runs the Prettier code formatter on the source files, which standardises all tabs/spaces.
* `npm run lint` - Runs ESLint to check for common code issues.

ESLint is currently configured pretty harshly, with all rules enabled. As an alternative, you could also use ```pluginJs.configs.recommended```
instead of ```pluginJs.configs.all```.

## Vite

We use Vite as a build-tool. Basically this means we can use modern Javascript features, but after running ```npm run build```,
it should output a site that would still work in more standard environments.

Of course, having a build-tool in place enables all sorts of other possibilities, like minification, bundling, tree-shaking, etc.

The only non-standard setting this template uses is the ```proxy``` setting in ```vite.config.js```. This means that any request 
path starting with ```/api``` will be proxied to ```http://localhost:8080```, which is where the backend is expected to run.

This means that we won't have to deal with CORS issues, and it also means that the same paths that work in development
should work in production (see how the counter-service fetches to ``/api/counter``.

## Lit

Lit will be discussed extensively in this course. For now, just note that it tends to bundle HTML, CSS and Javascript all
together into a single .js file. 