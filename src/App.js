import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import {useHistory, useParams} from 'react-router-dom'
// import logo from './trivia.png';
// import './App.css';
import debounce from 'lodash/debounce'
import copy from 'clipboard-copy'

const Header = (props) => {
    const [show, setShow] = useState(false)
    const [searchType, setSearchType] = useState('i')
    const oc = (e) => {
        props.onChangeSearch(e.target.value, searchType)
    }
    return (
        <div style={{backgroundColor: 'grey', height: 60, width: '100%', marginBottom: 100}}>
            <div data-testid="profile-top-btn">user</div>
            <div data-testid="page-title">{props.title}</div>
            <button data-testid="search-top-btn" onClick={() => setShow(!show)}>search</button>
            {
                show &&
                    <div>
                        <input type="search" data-testid="search-input"
                               placeholder="buscar receitas" onChange={oc}/>
                        <input data-testid="ingredient-search-radio"
                               type="radio" name="searchType" checked={searchType === 'i'} value="i" onChange={(e) => {
                        setSearchType(e.target.value)}}/> Ingrediente
                        <input data-testid="name-search-radio"
                               type="radio" name="searchType"  checked={searchType === 'n'} value="n" onChange={(e) => {
                        setSearchType(e.target.value)}}/> Nome
                        <input data-testid="first-letter-search-radio"
                               type="radio" name="searchType"  checked={searchType === 'l'} value="l" onChange={(e) => {
                        setSearchType(e.target.value)}}/> Primeira letra
                    </div>
            }
        </div>
    )
}

const BottomMenu = (props) => {
    return (<div style={{display: 'flex'}}>
        <button data-testid="food-bottom-btn" style={{flex: 1}}>C</button>
        <button data-testid="explore-bottom-btn" style={{flex: 1}}>E</button>
        <button data-testid="drinks-bottom-btn" style={{flex: 1}}>B</button>
    </div>)

}

const Details = () => {
    const {from, id} = useParams()
    const history = useHistory()
    const [recipe, setRecipe] = React.useState([])
    const getIngredients = (l = recipe) => {
        const arr = []
        Object.keys(l).forEach(e => {
            if (e.includes('strIngredient')) {
                const measure = e.replace('strIngredient', 'strMeasure')
                if (l[e]) {
                    arr.push({ingredient: l[e], measure: l[measure]})
                }
            }
        })
        return arr
    }
    useEffect(() => {
        // [1,2,3,4,5].forEach((i) => {
        if(from === 'comida') {
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(function (response) {
                    setRecipe(response.data.meals[0])
                })
        } else {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(function (response) {
                    console.log(response)
                })
        }

        // })

    }, [])
    return (<div>
           <img data-testid="recipe-photo" style={{width: '100%', height: 320}} src={recipe.strMealThumb || recipe.strDrinkThumb} />
           <p data-testid="recipe-title">{recipe.strMeal || recipe.strDrink}</p>
           <p>{recipe.strArea} - {recipe.strCategory}</p>
        <button data-testid="favorite-btn"> Favoritar</button>
        <button data-testid="share-btn" onClick={() => copy('http://localhost:3000/receitas/comida/52779')}> Compartilhar</button>
        {
            getIngredients().map((i, index) => {
                return <div>
                    <span data-testid={`${index}-ingredient-name`}>{i.ingredient}</span> - <span data-testid={`${index}-ingredient-measure`}>{i.measure}</span>
                </div>
            })
        }
        <div data-testid="instructions">{recipe.instructions}</div>
        <div data-testid="video">{recipe.strYoutube}</div>
        <button data-testid="start-recipe-btn" onClick={() => history.push('/')}>Iniciar Receita</button>
    </div>)
}

const Home = () => {
    const [cards, setCards] = React.useState([])
    const [categories, setCategories] = React.useState([{strCategory: 'All', idCategory: 0}])
    const history = useHistory()
    const [category, setCategory] = useState(null)
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(function (response) {
                setCards(response.data.meals)
            })
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(function (response) {
                setCategories(categories.concat(response.data.categories.slice(0,5)))
            })
    }, [])

    useEffect(() => {
       if (category && category !== 'All') {
           axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
               .then(function (response) {
                   setCards(response.data.meals)
               })
       } else if (category === 'All') {
           axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
               .then(function (response) {
                   setCards(response.data.meals)
               })
       }
    }, [category])

    const onChangeSearch = (val, searchType) => {
        if (searchType === 'i') {
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${val}`)
                .then(function (response) {
                    setCards(response.data.meals)
                })
        } else if (searchType === 'n') {
            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
                .then(function (response) {
                    setCards(response.data.meals)
                })

        } else if (searchType === 'l') {

            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${val}`)
                .then(function (response) {
                    setCards(response.data.meals)
                })
        }
    }

    const dbOnChangeSearch = debounce(onChangeSearch, 600)

    return <div>
        <Header title="Comidas" onChangeSearch={dbOnChangeSearch}/>
        {
            categories.map((c) => {
                return <button onClick={() => {
                    setCategory(c.strCategory)
                }
                } data-testid={`${c.strCategory}-category-filter`}>{c.strCategory}</button>
            })
        }
        {cards.map((r, index) => {
            console.log(r.strCategory)
            return <div key={r.idMeal} onClick={() => history.push(`/receitas/comida/${r.idMeal}`)}>
                <img data-testid={`${index}-card-img`} src={r.strMealThumb} style={{width: 200, heigh: 200}}/>
                <p data-testid={`${index}-card-category`}>{r.strCategory}</p>
                <p data-testid={`${index}-card-name`}>{r.strMeal}</p>
            </div>
        })}
        <BottomMenu/>
    </div>
}

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <input data-testid="email-input"
                   type="email" onChange={e => setEmail(e.target.value)}/>
            <input data-testid="password-input"
                   type="password" onChange={e => setPassword(e.target.value)}/>
            <button data-testid="login-submit-btn"
                    disabled={!email || password.length < 6}
                    onClick={() => {
                localStorage.setItem('meals-token',  '1')
                localStorage.setItem('cocktails-token', '1')
            }}>Login</button>
        </div>
    )
}

export default function App() {
    const [state, setState] = React.useState({})
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home setState={setState} state={state}/>
            </Route>
            <Route path="/comidas">
                <Home setState={setState} state={state}/>
            </Route>
            <Route path="/login" exact>
                <Login setState={setState} state={state}/>
            </Route>
            <Route path="/receitas/:from/:id">
                <Details setState={setState} state={state}/>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}
