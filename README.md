# Muscal Goggles

## How to Use

Create a copy of `.env` file in the `config/` directory and place in `root` directory

### Dependencies

At the root:

```
npm i
```

At the client:

```
cd clientSSR
npm i
```

At the test(optional):

```
cd test
npm i
```

### Running the Application

To run the client-side application from the root directory, use the following command:

```
npm run clientSSR
```

To run both the client-side application from the root directory in development mode, use the following command:

```
npm run devSSR
```

To run production, use the following command for linux-based system:

```
npm run clientSSRBuild
npm run prodSSR
```

To run production, user the following command for windows:

```
npm run clientSSRBuild
npm run prodSSRWindows
```