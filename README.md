<div align="center">
    <h1 align="center">React Loading Skeleton</h1>
    <p align="center">
        Make beautiful, animated loading skeletons that automatically adapt to your app.
    </p>
    <br/>
  
</div>

## Basic Usage

Install via one of:

```bash
npm i @so__hell/react-media-query
```

```jsx
import { MediaQuery } from "@so__hell/react-media-query";
import { MediaType } from "@so__hell/react-media-query";
```

## DOCS

### MediaQuery

In MediaQuery you can add an object as first argument and a callback function as second argument
- The first argument is an object that can have three values

  * minWidth
  * maxWidth
  * orientation

  minWidth and maxWidth accepts a number and orientation accepts an enum of ['landscape' , 'portrait']
  you can adjust these values according to your needs.
  MediaQuery return two values , the first one is boolean (it will be true if the current width and orientation is matched otherwise false) and the second
  one is the current window width

- The second argument is a callback function that can have the current window width arguemtn passed to you , it will be called when the window is resized

For example:

```jsx
 const [isMobile, windowWidth] = MediaQuery(
    { minWidth: 300, maxWidth: 500 },
    (currWindowWidth) => {
      console.log(currWindowWidth);
    }
  );
```





### MediaType
It just return the current media in which you are accessing the React App, It will return either of the values ['desktop' , 'mobile', 'tablet']

```jsx
    const mediaType = MediaType()
```

## CONS
* No Typescript support
* Does not work on any SSR library Nextjs , only works on React


