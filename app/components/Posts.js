import Link from "next/link";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  let dataList = data.map((post) => {
    return (
      <div
        key={post.id}
        className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between"
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-900">
            {post.title}
          </div>
          <p className="text-gray-700 text-base ">{post.body}</p>
        </div>
        <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
          <p className="text-gray-900 text-base">User ID: {post.userId}</p>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href={`/posts/${post.id}`}
          >
            View
          </Link>
        </div>
      </div>
    );
  });

  return dataList;
}
