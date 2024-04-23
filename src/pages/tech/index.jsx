import Headlines from "../../components/news/headlines";
import { newsApi } from "../../setup/api";

function TechTrends() {
  const { data, isLoading } = newsApi.useGetTechnologyNewsQuery();
  return (
    <Headlines data={data} isLoading={isLoading} title="Technology News" />
  );
}

export default TechTrends;
