import { ElementProperty } from "../../../recordTypes/Element";
import { RuleEvent } from "../../rules";
import { BasicElement, ElementType,  IElementDefinition } from "../ElementSubTypes";

export const Torus: IElementDefinition = {
  element_type: ElementType.torus,
  elementDefaultName: "Torus",
  properties: [
    ...BasicElement.properties,
    ElementProperty.opacity,
    ElementProperty.color,
    ElementProperty.hidden,
    ElementProperty.locked,
    ElementProperty.wireframe,
    ElementProperty.no_click_animation,
    ElementProperty.pivot_point,
    ElementProperty.placer_3d,
    ElementProperty.outer_radius,
    ElementProperty.inner_radius,
    ElementProperty.arc,
    ElementProperty.scale,
    ElementProperty.animation
  ],
  defaultOverrides: { 
    [ElementProperty.color]: "#F9F98A"
  },
  events: [
    ...BasicElement.events,
    RuleEvent.on_press,
    RuleEvent.on_release,
  ],
  actions: [...BasicElement.actions ]
}
