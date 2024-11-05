import React from 'react'
import './Header.scss'
import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
    <>

      <Title titles="Транспорт"/>
      <div className="wrap">
        <Card name="Велосипед Валеры" image="https://stihi.ru/pics/2010/10/10/5142.jpg"/>
        <Card name="Носвай" image="https://i.pinimg.com/736x/b1/12/29/b112295c71c40fe452d396bbd99c9c37.jpg"/>
        <Card name="лак венец тамаев трахает овец" image="https://s0.bloknot-volzhsky.ru/thumb/850x0xcut/upload/iblock/673/323232.jpg"/>
        <Card name="ПОНОС ПОНОСОВ" image="https://masterpiecer-images.s3.yandex.net/5fd657263b93dcd:upscaled"/>
        <Card image="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"/>
      </div>
    </>
  )
}

export default Header
