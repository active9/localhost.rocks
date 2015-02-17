#localhost.rocks
![localhost.rocks](http://host.rocks/localhostrocks_logo.png)

##WHAT IS IT?

Localhost.rocks is a set of tools for Javascript and NodeJS that simply resolve the variable
localhost to the FQN localhost.rocks domain which in turn always resolves to 127.0.0.1.

##INSTALLING

Ensure git is installed on the system. Then simply create a folder on your desktop or server.
Then type simply do:

    git clone https://github.com/active9/localhost-rocks

Once downloaded cd into the downloaded directory.
Ensure you have npm and nodejs installed on the system. Then simply do:

    npm install


##RUNNING

To run localhost-rocks you can try the examples by typing in the following from within
the main package directory.

    node examples/hello_world.js


##CONTRIB

Localhost.rocks is made to replace localhost with a DNS specific alternative for developers
and published items. Localhost.rocks will always resolve to 127.0.0.1. Alternatively you may
also force localhost.rocks to point to 127.0.0.1 within the hosts file on the system OS.

##TODO

 1. Add Hosts File Addition Per OS
