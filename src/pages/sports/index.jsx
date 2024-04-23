import Headlines from "../../components/news/headlines";
import { newsApi } from "../../setup/api";

function Sports() {
  const { data, isLoading } = newsApi.useGetSportsNewsQuery();
  return <Headlines title="Sports News" data={data} isLoading={isLoading} />;
}

export default Sports;
