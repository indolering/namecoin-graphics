/**
 * @license CC0
 * http://creativecommons.org/about/cc0
 * */

app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;

var projectFolder = Folder.selectDialog('Select project folder.');
var aiFolder = new Folder(projectFolder.absoluteURI + "/ai/");
var files = aiFolder.getFiles("*.ai");


if(files.length == 0){

  alert('No .ai files found in ' + aiFolder.absoluteURI + ", see README for directory layout requirements.");

} else {

  for(i = 0; i < files.length; i++){
    var doc = app.open(files[i]); // returns the document object

    //icons/favicons are handcrafted
    if((doc.name.match(/.*icon.*/i) === null) && (doc.name.match(/.*circle.*/i) === null )){

      // SVG
      var svgOpt = new ExportOptionsSVG();
      svgOpt.embedRasterImages = true;
      svgOpt.coordinatePrecision = 7;

      doc.exportFile(
        new File(projectFolder + '/svg/' + doc.name),
        ExportType.SVG,
        svgOpt);

      //raster files don't need outlined
      if(doc.name.match(/.*outlined.*/i) === null){

        // PNG
        var sizes = [1000, 500, 200, 100]; //These folders must exist within the png directory!
        var dimensions = doc.artboards[0].artboardRect;
        var longest = doc.width;
        if(doc.width < doc.height){
          longest = doc.height
        }

        for(var j = 0; j < sizes.length; j++){
          var size = sizes[j];
          var scale = size / longest * 100;

          var pngOpt = new ExportOptionsPNG24();
          pngOpt.horizontalScale = pngOpt.verticalScale = scale;
          pngOpt.artBoardClipping = true;

          doc.exportFile(
            new File(projectFolder + '/png/' + size + "/" + size + "-" + doc.name),
            ExportType.PNG24,
            pngOpt);
        }
      }
    }
    doc.close(SaveOptions.DONOTSAVECHANGES);

  }
}
