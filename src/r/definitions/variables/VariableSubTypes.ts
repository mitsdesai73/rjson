import { ICogObjectDefinition } from "../BaseCogObject";
import { ROM, RT } from "../../R";

export interface IVariableDefinition extends ICogObjectDefinition {
  variable_type: VariableType;
  varDefaultName: string,
  varDefaultValue: VarValue,
}

export enum VariableType {
  number = "number",
  boolean = "boolean",
  string = "string",
}

export enum VarCategory {
  user_defined = "user_defined",
  global = "global",
  predefined = "predefined",
  autogenerated = "autogenerated",
}

/**
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 * Useful while trying to use the ".type" property of an "untyped" json
 */
 export function isVariableType(type: string): type is VariableType {
  return VariableType[(type as VariableType)] !== undefined;
}

/** 
 * VariableDefinition RecordOrderedMap
 * This is the type of the outout of r.project(projectJson).getRecordOrderedMap(RT.variable)
 */
export type VarDefROM = ROM<RT.variable>;

/**
 * The shape of the object used to store the values of all variables in memory and in database
 */
export interface ViewerStateStructure {
  [key: string]: VarValue
}

export type VarValue = number | boolean | string;
export type ArrayOfValues = Array<VarValue>;

/** These are the values that get store in the device var auto variable */
export enum DeviceVar {
  d = "d", //desktop
  m = "m", //mobile
  h = "h" //headset
}

/**
 * Predefined variables get added in certain conditions by the UI
 */
export enum PredefinedVariableName {
  score = "score",
  lang = "lang",
  v_identifier_var = "v_identifier_var",
  firstname_var = "firstname_var",
  //https://z.gmetri.io/#narrow/stream/15-product.2Ffeatures/topic/autovariables/near/165820
  device_var = "device_var",
  browser_var = "browser_var",
  /** This variable updates at runtime */
  vrmode_var = "vrmode_var"
}

/**
 * PredefinedVariableName enum's value is itself the name of predefined variable.
 * So not defining predefinedVariableDefaults[x].name (i.e. PredefinedVarDefaults.name) again separately.
 */
export interface PredefinedVarDefaults {
  id: number,
  type: VariableType,
  description: string,
}
/**
 * How to identify a Predefined Variable?
 * Ans: id < 0
 * Predefined variables cannot be renamed or deleted by the user.
 * 
 
 */
export const predefinedVariableDefaults: Record<PredefinedVariableName, PredefinedVarDefaults> = {
  [PredefinedVariableName.score]: {id: -2, type: VariableType.number, 
    description: "This is a special numeric field that gets used in Leaderboard. Can be used to store overall score." },
  [PredefinedVariableName.lang]: {id: -3, type: VariableType.string, description: "In case Language Tools are used, the language defined in that section gets stored here." },
  [PredefinedVariableName.v_identifier_var]: {id: -8, type: VariableType.string, 
    description: "Stores the unique identifier of the viewer viewing this experience. Can be email/name etc. - depends on the authenticaion mechanism used in the Deployment section." },
  [PredefinedVariableName.firstname_var]: {id: -12, type: VariableType.string, 
    description: "Stores the viewer's first name if available from the authentication mechanism" },
  [PredefinedVariableName.device_var]: {id: -9, type: VariableType.string, description: "Viewer device type. 'm' for mobile, 'd' for desktop and 'h' for headset." },
  [PredefinedVariableName.browser_var]: {id: -10, type: VariableType.string, description: "Contains a string identifying the browser the viewer is using." },
  [PredefinedVariableName.vrmode_var]: {id: -11, type: VariableType.boolean, description: "If the user is in VR mode, this is set to true. Can be used to display things differently in VR mode." },
}

/** Note: JS keys get converted to strings in json */
export const predefinedVariableIdToName: Record<number, PredefinedVariableName> = {
  [-2]: PredefinedVariableName.score,
  [-3]: PredefinedVariableName.lang,
  [-8]: PredefinedVariableName.v_identifier_var,
  [-9]: PredefinedVariableName.device_var,
  [-10]: PredefinedVariableName.browser_var,
  [-11]: PredefinedVariableName.vrmode_var,
  [-12]: PredefinedVariableName.firstname_var,
}
