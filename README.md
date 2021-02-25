# vending-machine

This is a simple toy, vending machine, to practice react, redux and react-dnd with typescript

I'm satisfied with the results in my own way, but let me know if you find any issues.

## Link

* [demo](http://49.50.172.181/)
* [docker hub](https://hub.docker.com/repository/registry-1.docker.io/osy0056/vending-machine/tags?page=1&ordering=last_updated)

## View

<div style="display: flex;">
  <img src="https://user-images.githubusercontent.com/46865281/109119678-5c233180-7788-11eb-9715-618697d987b3.png" width="500px;" height="320px;">
</div>

## Feature

> It does'nt support mobile because React dnd mobile touch issue

* You can insert coins into machine to get drinks.
* You can kick the machine to get drinks.

## Usage

```bash
# install and start
cd client && yarn && yarn start

# deployment
docker pull osy0056/toy-machine:{tag name}
```

## Stack

* React, Redux, React DnD
* styled-components
* typescript
* docker
* nginx
* github action
* NCP
