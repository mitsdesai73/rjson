import { ElementProperty } from "../../../recordTypes/Element";
import { BasicElement, ElementType, IElementDefinition } from "../ElementSubTypes";

export const Zone: IElementDefinition = {
  element_type: ElementType.environment,
  elementDefaultName: "Zone",
  properties: [
    ...BasicElement.properties,
    ElementProperty.hidden,
    ElementProperty.opacity,
    ElementProperty.color,
    ElementProperty.scale,
    ElementProperty.placer_3d,
    ElementProperty.radius,
    ElementProperty.height,
  ],
  defaultOverrides: {
    // So that the element can be placed on top of the floor in an environment
    [ElementProperty.placer_3d]: [0, -1.6, 0, 0, 0, 0, 1, 1, 1],
  },
  events: [],
  actions: [
    ...BasicElement.actions,
  ]
}