import Headlines from "../../components/news/headlines";
import { newsApi } from "../../setup/api";

function Business() {
  const { data, isLoading } = newsApi.useGetBusinessNewsQuery();

  return <Headlines title="Business News" data={data} isLoading={isLoading} />;
}

export default Business;
