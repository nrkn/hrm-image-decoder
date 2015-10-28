const decode = require( '../hrm-image-decoder' )

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