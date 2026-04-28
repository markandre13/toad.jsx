import { JSX } from "../jsx-runtime"
import { ClassComponent, FunctionComponent } from "./shared"

export type Component<P extends Record<string, any> = {}> = FunctionComponent<P> | ClassComponent<P>

export function root(fn: (dispose: () => void) => void, owner?: any) {
    console.error("rxcore.ts: root() not implemented yet")
}

export function getOwner(): any {
    console.error("rxcore.ts: getOwner() not implemented yet")
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

let effectHandler: ((fn: (prev?: any) => any, init?: any) => void) | undefined
export function setEffectHandler<T>(fn: (fn: (prev?: T) => T, init?: T) => void) {
    effectHandler = fn
}

export function effect<T>(fn: (prev?: T) => T, init?: T): void {
    if (effectHandler) {
        effectHandler(fn, init)
    } else {
        fn(init)
    }
}

export function untrack<T>(fn: () => T) {
    console.error("rxcore.ts: untrack() not implemented yet")
    return fn()
}

const currentContext = null;
export const sharedConfig = {} as any;

export function memo<T>(fn: () => T, equal: boolean): () => T {
    console.error("rxcore.ts: memo() not implemented yet")
    return () => fn()
//   if (typeof fn !== "function") return fn;
//   if (!equal) return S(fn);
//   const s = value(sample(fn));
//   S(() => s(fn()));
//   return s;
}

const propTraps = {
  get(_: any, property: any) {
    return _.get(property);
  },
  has(_: any, property: any) {
    return _.has(property);
  },
  set: trueFn,
  deleteProperty: trueFn,
  getOwnPropertyDescriptor(_: any, property: any) {
    return {
      configurable: true,
      enumerable: true,
      get() {
        return _.get(property);
      },
      set: trueFn,
      deleteProperty: trueFn
    };
  },
  ownKeys(_: any) {
    return _.keys();
  }
};

function trueFn() {
  return true;
}

function resolveSource(s: any) {
  return (s = typeof s === "function" ? s() : s) == null ? {} : s;
}

export function mergeProps(...sources: any) {
  return new Proxy(
    {
      get(property: any) {
        for (let i = sources.length - 1; i >= 0; i--) {
          const v = resolveSource(sources[i])[property];
          if (v !== undefined) return v;
        }
      },
      has(property: any) {
        for (let i = sources.length - 1; i >= 0; i--) {
          if (property in resolveSource(sources[i])) return true;
        }
        return false;
      },
      keys() {
        const keys = [];
        for (let i = 0; i < sources.length; i++)
          keys.push(...Object.keys(resolveSource(sources[i])));
        return [...new Set(keys)];
      }
    },
    propTraps
  );
}