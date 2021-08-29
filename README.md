

## HI ! 

This repository is a template for everyone who want to create and use AWS Lambda with Nodejs.

It can be painfull to setup this, so I decide to make it very clear for you.

### HOW IT WORKS

1. Clone this repository and update line 11 in package.json with your aws profile name
2. add your dependecy like this : 

```shell
npm i moment firebase-admin

# or with yarn #

yarb add moment firebase-admin
```

3. Run this command :

```shell
npm run create lambda --name=$THE_NAME_YOU_WANT
```

4. Code it (good luck !)
5. Deploy it, easily with : 

```shell
npm run deploy --name=$THE_NAME_YOU_WANT
```


### UNDER THE HOOD

The script deploy, will do the following step : 

1. Compile with rollup your functions and output it in a folder called bundle (in your function directory)
2. Zip this bundle
3. Update this bundle to aws lambda
4. Write deploy log to logs folder
5. Remove the .zip folder and bundle
