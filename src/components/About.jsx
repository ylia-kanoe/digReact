import React from 'react';
import { Header } from './Header';

export function About(props) {
  return (
    <div>
        <Header basket={[]} sum={0}/>
      <h2>Мишка Жопа</h2>
      {/* Здесь можно разместить содержимое для страницы "О нас" */}
    </div>
  );
}