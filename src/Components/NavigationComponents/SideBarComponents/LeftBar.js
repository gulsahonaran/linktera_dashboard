import React, { Component } from "react";

import logo from '../../../assets/images/Linktera_Ailem_Logo.png';
import logoBig from '../../../assets/images/Linktera_Ailem_Logo.png';
import avatar from "../../../assets/images/avatar.png";

import "./leftbar.sass";

const MENU_LIST = {
  "Linktera Hakkında": [
    "Linktera Web Sitesi",
    "Linkedin Hesabı",
    "YouTube Kanalı",
    "Oryantasyon Sunumu"
  ],
  "Zaman Girişi":[],
  "İzinlerim":[],
  "Bilgi Bankası":[],
  "ArGe Portalı":[],
  "Mesajlar":[],
  "Yardım":[]
};

class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: -1
    }
  } 

  changeTab = (index) => {
    let active = index;
    if(this.state.activeTab === index){
      active = -1;
    }

    this.setState({activeTab: active});
  }

  renderCollapse = () => {
    let collopseList = [];
    Object.keys(MENU_LIST).map((key,index) => {
      collopseList.push(
        <div className="collapse">
          <div className="collapse-header" onClick={() => this.changeTab(index)} aria-expanded={ this.state.activeTab === index } >
            <p className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne" >
              {key}
            </p>
          </div>
          <div className="collapse-sub" data-open={this.state.activeTab === index } aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="collapse-body">
              <ul>
                {
                  MENU_LIST[key].map((element, index) => {
                    return(
                      <li key={index}>{element}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      )
    });
    return collopseList;
    
  }

  render() {
    return (
      <div className="left-bar">
        <div className="logo-area">
          <img src={logo} alt="logo"/>
        </div>
        <div className="avatar-area">
          <img src={avatar} alt="avatar"/>
        </div>
        <div className="info-area">
          <p>Deniz Arkan</p>
          <small>Data Warehouse Analyst</small>
        </div>
        <div className="collapse-area">
          {
            this.renderCollapse()
          }
        </div>
        <div className="logout-area">
          <p>Çıkış</p>
        </div>
      </div>
    );
  }
}

export default LeftBar;
