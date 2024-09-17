import type { MDXComponents } from 'mdx/types'
import { LightImage } from '@/components/DarkImage'
import ActivityTracker from '@/components/ActivityTracker'
import Forum from '@/components/discussionForum/Forum';
import MdBlock from '@/components/MdParser'
import MdPlayground from '@/components/MdPlayground'
import EmojiScale from '@/components/emojiScale/EmojiScale';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        LightImage,
        ActivityTracker,
        Forum,
        MdBlock,
        MdPlayground,
        EmojiScale
    }
}
