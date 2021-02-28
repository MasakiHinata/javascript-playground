## React Router Dom

[React Router: Declarative Routing for React](https://reactrouter.com/web/guides/quick-start)

### installi

```
yarn add react-router-dom
```

```jsx
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
```

```jsx
<BrowserRouter>
  <Switch>
    <Route exact path='/'><App /></Route>
  </Switch>
  <Link to='/'>Back To Home</Link>
</BrowserRouter>
```

### BrowserRouter

ルーティングを設定するときには、必ず`Route`を`BrowserRotuer`でラップする

```jsx
<BrowserRouter>
  <Route exact path='/' component={Home} />
</BrowserRouter>
```

### Route ルーティングを設定する

パスと対応するコンポーネントを指定

```jsx
<Route exact path='/' component={Home} />
<Route exact path='/'><Home /></Route>
```

`render`メソッドにより、propsを渡すことができる

```jsx
<Route path='/profile' render={() => <Profile name={'Alice'} />} />
```

### Link リンク先を設定する

```jsx
import { Link } from 'react-router-dom'

<Link to="/">Home</Link>
```

### Switch

`Switch`内にルーティングを記述すると、マッチされた最初のルーティングだけがレンダリングされる。
記述しなかった場合は、一致するすべてがレンダリングされる

```jsx
<Switch>
  <Route path='/profile/:name' component={ProfileWrapper} />
  <Route path='/profile' render={() => <Profile name={'Alice'} />} />
</Switch>
```