import React from 'react'
import { NextSeo } from 'next-seo'

import styles from './index.module.scss'

const Home = () => (
  <>
    <NextSeo
      title='Home'
      description='This is my home!'
    />

    <div className={styles.body}>
      <h1>Hello World!</h1>
    </div>
  </>
)

export default Home
