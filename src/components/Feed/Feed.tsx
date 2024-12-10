import { IPost } from "@/actions/posts-get";
import { FeedPosts } from "./FeedPosts";

export const Feed = ({ posts }: { posts: IPost[] }) => {
  return (
    <div>
      <FeedPosts posts={posts} />
    </div>
  );
};
