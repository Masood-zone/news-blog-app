import { newsApi } from "../../setup/api";

function LatestNews() {
  const { data: generalNews, isLoading } = newsApi.useGetGeneralNewsQuery();
  const { data: politicsNews } = newsApi.useGetPoliticsNewsQuery();
  const { data: businessNews } = newsApi.useGetBusinessNewsQuery();
  const { data: entertainmentNews } = newsApi.useGetEntertainmentNewsQuery();
  const mainNews =
    generalNews?.articles[
      Math.floor(Math.random() * generalNews.articles.length)
    ];

  const politics =
    politicsNews?.articles[
      Math.floor(Math.random() * politicsNews.articles.length)
    ];

  const business =
    businessNews?.articles[
      Math.floor(Math.random() * businessNews.articles.length)
    ];
  const entertainment =
    entertainmentNews?.articles[
      Math.floor(Math.random() * entertainmentNews.articles.length)
    ];
  const otherNews = generalNews?.articles.slice(1, 4);

  console.log("main news", mainNews);
  console.log("politics", politics);
  //console.log("business", business);
  //console.log("entertainment", entertainment);
  //console.log("other news", otherNews);

  return (
    <section className="grid grid-cols-3 grid-rows-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 overflow-hidden h-screen max-md:h-[990px]">
      {/* Latest General News*/}
      <div className="rounded-box w-auto col-span-2 h-full my-2 mx-2 card lg:card-side border-2 ">
        <figure className="">
          <img
            src={mainNews?.urlToImage}
            alt={mainNews?.title}
            className="w-full h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{mainNews?.title}</h2>
          <p>{mainNews?.description}</p>
          <a href={mainNews?.url} target="_blank" className="text-blue-500">
            Read More
          </a>
        </div>
      </div>
      {/* Latest Politics News*/}
      <div className=" rounded-box px-2 py-1 w-auto h-auto my-2 max-xl:hidden col-span-1 row-start-1 row-end-4 overflow-y-scroll">
        {otherNews?.map((news) => (
          <div key={news.url} className="card image-full my-5">
            <figure>
              <img
                src={news.urlToImage}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.description}</p>
              <a href={news.url} target="_blank" className="text-blue-500">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Latest Business News*/}
      <div className=" rounded-box px-2 py-1 w-auto h-auto my-2 mx-2 max-md:col-span-2 card image-full">
        <figure>
          <img
            src={business?.urlToImage}
            alt={business?.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{business?.title}</h2>
          <p>{business?.description}</p>
          <a href={business?.url} target="_blank" className="text-blue-500">
            Read More
          </a>
        </div>
      </div>
      {/* Latest Entertainment News*/}
      <div className=" rounded-box w-auto h-auto my-2 mx-2 max-md:col-span-2 card image-full overflow-hidden mt-10">
        <figure>
          <img
            src={entertainment?.urlToImage}
            alt={entertainment?.title}
            className="w-[500px] h-[500px] object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{entertainment?.title}</h2>
          <p>{entertainment?.description}</p>
          <a
            href={entertainment?.url}
            target="_blank"
            className="text-blue-500"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
