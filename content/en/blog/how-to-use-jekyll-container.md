---
title: "How to use Jekyll Docker container"
date: 2017-04-17T12:52:36+06:00
type: "blog"
tags: ["Jekyll", "Docker"]
image: https://raw.githubusercontent.com/eneus/jekyll/master/src/demosite.com/assets/docker-jekyll.png
description : "How to use Jekyll Docker container and why you need it."
---

Jekyll's Docker Container with Demo Content and demo site.


**Plugins included:**

```
- Jekyll: 3.8.3
  -- jekyll-paginate
  -- jekyll-sitemap
  -- jekyll-feed
  -- jekyll-multisite
  -- jekyll-github-metadata
  -- jekyll-seo-tag
  -- jekyll-watch
  -- jekyll-sass-converter
  -- jekyll-assets
  -- jekyll-multiple-languages-plugin
- Compass: 1.0.3
- NodeJS: 8.9.3
-- NPM: 5.5.1
-- Yarn: 1.3.2
```

## The first of all:
**Install Docker:**

- On ***Linux Ubuntu/Debian***:

  https://docs.docker.com/install/linux/docker-ce/ubuntu/ 
  https://docs.docker.com/install/linux/docker-ce/debian/


- On ***MacOS***:

  https://docs.docker.com/docker-for-mac/install/


- On ***Windows***:

  https://docs.docker.com/docker-for-windows/install/


**Install Docker Compose:**

- https://docs.docker.com/compose/install/

**Download repository:**

```
git clone git@github.com:eneus/jekyll.git
```

**Go to downloaded folder:**

```shell
cd jekyll
```

**Configure your .env file:**

```
COMPOSE_FILE=./configs/docker-compose.yml
COMPOSE_PROJECT=demo           # Folder  (src/${COMPOSE_PROJECT}), config file ${COMPOSE_PROJECT}.yml,
COMPOSE_PROJECT_NAME=demo      # short name used in container name Ex.: demo_jekyll
SITE_NAME=Demo Content
SITE_MAIL=admin@demosite.com

IPRANGE=192.168.16.0/20
CUID=1000
CGID=1000
```

**Start docker container via Makefile:**

```shell
$ make all
```

**Start docker container via docker-compose:**

```shell
docker-compose up
```

or

```shell
docker-compose up -d     //in background
```

**Now you can access to you static site:**

- Jekyll Server: http://localhost:4000

---
Image Credits: http://gratisography.com/ 
