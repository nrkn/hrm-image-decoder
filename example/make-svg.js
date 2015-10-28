const decode = require( '../hrm-image-decoder' )

const linesToSvg = lines =>
  '<svg width="100%" height="100%" viewBox="0 0 65536 21845" xmlns="http://www.w3.org/2000/svg">\n' +
  lines.map( line =>
    '<path fill="transparent" stroke="black" stroke-width="1920" stroke-linecap="round" stroke-linejoin="round" d="' +
    'M ' + line.map( p => {
      return p[ 0 ] + ' ' + ~~( p[ 1 ] / 3 )
    }).join( ' L ' ) +
    ' l 0 0" />\n'
  ) + 
  '</svg>'

console.log( linesToSvg( decode( 'eJxTY2Bg+MNixfeHhUX0ENNi7UNM1sF2LDEh95kPhv9h2VD5h+XH1F2s82dLstlvMmPP3XOdTe0pUAuDGft37n38kryXha9xnRaT5M1UluS9q35QiF/3kXCy7XzB+3ZAM+2t+EBq/9jH8CvaPddVtPuTNdd+dmOD3dFtdvbXboLkGuweP/Kz/HFLxfDazVd61ncfSMXc28Tx+BHDKBgFo4AuAADOmTlU;' ) ) )