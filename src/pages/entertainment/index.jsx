import Headlines from "../../components/news/headlines";
import { newsApi } from "../../setup/api";

function Entertainment() {
  const { data, isLoading } = newsApi.useGetEntertainmentNewsQuery();
  return (
    <Headlines data={data} isLoading={isLoading} title="Entertainment News" />
  );
}

export default Entertainment;
