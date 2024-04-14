import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { GetServerSideProps } from 'next'
import { MDXProvider } from 'nextra/mdx'
import fs from 'fs';


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // const res = await fetch(`http://localhost:8000/mdx/`)
    // const markdown = await res.text()

    const markdown = fs.readFileSync('C:/Users/a5121374/Documents/Uni/Masters_thesis/Hackathon_toolbox/remote.mdx', 'utf-8');
    const mdxSource = await serialize(markdown);
    console.log(markdown)
    return { props: { mdxSource } };


}

interface Props {
    mdxSource: any
}

const MdxPage: React.FC<Props> = ({ mdxSource }) => {
    return <MDXRemote className='' {...mdxSource} />
}

export default MdxPage
