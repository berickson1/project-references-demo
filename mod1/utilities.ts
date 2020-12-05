import {makeRandomName as foo} from '../mod2/utilities';
export function makeRandomName() {
    return foo()
}

export function lastElementOf<T>(arr: T[]): T | undefined {
    if (arr.length === 0) return undefined;
    return arr[arr.length - 1];
}

