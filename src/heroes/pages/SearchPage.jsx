import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../hooks/useForm';
import { gerHeroesByName } from '../helpers/getHeroesByName';
import { HeroesCard } from '../components/HeroesCard';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const query = queryString.parse(location.search);
  const { q = '' } = query;

  const heroes = gerHeroesByName(q);

  console.log(heroes)
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  console.log({ location })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}

            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ?
              <div className="alert alert-primary animate__animated animate__fadeIn">
                Search a hero
              </div>
              : (heroes.length === 0) ?
                <div className="alert alert-danger animate__animated animate__fadeIn">
                  No hero with <b>{q}</b>
                </div>
                :
                heroes.map((hero) => (
                  <HeroesCard key={hero.id} {...hero} />
                )) 
          }


        </div>
      </div>
    </>
  )
}
