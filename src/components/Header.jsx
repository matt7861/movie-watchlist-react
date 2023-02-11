const Header = ({ updateSearch }) => {
  return (
    <section className="search-header padding-sides">
      <div className="search-header__title">
        <h1>Find your film</h1>
        {/* <a href="#">My Watchlist</a> */}
      </div>

      <form
        id="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          updateSearch(e.target.search.value);
        }}
        className="search-form"
      >
        <input placeholder="Search movies..." name="search" type="text" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Header;
