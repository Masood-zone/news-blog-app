import Headlines from "../../components/news/headlines";
import { newsApi } from "../../setup/api";

function Health() {
  const { data, isLoading } = newsApi.useGetHealthNewsQuery();
  return <Headlines data={data} isLoading={isLoading} title="Health News" />;
}

export default Health;
