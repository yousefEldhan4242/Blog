import Product from "../../components/Post";

export const metadata = {
  title: "View Post",
};
export default function Home({ params }) {
  return <Product postId={params.postId} />;
}
