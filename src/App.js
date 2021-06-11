import './App.css';
import {useState, useEffect} from 'react';

import Header from './components/Header';
import Stories from './components/Stories';
import Post from './components/Post';
import Feed from './components/Feed';

import {db} from './firebase.js';

function App() {

  const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection('posts').onSnapshot(snapshot=>{
        setPosts(snapshot.docs.map(function(doc){
          return{info:doc.data()}
        
        }))
      })
    }, [])

  return (
      <div>
        <Header/>
        <Stories/>
        <Post/>
        
        {
        posts.map(function(val){
          return(
        <Feed nome={val.info.nome}
              conteudo={val.info.conteudo}
              hora={val.info.hora} 
              img={val.info.img}
              />
            )
          })
        }


      </div>
  );
}

export default App;
