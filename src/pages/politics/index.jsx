import { newsApi } from "../../setup/api";
import Headlines from "../../components/news/headlines";

function Politics() {
  const { data, isLoading } = newsApi.useGetPoliticsNewsQuery();
  return <Headlines data={data} isLoading={isLoading} title="Politics" />;
}

export default Politics;
