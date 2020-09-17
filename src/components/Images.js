import React from "react";
import "../index.min.css";


const ValueEl = (prop) => {
  return (prop) ? prop : '';
}

const changeColorHeart = (e) => {
  e.target.classList.toggle('clicks-heart');  
}


const CreateImgForm = ({ flag }) => {
  const title = ValueEl(flag.attributes.title),
        first_name = ValueEl(flag.relationships.attributes.first_name),
        last_name = ValueEl(flag.relationships.attributes.last_name),
        middle_name = ValueEl(flag.relationships.attributes.middle_name),
        rooms = ValueEl(flag.attributes.rooms),
        adressStreet = ValueEl(flag.attributes.address.street),
        adressHouse = ValueEl(flag.attributes.address.house),
        adressRoom = ValueEl(flag.attributes.address.room),
        s = ValueEl(flag.attributes.area);
        
  return (
    <li>
      <img src="https://formeducationforme.ru/ex/nokia.png" alt="nokia" />
      <div className="title">
          <a href="facebook.com">Ссылка на квартиру в МЛСН</a>
          <p className="title-adress">{title}</p>
          <p className="title-rooms">Количество комнат: {rooms}</p>
          <p className="title-rooms">Общая площадь: {s} м. кв.</p>
          <p className="title-adressAll">Адрес: {adressStreet} {adressHouse} квартира {adressRoom}</p>
          <p className="agent">Ваш агент</p>
          <p>{last_name} {middle_name} {first_name}</p>
      </div>
      <div className="svg-heart">
          <img className="clicks-heart" onClick={changeColorHeart} src="https://formeducationforme.ru/ex/12138redheart_110427.svg" alt="heart" />
      </div>
    </li>
  );
};


export default CreateImgForm;

