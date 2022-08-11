import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer>
      <div className='footer__items'>
        <div className='img__footer'><img src=" "/></div>
        <div className='social__footer w-100'>
          <p>Для связи</p>
          <a className='link__footer' href='tel:+79261266457'><img src="../../img/Social Icons1.svg"/>7 (926) 126-64-57</a>
          <a className='link__footer' href='mailto:79261266457'><img src="../../img/Social Icons2.svg"/>7 (926) 126-64-57</a>
          <a className='link__footer' href='tg://resolve?domain=79261266457'><img src="../../img/Social Icons3.svg"/>7 (926) 126-64-57</a>
        </div>
        <div className='company__links w-100'>
          <p>Компания</p>
          <a className='link__footer' href="#">Услуги</a>
          <a className='link__footer' href="#">Кейсы</a>
          <a className='link__footer' href="#">Контакты</a>
          <a className='link__footer' href="#">Сотрудничество</a>
        </div>
        <div className='documents__links w-100'>
          <p>Документы</p>
          <a className='link__footer' href="#">Политика <br/> конфиденциальности</a>
          <a className='link__footer' href="#">Пользовательское <br/> соглашение</a>
        </div>
        <div className='any__social w-100'>
          <p>Будьте в курсе</p>
          <div className='input__social'>
            <input placeholder='E - mail'></input>
            <button><img src='../../img/send.svg'/></button>
          </div>
          <div className='social__inputbox'>
            <a href="#"><img src='../../img/Social Icons4.svg'/></a>
            <a href="#"><img src='../../img/Social Icons5.svg'/></a>
            <a href="#"><img src='../../img/Social Icons6.svg'/></a>
          </div>
        </div>
      </div>
      <p className='copyright'>Copyright © 2022 SCID</p>
    </footer>
  )
}

export default Footer