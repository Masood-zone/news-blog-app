import { LazyLoadImage } from "react-lazy-load-image-component";
import { newsApi } from "../../setup/api";
import LatestNews from "../../components/news/latestNews";

function Home() {
  const { data, isLoading } = newsApi.useGetGeneralNewsQuery();
  const generalNews = data?.articles;
  console.log("top news", generalNews);
  return (
    <section className="">
      {/* Latest News*/}
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-4xl font-bold py-3">Lastest News</h1>
        <LatestNews />
      </div>
      {/* Popular News*/}
      <div className="flex flex-col items-center max-md:items-center gap-5 mt-14">
        <div className="py-10">
          <h1 className="text-3xl font-bold">Popular News</h1>
        </div>
        <article className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 grid-rows-2  gap-10 max-md:mx-auto">
          {isLoading ? (
            <div className="w-[900px] h-32 flex items-center justify-center col-span-full  mx-auto max-md:w-auto max-sm:w-auto max-[499px]:w-auto max-[399px]:w-auto">
              <div className="loader"></div>
            </div>
          ) : generalNews.length > 0 ? (
            generalNews?.map((news) => (
              <div
                key={news.url}
                className="card w-96 h-auto bg-base-100 shadow-xl rounded-box"
              >
                <figure>
                  <LazyLoadImage
                    src={news.urlToImage}
                    alt={news.title}
                    wrapperProps={{
                      style: {
                        transitionDuration: "0.5s",
                        transitionDelay: "0s",
                      },
                    }}
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
                      className="btn btn-neutral text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <p className="text-lg font-medium text-left">No News Found</p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default Home;
