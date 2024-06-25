import EmojiScale from '@/components/emojiScale/EmojiScale';

export default {
  logo: <span>Home</span>,
  project: {
    link: 'https://github.com/hackailiteracy/hackailiteracy.github.io'
  },
  chat:{
    link: 'https://discord.gg/pf2Ck8bhag'
  },
  darkMode: true,
  sidebar: { toggleButton: true },
  toc: {extraContent: EmojiScale},
  feedback: { content: null },
  editLink: {
    component: null,
  },
  gitTimestamp: null,
  footer: {
    text: 'Hackailiteracy - AIED 2024 ',
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s - Hackathon Toolbox'
    }
  },
  head: (
    <>
      <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
    </>
  ),
}
