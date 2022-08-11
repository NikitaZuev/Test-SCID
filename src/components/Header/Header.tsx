import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <header>
      <div className='menu__items'>
        <img src="./img/Group 81.svg"/>
        <div className='menu__links'>
          <ul id="navbar">
            <li><a href="#">Кейсы</a></li>
            <li><a className='link_stars' href="#"><img src='../../img/Union.svg'/>Бизнесу</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
          <button className='btn'>Заказать звонок</button>
        </div>
      </div>
    </header>
  )
}

export default Header