import { likesComponent } from "./likes.component";

let component = new likesComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)