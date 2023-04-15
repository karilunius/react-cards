### About the project

## Youtube vid example
[web](https://www.youtube.com/watch?v=1_DXtP0XyDw)

## View

### Installations

**styles**
- on main.jsx is: import 'bootstrap/dist/css/bootstrap.min.css'
```
npm i bootstrap
```
**To validate data type received from .map**
- at the file you'll use it, it's: import PropTypes from 'prop-types'
- I've got errors, they're fixed writing in package.json file: 
  - ```    
    "optimizeDeps": {
               "exclude": "prop-types"
     }
    ```
- install command
```
npm i prop-types
```
**Animations**  [web](https://animate.style/)
- This library was used but I didn't work. To install, I used 2nd option. To use globally, import at index or main:
```
import 'animate.css'
```
Also, you can use this cod inside of tag head from html: 
```
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  ```
- This library uses specific classes to make the animation. Example: 
- class="animate__animated {la animacion a usar en formato clase}"
```
class="animate__animated animate__bounce animate__faster"
```


1
```
npm install animate.css --save
```
2
```
npm i animate.css 
```


### added
**lorem text**
[web](https://es.lipsum.com/feed/html)
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut eleifend neque nibh, a sagittis libero maximus eu. 
Proin et laoreet velit. 
Praesent lacinia arcu at tortor condimentum, facilisis iaculis nunc feugiat.
In sit amet tincidunt est, at sagittis leo. 
Sed lacus felis, bibendum pellentesque urna sit amet, pharetra mollis leo. 
```

**images**
[web](https://github.com/FaztWeb/react-cards-bootstrap/tree/main/src/assets)

**gradients**
[web](https://cssgradient.io/)

**Repository original example by FaztWeb**
[web](https://github.com/FaztWeb/react-cards-bootstrap)