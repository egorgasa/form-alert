import React from 'react';
import Modal from './Modal';
import state from '../store/name'
import { observer } from 'mobx-react-lite';

const MainPage: React.FC = observer (() =>
{
  
      return(<>
        <div className="main show">
          <div className="main__dialog">
              <div className="main__content">
                  <form onSubmit={state.onSubmit}>
                      <div className="main__title">Введите вашу Имя и Фамилию</div>
                      <input 
                      required 
                      placeholder="Ваше имя"
                      name="name"
                      type="text" 
                      value={state.firstName}
                      onChange={state.FirstName}
                      />
                      <input 
                      required
                      placeholder="Ваша фамилия"
                      name="lastName"
                      type="text"
                      value={state.lastName}
                      onChange={state.LastName}
                      />
                      <button className="btn btn_dark btn_min">Готово</button>
                  </form>
              </div>
          </div>
      </div>
          <Modal
          firstName={state.firstName}
          lastName={state.lastName}
          stile={state.stile}
          changeStile={state.changeStile}
          />
          </>
      )

})

export default MainPage;