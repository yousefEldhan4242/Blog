import Link from "next/link";
import Posts from "./components/Posts";
import { Suspense } from "react";
import loadingScreen from "./loading";

export const metadata = {
  title: "Home Page",
};

export default async function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/createPost"
        className="bg-blue-700 p-5 font-bold text-white rounded-2xl m-10 block w-fit"
      >
        Create Post
      </Link>
      <Suspense fallback={<loadingScreen></loadingScreen>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Posts />
        </div>
      </Suspense>
    </div>
  );
}
