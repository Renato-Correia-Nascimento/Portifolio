import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css/';

import './global.css';
import { DashboardMeetime } from './components/DashboardMeetime';

const posts = [
  {
      id: 1, 
      author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },  
    ],
    publishedAt: new Date('2022-12-22 10:00:00')
  },
  {
      id: 2, 
      author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/90713455?v=4',
      name: 'Renato Nascimento',
      role: 'Business Intelligence'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },  
    ],
    publishedAt: new Date('2022-12-22 06:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
      <div>
        <DashboardMeetime/>
      </div>
      </div>
    </div>
  )
}