export default function ChosenPost({ data, formSubmit, handleInput }) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-10">
      <h1 className="text-xl font-bold mb-5 text-gray-700">Add Post</h1>
      <form onSubmit={formSubmit} className="mt-5">
        <div className="mb-4">
          <label
            data-name="Title"
            htmlFor="PostTitle"
            className="form-label block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="PostTitle"
            placeholder="Post Title"
            aria-describedby="Post Title"
            name="title"
            value={data.title}
            onChange={handleInput}
          />
        </div>

        <div className="mb-4">
          <label
            data-name="Body"
            htmlFor="PostPrice"
            className="form-label block text-gray-700 text-sm font-bold mb-2"
          >
            body
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="PostPrice"
            placeholder="Post Price"
            aria-describedby="Product Price"
            name="body"
            value={data.price}
            onChange={handleInput}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
