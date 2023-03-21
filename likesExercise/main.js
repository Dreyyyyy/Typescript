"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likes_component_1 = require("./likes.component");
var component = new likes_component_1.likesComponent(10, true);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, ", isSelected: ").concat(component.isSelected));
