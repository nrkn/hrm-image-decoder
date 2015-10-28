var zlib = require( 'zlib' )

module.exports = function( str ){
  str = str.replace( /\s/g, '' )
  
  var fromBase64 = new Buffer( str, 'base64' )  
  var inflated = zlib.inflateSync( fromBase64 )  
  var len = inflated.readUInt32LE( 0 )  
  var values = []  
  
  for( var i = 0; i < len; i++ ){
    var start = inflated.readUInt16LE( i * 4 + 4 )
    var end = inflated.readUInt16LE( i * 4 + 6 )
    values.push( [ start, end ] )
  }
  
  var lines = []
  var line = []
  
  for( var i = 0; i < values.length; i++ ){
    var point = values[ i ]

    if( point[ 0 ] === 0 && point[ 1 ] === 0 ){
      lines.push( line.slice() )
      line = []
    } else {
      line.push( point )
    }
  }  
  
  return lines
}