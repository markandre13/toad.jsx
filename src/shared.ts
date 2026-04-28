export interface ParamBase extends Record<string, any> { children?: (HTMLElement | SVGSVGElement)[] }
export type ClassComponent<P extends ParamBase> = { new(props: P): HTMLElement | SVGSVGElement }
export type FunctionComponent<P extends ParamBase> = { (props: P): HTMLElement | SVGSVGElement }