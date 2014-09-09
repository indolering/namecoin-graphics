/**
 * @license CC0
 * http://creativecommons.org/about/cc0
 * */

app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var projectFolder = Folder.selectDialog('Select project folder.');
var aiFolder = new Folder ( projectFolder.absoluteURI + "/ai/");
var files = aiFolder.getFiles( "*.ai" );


if ( files.length == 0) {

  alert( 'No .ai files found in ' + aiFolder.absoluteURI + ", see README for directory layout requirements.");

} else {

  for ( i = 0; i < files.length; i++ )
  {
    var doc = app.open(files[i]); // returns the document object

    // SVG
    var svgOpt = new ExportOptionsSVG();
    svgOpt.embedRasterImages = true;
    svgOpt.coordinatePrecision = 7;

    doc.exportFile(
      new File(projectFolder + '/svg/' + doc.name),
      ExportType.SVG,
      svgOpt);


    // PNG
    var sizes = [1000, 500, 200, 100]; //These folders must exist within the png directory!
    var dimensions = doc.artboards[0].artboardRect.slice(1,2);
    var longest = dimensions[0];
    if(dimensions[0] < dimensions[1]){longest = dimensions[1]}

    for(var j = 0; j < sizes.length; j++){
      var size = sizes[j];
      var scale = size/longest * 100;

      var pngOpt = new ExportOptionsPNG24();
      pngOpt.horizontalScale = pngOpt.verticalScale = scale;
      pngOpt.artBoardClipping = true;

      doc.exportFile(
        new File(projectFolder + '/png/' + size + "/" + size + "-" + doc.name),
        ExportType.PNG24,
        pngOpt);
    }
    doc.close(SaveOptions.DONOTSAVECHANGES);
  }
}
