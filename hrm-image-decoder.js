var zlib = require( 'zlib' )

module.exports = function( str ){
  str = str.replace( /\s/g, '' )
  
  var fromBase64 = new Buffer( str, 'base64' )  
  var inflated = zlib.inflateSync( fromBase64 )  
  var len = inflated.readUInt32LE( 0 )  
  var points = []  
  
  for( var i = 0; i < len; i++ ){
    var start = inflated.readUInt16LE( i * 4 + 4 )
    var end = inflated.readUInt16LE( i * 4 + 6 )
    points.push( [ start, end ] )
  }
  
  var paths = []
  var path = []
  
  for( var i = 0; i < points.length; i++ ){
    var point = points[ i ]

    if( point[ 0 ] === 0 && point[ 1 ] === 0 ){
      paths.push( path.slice() )
      path = []
    } else {
      path.push( point )
    }
  }  
  
  return paths
}