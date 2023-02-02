import { useGetMovieQuery } from "@store/apiMovie";
import { useParams } from "react-router-dom";

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetMovieQuery(id as string);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data && (
        <div>
          <h1>{data.Title}</h1>
          <p>{data.Plot}</p>
        </div>
      )}
    </div>
  ); 
};
