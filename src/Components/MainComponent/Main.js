import React,{Component} from 'react';
import Header from "../NavigationComponents/HeaderComponent/Header";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import "./main.sass";
import announcement from "../../assets/images/2020_basvuru_duyuru.png";
import next from "../../assets/images/keyboard_arrow_right-24px.png";
import new1 from "../../assets/images/1.png";
import new2 from "../../assets/images/ERD_1373.png";
import new3 from "../../assets/images/IMG-20191130-WA0014.png";
import new4 from "../../assets/images/Linktera_Veri_Analitigi_Hitachi_IDC_Turkiye.png";
import userIcon from "../../assets/images/profile_icon.png";
import adv1 from "../../assets/images/adv1.png";
import adv2 from "../../assets/images/adv2.png";

class Main extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="main-area">
          <div className="main-area-header">
              <Header />
          </div>
          <div className="main-area-inner">
              <div className="item item-1">
                <h2>DUYURULAR</h2>
                <img src={announcement}/>
                <img className="next-slider" src={next}/>
              </div>
              <div className="item item-2">
                <h2>DOĞUM GÜNLERİ</h2>
                <ul>
                  <li>
                    <img src={userIcon}/>
                    <div>
                      <p className="name">Lorem Ipsum</p>
                      <small className="email">loremipsum@linktera.com.tr</small>
                      <span className="celebrate">Doğum Gününü Kutla</span>
                    </div>
                  </li>
                    <li>
                      <img src={userIcon}/>
                      <div>
                        <p className="name">Lorem Ipsum</p>
                        <small className="email">loremipsum@linktera.com.tr</small>
                        <span className="celebrate">Doğum Gününü Kutla</span>
                      </div>
                    </li>
                  <li>
                    <img src={userIcon}/>
                    <div>
                      <p className="name">Lorem Ipsum</p>
                      <small className="email">loremipsum@linktera.com.tr</small>
                      <span className="celebrate">Doğum Gününü Kutla</span>
                    </div>
                  </li>
                </ul>
                <div className="see-more">
                  Daha Fazlası
                </div>
              </div>
              <div className="item item-3">
                <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
                />
              </div>
              <div className="item item-4">
                <h2>AÇIK POZİSYONLAR</h2>
                <ul>
                  <li><p>Senior .Net Software Developer</p></li>
                  <li><p>Senior .Net Software Developer</p></li>
                  <li><p>Senior .Net Software Developer</p></li>
                  <div className="see-more">
                    Daha Fazlası
                  </div>
                </ul>
              </div>
              <div className="item item-5">
                <h2>HABERLER</h2>
                <div>
                  <img src={new1}/>
                  <div>
                    <p>Veri Analitiği Etkinliği</p>
                    <smal>Lorem ipsum dolor sit amet, consectetur adipiscing elit</smal>
                  </div>
                </div>
                <div>
                  <img src={new2}/>
                  <div>
                    <p>Kış Sporları Kulübü Palandöken'de!</p>
                    <smal>Lorem ipsum dolor sit amet, consectetur adipiscing elit</smal>
                  </div>
                </div>
                <div>
                  <img src={new3}/>
                  <div>
                    <p>Yelken Kulübü Antremanda! </p>
                    <smal>Lorem ipsum dolor sit amet, consectetur adipiscing elit</smal>
                  </div>
                </div>
                <div>
                  <img src={new4}/>
                  <div>
                    <p>Veri Analitiği Etkinliği</p>
                    <smal>Lorem ipsum dolor sit amet, consectetur adipiscing elit</smal>
                  </div>
                </div>
                <div className="see-more">
                  Daha Fazlası
                </div>
              </div>
              <div className="item item-6">
                <h2>ARAMIZA KATILANLAR</h2>
                  <ul>
                    <li>
                      <img src={userIcon}/>
                      <div>
                        <p className="name">Lorem Ipsum</p>
                        <small className="email">loremipsum@linktera.com.tr</small>
                        <span className="celebrate">Doğum Gününü Kutla</span>
                      </div>
                    </li>
                    <li>
                      <img src={userIcon}/>
                      <div>
                        <p className="name">Lorem Ipsum</p>
                        <small className="email">loremipsum@linktera.com.tr</small>
                        <span className="celebrate">Doğum Gününü Kutla</span>
                      </div>
                    </li>
                    <li>
                      <img src={userIcon}/>
                      <div>
                        <p className="name">Lorem Ipsum</p>
                        <small className="email">loremipsum@linktera.com.tr</small>
                        <span className="celebrate">Doğum Gününü Kutla</span>
                      </div>
                    </li>
                  </ul>
                  <div className="see-more">
                    Daha Fazlası
                  </div>
              </div>
              <div className="item item-7">
                <h2>İLANLAR</h2>
                <img src={adv1}/>
                <img src={adv2}/>
              </div>
              <div className="item item-8">
                <h2>TELEFON REHBERİ</h2>
              </div>
              <div className="item item-9">
                <h2>DÖKÜMANLAR</h2>
              </div>
              <div className="item item-10">
                <h2>GERİ DÖNÜŞ</h2>
              </div>
              <div className="item item-11">
                <h2>MASRAF BİLDİRİMİ</h2>
              </div>
          </div>
      </div>
    );
  }
}

export default Main;
