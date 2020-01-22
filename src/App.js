import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
// import logo from './trivia.png';
// import './App.css';


const Home = () => {
    const [cards, setCards] = React.useState([])
    const history = useHistory()
    useEffect(() => {
        // [1,2,3,4,5].forEach((i) => {
            axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
                .then(function (response) {
                    setCards(cards.concat(response.data.meals[0]))
                })
        // })

    }, [])
        console.log(cards)
    return <div>
        {cards.map((r) => {
            return <div onClick={() => history.push(`/receita/${r.idMeal}`)}>
                <img src={r.strMealThumb} style={{width: 200, heigh: 200}}/>
                <p>{r.strCategory}</p>
                <p>{r.strMeal}</p>
            </div>
        })}
    </div>
}

export default function App() {
    const [state, setState] = React.useState({})
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/configurations" component={Configurations}></Route> */}
        {/* <Route path="/game" component={Game}></Route> */}
        {/* <Route></Route> feedbacks */}
        {/* <Route></Route> ranking */}
      </Switch>
    </BrowserRouter>
  );
}
