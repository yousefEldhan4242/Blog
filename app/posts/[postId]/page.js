import Post from "../../components/Post";

export const metadata = {
  title: "View Post",
};
export default function Home({ params }) {
  return <Post postId={params.postId} />;
}
