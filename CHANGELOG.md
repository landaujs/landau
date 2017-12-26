## 0.1.0 (2017-12-26)

#### Features

* To render an element, `Landau.renderAsCsg(element)`, should now be used.

#### Breaking Changes

* Overhauled the complete rendering system.
* `LandauElement` on the developer-facing side has been replaced by `Component`.
* `build` has been split up and replaced by `render` (for rendering inside composite Components, similar to React) and `applyCsg` (for applying CSG operations and creating primtives).
 
## 0.0.1

Initial Release
