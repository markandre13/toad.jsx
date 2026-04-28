//
// SOLIDJS JSX SUPPORT
//

import { JSX } from "../jsx-runtime"
import { ClassComponent, FunctionComponent } from "./shared"

// Solid's JSX compiler and runtime are in https://github.com/ryansolid/dom-expressions
// for now i just copy and pasted code from packages/dom-expressions/src/client.*
// into this file, which is not the proper way to do it

/**
 * A general `Component` has no implicit `children` prop.  If desired, you can
 * specify one as in `Component<{name: String, children: JSX.Element}>`.
 */
export type Component<P extends Record<string, any> = {}> = FunctionComponent<P> | ClassComponent<P>

export function template(html: string, _isCE?: boolean, isSVG?: boolean, isMathML?: boolean): () => ChildNode {
    return () => {
        const t = isMathML
            ? document.createElementNS("http://www.w3.org/1998/Math/MathML", "template") as HTMLTemplateElement
            : document.createElement("template")
        t.innerHTML = html
        return isSVG ? t.content.firstChild?.firstChild! : isMathML ? t.firstChild! : t.content.firstChild!
    }
}

export function createComponent<T extends Record<string, any>>(
    functionOrConstructor: Component<T>,
    props: T
): JSX.Element {
    if (functionOrConstructor.prototype !== undefined) {
        return new (functionOrConstructor as ClassComponent<T>)(props)
    } else {
        return (functionOrConstructor as FunctionComponent<T>)(props)
    }
}

const $$EVENTS = "_$DX_DELEGATE"

export function delegateEvents(eventNames: string[], d?: Document): void {
    const e = (document as any)[$$EVENTS] || ((document as any)[$$EVENTS] = new Set())
    for (let i = 0, l = eventNames.length; i < l; i++) {
        const name = eventNames[i]
        if (!e.has(name)) {
            e.add(name)
            document.addEventListener(name, eventHandler)
        }
    }
}
export function clearDelegatedEvents(d?: Document): void {
    if ((document as any)[$$EVENTS]) {
        for (let name of (document as any)[$$EVENTS].keys()) document.removeEventListener(name, eventHandler)
        delete (document as any)[$$EVENTS]
    }
}

export function setAttribute(node: Element, name: string, value: string): void {
    if (value == null) node.removeAttribute(name)
    else node.setAttribute(name, value)
}

export function setAttributeNS(node: Element, namespace: string, name: string, value: string): void {
    if (value == null) node.removeAttributeNS(namespace, name)
    else node.setAttributeNS(namespace, name, value)
}

export function setBoolAttribute(node: Element, name: string, value: any): void {
    value ? node.setAttribute(name, "") : node.removeAttribute(name)
}

export function className(node: Element, value: string): void {
    if (value == null) node.removeAttribute("class")
    else node.className = value
}

export function addEventListener(
    node: Element,
    name: string,
    handler: EventListener | EventListenerObject | (EventListenerObject & AddEventListenerOptions),
    delegate: boolean
): void {
    if (delegate) {
        if (Array.isArray(handler)) {
            (node as any)[`$$${name}`] = handler[0]
                (node as any)[`$$${name}Data`] = handler[1]
        } else (node as any)[`$$${name}`] = handler
    } else if (Array.isArray(handler)) {
        const handlerFn = handler[0]
        node.addEventListener(name, (handler[0] = (e: any) => handlerFn.call(node, handler[1], e)))
    } else (node as any).addEventListener(name, handler, typeof handler !== "function" && handler)
}

export function classList(
    node: Element,
    value: { [k: string]: boolean },
    prev?: { [k: string]: boolean }
): { [k: string]: boolean } {
    const classKeys = Object.keys(value || {}),
        prevKeys = Object.keys(prev!)
    let i, len
    for (i = 0, len = prevKeys.length; i < len; i++) {
        const key = prevKeys[i]
        if (!key || key === "undefined" || value[key]) continue
        toggleClassKey(node, key, false)
        delete prev![key]
    }
    for (i = 0, len = classKeys.length; i < len; i++) {
        const key = classKeys[i],
            classValue = !!value[key]
        if (!key || key === "undefined" || prev![key] === classValue || !classValue) continue
        toggleClassKey(node, key, true)
        prev![key] = classValue
    }
    return prev!
}

function toggleClassKey(node: Element, key: string, value: boolean) {
    const classNames = key.trim().split(/\s+/)
    for (let i = 0, nameLen = classNames.length; i < nameLen; i++)
        node.classList.toggle(classNames[i], value)
}

export function style(node: Element,
    value: { [k: string]: string },
    prev?: { [k: string]: string }
): any {
    if (!value) return prev ? setAttribute(node, "style", undefined as any) : value
    const nodeStyle = (node as HTMLElement).style
    if (typeof value === "string") return (nodeStyle.cssText = value)
    typeof prev === "string" && (nodeStyle.cssText = prev = undefined as any)
    prev || (prev = {})
    value || (value = {})
    let v, s
    for (s in prev) {
        value[s] == null && nodeStyle.removeProperty(s)
        delete prev[s]
    }
    for (s in value) {
        v = value[s]
        if (v !== prev[s]) {
            nodeStyle.setProperty(s, v)
            prev[s] = v
        }
    }
    return prev
}

export function setStyleProperty(node: Element, name: string, value: any) {
    value != null
        ? (node as HTMLElement).style.setProperty(name, value)
        : (node as HTMLElement).style.removeProperty(name)
}

function untrack<T>(fn: () => T) {
    return fn()
}

type MountableElement = Element | Document | ShadowRoot | DocumentFragment | Node

export function use<Arg, Ret>(fn: (node: Element, arg: Arg) => Ret, element: Element, arg?: Arg): Ret {
    return untrack(() => fn(element, arg!))
}

export function insert<T>(
    parent: MountableElement,
    accessor: (() => T) | T,
    marker?: Node | null,
    initial?: JSX.Element
): JSX.Element {
    if (marker !== undefined && !initial) initial = []
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker)
    effect(current => insertExpression(parent, (accessor as () => T)(), current, marker), initial)
}

let effectHandler: ((fn: (prev?: any) => any, init?: any) => void) | undefined
export function setEffectHandler<T>(fn: (fn: (prev?: T) => T, init?: T) => void) {
    console.log("SET EFFECT HANDLER")
    effectHandler = fn
}

export function effect<T>(fn: (prev?: T) => T, init?: T): void {
    if (effectHandler) {
        effectHandler(fn, init)
    } else {
        fn(init)
    }
}

function eventHandler(e: Event) {
    //   if (sharedConfig.registry && sharedConfig.events) {
    //     if (sharedConfig.events.find(([el, ev]) => ev === e)) return;
    //   }

    let node = e.target as any
    const key = `$$${e.type}`
    const oriTarget = e.target
    const oriCurrentTarget = e.currentTarget
    const retarget = (value: any) =>
        Object.defineProperty(e, "target", {
            configurable: true,
            value
        })
    const handleNode = () => {
        const handler = node[key]
        if (handler && !node.disabled) {
            const data = node[`${key}Data`]
            data !== undefined ? handler.call(node, data, e) : handler.call(node, e)
            if (e.cancelBubble) return
        }
        node.host &&
            typeof node.host !== "string" &&
            !node.host._$host &&
            node.contains(e.target) &&
            retarget(node.host)
        return true
    }
    const walkUpTree = () => {
        while (handleNode() && (node = node._$host || node.parentNode || node.host));
    }

    // simulate currentTarget
    Object.defineProperty(e, "currentTarget", {
        configurable: true,
        get() {
            return node || document
        }
    })
    // cancel hydration
    // if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = _$HY.done = true

    if (e.composedPath) {
        const path = e.composedPath()
        retarget(path[0])
        for (let i = 0; i < path.length - 2; i++) {
            node = path[i]
            if (!handleNode()) break
            if (node._$host) {
                node = node._$host
                // bubble up from portal mount instead of composedPath
                walkUpTree()
                break
            }
            if (node.parentNode === oriCurrentTarget) {
                break // don't bubble above root of event delegation
            }
        }
    }
    // fallback for browsers that don't support composedPath
    else walkUpTree()
    // Mixing portals and shadow dom can lead to a nonstandard target, so reset here.
    retarget(oriTarget)
}

function insertExpression(parent: MountableElement, value: any, current: any, marker: any, unwrapArray?: any) {
    while (typeof current === "function") current = current()
    if (value === current) return current
    const t = typeof value,
        multi = marker !== undefined
    parent = (multi && current[0] && current[0].parentNode) || parent

    if (t === "string" || t === "number") {
        if (t === "number") {
            value = value.toString()
            if (value === current) return current
        }
        if (multi) {
            let node = current[0]
            if (node && node.nodeType === 3) {
                node.data !== value && (node.data = value)
            } else node = document.createTextNode(value)
            current = cleanChildren(parent, current, marker, node)
        } else {
            if (current !== "" && typeof current === "string") {
                current = (parent as any).firstChild.data = value
            } else current = (parent as Element).textContent = value
        }
    } else if (value == null || t === "boolean") {
        current = cleanChildren(parent, current, marker)
    } else if (t === "function") {
        effect(() => {
            let v = value()
            while (typeof v === "function") v = v()
            current = insertExpression(parent, v, current, marker)
        })
        return () => current
    } else if (Array.isArray(value)) {
        const array: any[] = []
        const currentArray = current && Array.isArray(current)
        if (normalizeIncomingArray(array, value, current, unwrapArray)) {
            effect(() => (current = insertExpression(parent, array, current, marker, true)))
            return () => current
        }
        if (array.length === 0) {
            current = cleanChildren(parent, current, marker)
            if (multi) return current
        } else if (currentArray) {
            if (current.length === 0) {
                appendNodes(parent, array, marker)
            } else reconcileArrays(parent, current, array)
        } else {
            current && cleanChildren(parent)
            appendNodes(parent, array)
        }
        current = array
    } else if (value.nodeType) {
        if (Array.isArray(current)) {
            if (multi) return (current = cleanChildren(parent, current, marker, value))
            cleanChildren(parent, current, null, value)
        } else if (current == null || current === "" || !parent.firstChild) {
            parent.appendChild(value)
        } else parent.replaceChild(value, parent.firstChild)
        current = value
    } else console.warn(`Unrecognized value. Skipped inserting`, value)

    return current
}

function normalizeIncomingArray(normalized: any, array: any, current: any, unwrap?: any): any {
    let dynamic = false
    for (let i = 0, len = array.length; i < len; i++) {
        let item = array[i],
            prev = current && current[normalized.length],
            t
        if (item == null || item === true || item === false) {
            // matches null, undefined, true or false
            // skip
        } else if ((t = typeof item) === "object" && item.nodeType) {
            normalized.push(item)
        } else if (Array.isArray(item)) {
            dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic
        } else if (t === "function") {
            if (unwrap) {
                while (typeof item === "function") item = item()
                dynamic =
                    normalizeIncomingArray(
                        normalized,
                        Array.isArray(item) ? item : [item],
                        Array.isArray(prev) ? prev : [prev]
                    ) || dynamic
            } else {
                normalized.push(item)
                dynamic = true
            }
        } else {
            const value = String(item)
            if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev)
            else normalized.push(document.createTextNode(value))
        }
    }
    return dynamic
}

function appendNodes(parent: any, array: any, marker: any = null) {
    for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker)
}

function cleanChildren(parent: any, current?: any, marker?: any, replacement?: any) {
    if (marker === undefined) return (parent.textContent = "")
    const node = replacement || document.createTextNode("")
    if (current.length) {
        let inserted = false
        for (let i = current.length - 1; i >= 0; i--) {
            const el = current[i]
            if (node !== el) {
                const isParent = el.parentNode === parent
                if (!inserted && !i)
                    isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker)
                else isParent && el.remove()
            } else inserted = true
        }
    } else parent.insertBefore(node, marker)
    return [node]
}

// Slightly modified version of: https://github.com/WebReflection/udomdiff/blob/master/index.js
export function reconcileArrays(parentNode: Node, a: Node[], b: Node[]): void {
    let bLength = b.length,
        aEnd = a.length,
        bEnd = bLength,
        aStart = 0,
        bStart = 0,
        after = a[aEnd - 1].nextSibling,
        map = null

    while (aStart < aEnd || bStart < bEnd) {
        // common prefix
        if (a[aStart] === b[bStart]) {
            aStart++
            bStart++
            continue
        }
        // common suffix
        while (a[aEnd - 1] === b[bEnd - 1]) {
            aEnd--
            bEnd--
        }
        // append
        if (aEnd === aStart) {
            const node =
                bEnd < bLength
                    ? bStart
                        ? b[bStart - 1].nextSibling
                        : b[bEnd - bStart]
                    : after

            while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node)
            // remove
        } else if (bEnd === bStart) {
            while (aStart < aEnd) {
                if (!map || !map.has(a[aStart])) (a[aStart] as Element).remove()
                aStart++
            }
            // swap backward
        } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            const node = a[--aEnd].nextSibling
            parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling)
            parentNode.insertBefore(b[--bEnd], node)

            a[aEnd] = b[bEnd]
            // fallback to map
        } else {
            if (!map) {
                map = new Map()
                let i = bStart

                while (i < bEnd) map.set(b[i], i++)
            }

            const index = map.get(a[aStart])
            if (index != null) {
                if (bStart < index && index < bEnd) {
                    let i = aStart,
                        sequence = 1,
                        t

                    while (++i < aEnd && i < bEnd) {
                        if ((t = map.get(a[i])) == null || t !== index + sequence) break
                        sequence++
                    }

                    if (sequence > index - bStart) {
                        const node = a[aStart]
                        while (bStart < index) parentNode.insertBefore(b[bStart++], node)
                    } else parentNode.replaceChild(b[bStart++], a[aStart++])
                } else aStart++
            } else (a[aStart++] as Element).remove()
        }
    }
}