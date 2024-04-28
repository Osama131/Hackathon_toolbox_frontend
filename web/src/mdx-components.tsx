import type { MDXComponents } from 'mdx/types'
import '../../../src/app/globals.css';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
    }
}
