function Headlines({ data, isLoading, title }) {
  return (
    <section className="flex flex-col items-center">
      <div className="py-10">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-md:mx-auto">
        {isLoading ? (
          <div className="w-[900px] h-32 flex items-center justify-center col-span-full mx-auto max-md:w-auto max-sm:w-auto max-[499px]:w-auto max-[399px]:w-auto">
            <div className="loader"></div>
          </div>
        ) : data?.articles.length > 0 ? (
          data?.articles.map((news) => (
            <div
              key={news.url}
              className="card w-96 max-[380px]:w-80 h-auto bg-base-100 shadow-xl rounded-box"
            >
              <figure>
                <img
                  src={news.urlToImage}
                  alt={news.title}
                  width="600"
                  height="400"
                  className="skeleton"
                />
              </figure>
              <div className="card-body px-3 py-4">
                <h2 className="card-title hover:underline hover:cursor-pointer">
                  {" "}
                  {news.title}
                </h2>
                <div>
                  <p className="text-xs py-1 text-gray-500">
                    Date: {new Date(news.publishedAt).toDateString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    Author: {news.author ? news.author : "Anonymous"}
                  </p>
                </div>
                <p>{news.description}</p>
                <div className="card-actions justify-end">
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="">
            <h1>No news available</h1>
          </div>
        )}
      </article>
    </section>
  );
}

export default Headlines;
