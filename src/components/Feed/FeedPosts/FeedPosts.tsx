import { IPost } from "@/actions/posts-get";
import Image from "next/image";
import Link from "next/link";

import { Feed, FeedItem, Views } from "./feed-posts.styles";

export const FeedPosts = ({ posts }: { posts: IPost[] }) => {
  return (
    <Feed>
      {posts.map((post, i) => (
        <FeedItem key={post.id + i}>
          <Link href={`/post/${post.id}`} scroll={false}>
            <Image
              src={post.src}
              alt={post.title}
              width={1500}
              height={1500}
              sizes="80vw"
            />

            <Views>{post.acessos}</Views>
          </Link>
        </FeedItem>
      ))}
    </Feed>
  );
};
