#sailsjs-v10-angularjs-requirejs-boilerplate
SailsJs v0.10, AngularJs, RequireJs, Bootstrap 3.0.3 Boilerplate app

It should go without saying that v0.10 is in beta right now and probably isnt the most stable, but this will give you an idea how to set things up.

1. views/layout.ejs - the overall layout, sets up ng-app and requirejs
2. views/index/index.ejs - the index view, you can have a different set of views for non SPA stuff such as auth or an admin panel
3. assets/views - this is all your angular SPA stuff, home page loading, or other junk
4. assets/js - all your SPA js, i followed the example from startersquad's boilerplate, find that [here](https://github.com/StarterSquad/startersquad.github.com/tree/master/examples/angularjs-requirejs-2)


##SPA 
The idea is to split your stuff into groups..


###controllers
Put controllers into subfolders to group them up by function or area (Clients, Users, Posts, etc.). Have one file for each controller and a subfolder for each function.. e.g;

```
js/controllers/
	index.js #load all the controllers
	module.js #attach all controllers to app.controllers
	users/
		UserListController.js
		UserEditController.js
		UserDetailController.js
	index/
		IndexController.js
```

This same concept can apply to directives, resources, and anything else. In your `app.js` file you just define `controllers/index` and load `app.controllers` and it should load everything thats defined in your `js/controllers/index.js` file (which is all of your controllers).

###views
this same concept applies to views, group your views by function or area.

```
views/
	users/
		edit.html
		detail.html
		list.html
		new.html
	index/
		index.html
```

##Backend
The idea is to dev your API like you normally would in sailsJs, and then do all your frontend work in the assets folders. The only time you'd utilize sailsJs's .ejs views is if you wanted to do non SPA pages like an admin panel, or authentication panels (even then, you can handle auth in angular if you like).

##Production ready?
Well right now sailsjs 0.10 is in beta, that aside a grunt task or two needs to be written to concat all the requirejs libs into single files, and cleanup all the angular files if you like. But this isn't required.