import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react'
export default function App() {
  const [hints, setHints] = useState([]);
  const [searchValue, setSearchValue] = useState('')
  const [comment, setComment] = useState([])
  
  
  async function getApi() {
    const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1437f4167fmsh4c35a70fd12f8e7p1c9a12jsn7a031516feab',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setHints(result.hints)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getApi();
  },[])
  return (
    <div id='allData'><input type='search' placeholder='Search' onChange={(e) => {
      e.preventDefault()
         setSearchValue(e.target.value);
      }}/>
    <div className="App">
      {
        hints.map((elem,idx) => {
          if (elem.food.label.includes(searchValue)) {
            return (
              <CardTemplate elem={elem} idx={idx} />
            )
          }else return
        })
        }
      </div>
    </div>
  );
}

function CardTemplate(props) {
  const {elem,idx}=props
  const [comment, setComment] = useState('')
  const [commentCount,setCommentCount]=useState(0)
  console.log(comment);
  return (

    <div id="card">
      <img key={elem.food.uri} src={elem.food.image} alt='  ...loading' />
      <label key={elem.food.label}>{elem.food.label}</label>

      <form onSubmit={(e) => {
        e.preventDefault();
        setComment(`${comment}${e.target.comment.value}`)
        e.target.comment.value = '';
        const btn = document.getElementById(`saveButton${idx}`)
        btn.setAttribute('disabled', 'false')
        setCommentCount(0)
      }}>
        <textarea id='commentArea' maxLength={300} name='comment' rows={2} onChange={(e) => {
          if (commentCount > 9) {
            const allText = e.target.value
            const text = allText.substring(0, 9) + <ExtraText highlights={allText.substring(9)} />;
            e.target.value = text;
          }
          setCommentCount(commentCount+1)
          const btn = document.getElementById(`saveButton${idx}`)
          btn.removeAttribute('disabled')
        }} />
        <span id='counter'>{300-commentCount}</span>
        <button type='submit' id={`saveButton${idx}`} disabled>Save</button>
      </form>
      <label id='labelComment'>{comment}</label>
    </div>
  )
}

function ExtraText(props) {
  return (
    <span id='highlight'>{props }</span>
  )
}