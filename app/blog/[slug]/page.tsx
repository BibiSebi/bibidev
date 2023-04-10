import { MDX } from "@/components/MDX";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

type Props = {
	params: {
		slug: string;
	};
};

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const blog = allBlogs.find((blog) => blog.slug === slug);

	if (!blog) {
		notFound();
	}

	return (
		<article className="mx-auto max-w-3xl pb-28">
			<MDX code={blog.body.code} />
		</article>
	);
}
