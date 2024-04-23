import Headlines from "../../components/news/headlines";
import { newsApi } from "../../setup/api";

function Environment() {
  const { data, isLoading } = newsApi.useGetScienceNewsQuery();
  return (
    <Headlines data={data} isLoading={isLoading} title="Environmental News" />
  );
}

export default Environment;
