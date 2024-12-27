import React from 'react';
import { Header } from './Header';

export function Home() {
  return (
    <div>
        <Header basket={[]} sum={0}/>
      <h1>Домашняя страница</h1>
    </div>
  )
}
