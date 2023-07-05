import { useParams } from 'react-router-dom MovieinfoComponent from ';
import movie from '../../repository/movie';

export default function MovieInfo() {
  const { id } = useParams();
  const [movieInfoList, setMovieInfoList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMovieById(id) {
    setLoading(true);
    const currentMoviesInfo = await movie.getMoviesByName(id);
    setMovieInfoList(currentMoviesInfo.result);
    setLoading(false);
  }

  console.log(movieInfoList);

  useEffect(() => {
    getMovieById(id);
  }, [id]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {loading ? (
              <div className="spinner">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <MovieinfoComponent movieInfoList={movieInfoList} />
            )}
          </div>
        </div>
      </div>
    </div>
 )
}