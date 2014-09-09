Namecoin Graphics
=================
This is the official repo for visual collateral (logos, badges, etc) for Namecoin.  Only material found in this repository should be used in official Namecoin software and websites.


| ![Coin Front](https://raw.github.com/indolering/nmc-graphics/master/png/500/nmc-coinage-2up.png) | ![Badge](https://raw.github.com/indolering/nmc-graphics/master/png/250/badge-prototype.png) |      ![Mini-Logo](https://raw.github.com/indolering/nmc-graphics/master/png/100/nmc-logo-mini.png) |
| :-----------: | :-----------: | -----------: |
| Coin Mockup | Namecoin Nerd Merit Badge | Mini Logo |

![logo license](http://i.creativecommons.org/l/by-sa/4.0/80x15.png)

Usage
=====
We strongly encourage outsider art and wish to promote liberal expression of the Namecoin brand.  However, this should be restricted to artistic expressions only.  One-off pieces for fundraisers, images accompanying articles about Namecoin, etc.

## Good

## Bad

## License
We have recently suffered from fraudulent software and misinformation spread by cranks and trolls.  Until we review our legal options, we are limiting use of these files to fair-use.  We are not comfortable with this licensing strategy and we intend to release the files under a permissive copy-left license after we have worked out the trademark and copyright issues with some lawyers.

However, it is important to note that the vast majority of use-cases are covered by fair-use:

* Thing
* Thing
* Etc


Graphics Structure
==================
The "source" files are all in Illustrator, located in the 'ai' directory.  

* `name` description
	* `name` dependent files which link to parent.

* `namecoin-logo.ai` is composed of individual shapes.  It will not behave as expected if you attempt to apply new colors or strokes.  This file also tends to leave hairlines when exporting to other formats and is thus not recommended for direct linking.
* `namecoin-logo-outlined.ai` is a single vector outline generated from `namecoin-logo.ai`.  The shape builder tool is used create pool the constituent shapes together.
	* `namecoin-coin-basic.ai`
* `namecoin-logo-shaded.ai` is a complex, multilayered file which (while geometrically pure) is very finicky.  Seemingly benign layering can result in hairlines.  This file is linked directly 
	* `namecoin-coin-shaded.ai`
	* `namecoin-coin-3d.ai`
* `namecoin-wordmark.ai` Namecoin in Ubuntu Bold Italic.  Font is subset but can be found in the project directory under `./ubuntu-font-family-0.80/`.
* `namecoin-wordmark-outlined.ai` Static outlines, no font required. 

Converting
==========
`ai2SvgPng.js` is used to convert the graphics from Illustrator/.ai to SVG and PNG formats.  It requires illustrator and can be run by selecting:

	File -> Scripts -> Other Scripts -> ai2SvgPng.js

You will be prompted for the project directory, which is the root directory of the namecoin-graphics git directory (likely `~/namecoin-graphics/`).

The script requires the following directory layout under `/namecoin-graphics/`:

	/ai/name.ai
	/svg/
	/png/1000/
	/png/500/
	/png/200/
	/png/100/

It does not attempt to perform additional compression, which should be handled at the server level.

Troubleshooting
===============
## Misc
* Try simplifying shapes by combining multiple shapes into a continuous surface.
	* May require maintaining editable source and simplified version used for linking.  The `*-outlined` logo is an example of this.

## Clipping Mask Errors
These frequently occur with SVG exports of images with complex shapes that have been placed/linked.

* Ensure that the points do no extend past the canvas.
* Copy and paste instead of placing (hack: not advised as changes to source file do not propagate).
* Avoid effects which require rasterization.

## Hairlines
* Try averaging points/lines.
* Extend shapes that touch each until they overlap.
* Try layering additional solid shapes with either the same color a neutral color behind the two problematic shapes.


