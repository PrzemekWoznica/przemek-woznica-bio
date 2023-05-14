My app made for introducing myself.

To get app on development environment you can use:

        git clone https://github.com/PrzemekWoznica/przemek-woznica-bio.git

Then run command:

        npm install

To start local node server use:

        npm start

To start app ready to deploy start docker:

        Image building:     docker build -t pw-bio .
        Start container:    docker run -p 80:80 pw-bio
        

To see working app click here:

        http://przemek-woznica-bio-dev.eu-north-1.elasticbeanstalk.com/

Functions which you should add if have time:
    -   adding media queries to CSS to look good on mobile devices
    -   tests