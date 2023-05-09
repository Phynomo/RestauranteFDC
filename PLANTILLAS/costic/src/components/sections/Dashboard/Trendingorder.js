import React, { Component } from 'react';
import axios from 'axios';

import img1 from '../../../assets/img/costic/food-5.jpg';
import img2 from '../../../assets/img/costic/food-2.jpg';
import img3 from '../../../assets/img/costic/food-4.jpg';
import img4 from '../../../assets/img/costic/food-3.jpg';

const trendfood = [
    {
        photo: img1,
        title: "Meat Stew",
        price: "$25.00",
        order: "15",
        income: "$175",
        resposnivecls: "col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-lg-20",
    },
    {
        photo: img2,
        title: "Pancake",
        price: "$50.00",
        order: "75",
        income: "$275",
        resposnivecls: "col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-lg-20",
    },
    {
        photo: img3,
        title: "Burger",
        price: "$45.00",
        order: "85",
        income: "$575",
        resposnivecls: "col-xl-3 col-lg-6 col-md-6 col-sm-6",
    },
    {
        photo: img4,
        title: "Saled",
        price: "$85.00",
        order: "175",
        income: "$775",
        resposnivecls: "col-xl-3 col-lg-6 col-md-6 col-sm-6",
    },
]

class Trendingorder extends Component {

    state = {
        rows: []
      }

      async componentDidMount() {
        try {
          const response = await axios.get('api/Platillos/PlatillosGraficos');
          this.setState({
            rows: response.data.data,
          });
        } catch (error) {
          console.error(error);
        }
      }



    render() {
        return (
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <h6>Platillos mas vendidos</h6>
                </div>
                <div className="ms-panel-body">
                    <div className="row">
                        {this.state.rows.map((item, i) => (
                            <div key={i} className='col-xl-3 col-lg-6 col-md-6 col-sm-6'>
                                <div className="ms-card no-margin">
                                    <div className="ms-card-img">
                                        <img src='https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/hamburguesas.jpg.webp?itok=4airsSTm' alt="card_img" />
                                    </div>
                                    <div className="ms-card-body">
                                        <div className="ms-card-heading-title">
                                            <h6>{item.plat_Nombre.slice(0,14)}...</h6>
                                            <span className="green-text"><strong>{item.plat_Precio} Lps</strong></span>
                                        </div>
                                        <div className="ms-card-heading-title">
                                            <p>Ordenes <span className="red-text">{item.cantidadPlatillos}</span></p>
                                            <p>Renta <span className="red-text">{item.plat_Precio * item.cantidadPlatillos} Lps</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Trendingorder;