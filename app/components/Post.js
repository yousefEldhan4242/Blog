export default async function product(props) {
  let res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${props.postId}`
  );
  let post = await res.json();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg bg-white rounded-lg overflow-hidden shadow-lg p-6 w-full">
        <div className="font-bold text-xl mb-2 text-gray-900">{post.title}</div>
        <p className="text-gray-700 text-base mb-4">{post.body}</p>
        <div className="flex justify-between text-gray-900">
          <p>User ID: {post.userId}</p>
          <p>Post ID: {post.id}</p>
        </div>
      </div>
    </div>
  );
}
