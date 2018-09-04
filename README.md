# Mply

A simple react app using mapillary and leaflet for learning purposes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Both Docker and docker-compose should be installed beforehand.

### Installing

To start working on the app simply clone or download this repo:

```
git clone git@github.com:goncalo-godwitlabs/mply.git
cd mply/
./build.sh
./up.sh
```

After which your app should be continuously hosted on http://localhost:3000.
Any changes to the source code now should be hot reloaded.

## Deployment

Both Dockerfile and docker-compose.yml files are included in this repo for production purposes. In order to host your app in production environment just run:

```
./build-prod.sh
./up-prod.sh
```

and a nginx container is run with your CRA app on http://localhost:9090.

## Built With

* [Docker](https://github.com/docker/docker-ce) - for both node and nginx containers
* [Docker Compose](https://github.com/docker/compose) - To create both development and production environments.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

