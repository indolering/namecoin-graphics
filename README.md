Namecoin Graphics
=================
This is the official repo for visual collateral (logos, badges, etc) for Namecoin.  Only material found in this repository should be used in official Namecoin software and websites.

|![Basic](https://raw.githubusercontent.com/indolering/namecoin-graphics/master/png/200/200-namecoin-logo.png)|![Banner](https://raw.githubusercontent.com/indolering/namecoin-graphics/master/png/500/500-namecoin-logo+wordmark.png)|
| :--------: | :----: |
| Basic Logo | Banner |

##Namecoin Blue
* **Hex** \#6a91c0
* **Lab** 65, -6, -25
* **RGB** 106, 145, 192
* **HSB** 213, 45, 75 
* **CMYK** 52, 27, 6, 0 

You can find associated color palettes [here](http://paletton.com/#uid=13A0u0kdAIF3ZYj8SRJhWytlSsx).

Usage
=====

TODO: this section is incomplete, [see Firefox branding guidelines](https://www.mozilla.org/en-US/styleguide/identity/firefox/branding/).

We strongly encourage outsider art and wish to promote liberal expression of the Namecoin brand.  However, this should be restricted to artistic expressions which are part of a larger composition: one-off pieces for fundraisers, images accompanying articles about Namecoin, etc.

Competing logos being used as currency identifiers weaken the overall brand-recognition of Namecoin.

## Good

TODO: Examples

## Bad

TODO: Examples

## License
We have recently suffered from fraudulent software and misinformation spread by cranks and trolls. We intend to release the files under a permissive copy-left license after we have worked out the trademark and copyright issues with some lawyers.  This should not be a problem in the interim as the vast majority of use-cases are covered by fair-use.

Graphics Structure
==================

##ai
The "source" files created using Illustrator, linked copies are used whenever possible.

##SVG & PNG Conversion

`ai2SvgPng.js` is used to convert the graphics from `./ai` to SVG and PNG.  Any .ai files with the word "icon" or "circle" in their names are exempted. It does not attempt to perform additional compression, which should be handled at the server level.

`ai2SvgPng.js` requires illustrator and can be run by selecting:

	File -> Scripts -> Other Scripts -> ai2SvgPng.js

You will be prompted for the project directory, which is the root directory for the Git repo (`/namecoin-graphics/`). The script requires the following directories to be present:

	/ai/name.ai
	/svg/
	/png/1000/
	/png/500/
	/png/200/
	/png/100/

##icons
Generated manually, see `./icons/README.md`.