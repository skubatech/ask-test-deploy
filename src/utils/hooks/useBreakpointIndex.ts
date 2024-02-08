import {useEffect, useMemo, useState} from 'react';
import {BREAKPOINTS} from "@theme/constants/breakpoints";

export const getBreakpointVal = <T>(
    vals: NonNullable<T> | (T | null)[],
    breakpointIndex: number,
): NonNullable<T> => {
    if (!Array.isArray(vals)) return vals;

    let res: T | null = null;
    for (let i = 0; i < vals.length; i++) {
        res = vals[i] ?? res;
        if (i === breakpointIndex) {
            break;
        }
    }
    if (!res) throw new Error('theme.getVal: empty value passed! check theme config...');

    return res;
};

const mediaQueries = [
    `(min-width: ${BREAKPOINTS.xs}px)`,
    `(min-width: ${BREAKPOINTS.sm}px)`,
    `(min-width: ${BREAKPOINTS.md}px)`,
    `(min-width: ${BREAKPOINTS.lg}px)`,
    `(min-width: ${BREAKPOINTS.xl}px)`,
];

export const useBreakpointIndex = (ssrIndex = 3) => {
    const [index, setIndex] = useState(ssrIndex);

    useEffect(() => {
        const queries = Object.values(mediaQueries);

        const handler = () => {
            let idx = 0;
            for (let mqi = queries.length - 1; mqi >= 0; mqi--) {
                const matches = window.matchMedia(mediaQueries[mqi]).matches;
                if (matches) {
                    idx = mqi;
                    break;
                }
            }
            setIndex(idx);
        };

        handler();

        const mqs = queries.map((query) => {
            const mq = window.matchMedia(query);
            mq.addEventListener('change', handler);
            return mq;
        });

        return () => mqs.forEach((mq) => mq.removeEventListener('change', handler));
    }, []);

    return index;
};

export const useBreakpointValue = <T>(vals: T[], ssrIndex?: number) => {
    const index = useBreakpointIndex(ssrIndex);
    return useMemo(() => getBreakpointVal(vals, index), [index, vals]);
};
