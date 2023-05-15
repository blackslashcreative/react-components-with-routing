function App(){
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData(){
      const response = await fetch('./books.json');
      const json     = await response.json();
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);
  console.log('loaded: ', loaded, 'data: ', data);

  return(<>
    <Navbar/>
    <div id="content" className="container mt-5">
      {loaded && data.books.map((book,i) => <mit-book 
      title={book.title}
      author={book.author}
      description={book.description}
      key={i}/>)}
    </div>
  </>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)