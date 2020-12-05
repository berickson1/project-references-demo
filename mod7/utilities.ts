import { Box } from '../components/utilities'
export function makeRandomName() {
    return "Bob!?! 12";
}

export function lastElementOf<T>(arr: T[]): T | undefined {
    if (arr.length === 0) return undefined;
    return arr[arr.length - 1];
}

export { Box };
