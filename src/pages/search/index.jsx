import React from "react";
import { newsApi } from "../../setup/api";

function NewsSearch() {
  const { data, isLoading } = newsApi.useGetGeneralNewsQuery();
  const [search, setSearch] = React.useState("");

  const filteredNews = data?.articles.filter(
    (article) =>
      article.title?.toLowerCase().includes(search.toLowerCase()) ||
      article.description?.toLowerCase().includes(search.toLowerCase()) ||
      article.content?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full h-auto">
      <div>
        <h1 className="text-4xl font-bold my-5 text-center">
          Search For News (Across the World)
        </h1>
      </div>
      <div className="flex justify-start items-center">
        <div className="w-full flex items-center gap-4 max-w-full form-control">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for news"
            className="w-full p-3 h-16 text-lg border border-gray-300 rounded-md input input-bordered focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 p-4">
        {isLoading ? (
          <div className="flex items-center justify-center gap-20 my-48">
            <div className="loader"></div>
            <p>Fetching...</p>
          </div>
        ) : (
          filteredNews?.map((article) => (
            <div
              key={article.title}
              className="card lg:card-side bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={article.urlToImage}
                  className="w-full h-full"
                  alt={article.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{article.title}</h2>
                <p>{article.description}</p>
                <div className="card-actions justify-end">
                  <a
                    href={article.url}
                    target="_blank"
                    className="btn btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default NewsSearch;
