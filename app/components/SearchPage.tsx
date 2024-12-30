import Form from "next/form";

function SearchPage() {
  return (
    <Form
      action="/search"
      classID="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
    >
      <input
        type="text"
        name="query"
        placeholder="Search Article"
        className="text-sm bg-gray-100 dark:bg-slate-950 text-gray-800 dark:text-gray-200 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-800 focus:ring-opacity-50 border dark:border-purple-950 w-full max-w-4xl"
      />
    </Form>
  );
}

export default SearchPage;
