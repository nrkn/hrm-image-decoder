# hrm-image-decoder
## An image decoder for Human Resource Machine programs

![Screenshot](http://tomorrowcorporation.com/blog/wp-content/themes/tcTheme2/images/hrm/screenshots/hrm_04.png)

> Human Resource Machine is a puzzle game. In each level, your boss gives you a job. Automate it by programming your little office worker! If you succeed, you'll be promoted up to the next level for another year of work in the vast office building. Congratulations!

### NPM

`npm install hrm-image-decoder`

Unlike some of my other HRM projects, this one is plain ES5

### Usage

```javascript
const decode = require( 'hrm-image-decoder' )

const hrmImage = `
eJxTY2Bg+MNixfeHhUX0ENNi7UNM1sF2LDEh95kPhv9h2VD5h+XH1F2s82dLstlvMmPP3XOdTe0pUAuD
Gft37n38kryXha9xnRaT5M1UluS9q35QiF/3kXCy7XzB+3ZAM+2t+EBq/9jH8CvaPddVtPuTNdd+dmOD
3dFtdvbXboLkGuweP/Kz/HFLxfDazVd61ncfSMXc28Tx+BHDKBgFo4AuAADOmTlU;
`

const paths = decode( hrmImage )
```

The result is an array of paths, each of which is an array of points

You can then view them as SVG by doing something like:

```javascript
const decode = require( 'hrm-image-decoder' )

const hrmImage = `
eJxTY2Bg+MNixfeHhUX0ENNi7UNM1sF2LDEh95kPhv9h2VD5h+XH1F2s82dLstlvMmPP3XOdTe0pUAuD
Gft37n38kryXha9xnRaT5M1UluS9q35QiF/3kXCy7XzB+3ZAM+2t+EBq/9jH8CvaPddVtPuTNdd+dmOD
3dFtdvbXboLkGuweP/Kz/HFLxfDazVd61ncfSMXc28Tx+BHDKBgFo4AuAADOmTlU;
`

const imageToSvg = image =>
  pathsToSvg( decode( image ) )

const pathsToSvg = paths =>  
  `<svg width="100%" height="100%" viewBox="0 0 65536 21845" xmlns="http://www.w3.org/2000/svg">\n${
    paths.map( pathToSvg ).join( '\n' )
  }\n</svg>`

const pathToSvg = path =>
  `  <path fill="transparent" stroke="black" stroke-width="1920" stroke-linecap="round" stroke-linejoin="round" d="M ${
    path.map( pointToSvg ).join( ' L ' )
  } l 0 0" />`
  
const pointToSvg = p =>
  p[ 0 ] + ' ' + Math.floor( p[ 1 ] / 3 )

const svg = imageToSvg( hrmImage )

console.log( svg )
```

### Contributers

* [@sendow](https://github.com/sendow)

### License

MIT