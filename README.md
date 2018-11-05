# Angular Encapsulation

This was created to demonstrate a problem I am running into during in a real project.

Styles from `ViewEncapsulation.Emulated` are copied into all `#shadow-dom` roots across the DOM tree.

This includes the children of a `ViewEncapsulation.ShadowDom` component where the `ViewEncapsulation.ShadowDom` component itself is a sibling to a `ViewEncapsulation.Emulated` component.

[GitHub Issue](https://github.com/angular/angular/issues/5059)

[StackOverflow Question](https://stackoverflow.com/questions/53129175/viewencapsulation-emulated-styles-are-copied-into-shadow-root-by-a-viewencapsul)
