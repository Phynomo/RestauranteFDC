import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Recentorder from './Recentorder';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { OverlayTrigger, Tooltip, Tab, Nav } from "react-bootstrap";
import Chart from './Chart';
import Trendingorder from './Trendingorder';
import Orderchart from './Orderchart';
import GoogleChart from "react-google-charts";
import Restaurantlisting from './Restaurantlisting';
import axios from 'axios';
import { data } from 'jquery';

class Homecontent extends Component {
    state = {
        rows: [],
        dataChart: [],
        dataChart2: []
    }

    async componentDidMount() {
        try {
            const response = await axios.get('api/Platillos/PlatillosGraficos');
            this.setState({
                rows: response.data.data,
            });
            const response2 = await axios.get('api/Facturas/FacturasPorSucursalChart');
            const mappedData = response2.data.data.map(item => {
                return {
                    x: item.sucu_Nombre,
                    y: item.cantidadFacturas,
                };
            });
            this.setState({
                dataChart: mappedData,
            });
            const response3 = await axios.get('api/MetodosPago/MetodoPagoChart');
            const mappedData3 = response3.data.data.map(item => {
                return {
                    x: item.metp_Descripcion,
                    y: item.catidadMetodosPago,
                };
            });
            this.setState({
                dataChart2: mappedData3,
            });

            console.log(this.state.dataChart)
        } catch (error) {
            console.error(error);
        }
    }


    render() {
        const data = this.state.dataChart.map(item => [item.x, item.y]);
        const data2 = this.state.dataChart2.map(item => [item.x, item.y]);
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="db-header-title">Bienvenide</h1>
                    </div>
                    <div className="col-12">
                        <Chart />
                    </div>
                    {/* Recent Orders Requested */}
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel">
                            <div className="ms-panel-header">
                                <div className="d-flex justify-content-between">
                                    <div className="align-self-center align-left">
                                        <h6>Facturas de cada Sucursal</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-panel-body">
                                <GoogleChart
                                    height={'300px'}
                                    width={"100%"}
                                    chartType="BarChart"
                                    loader={<div>Cargando datos</div>}
                                    data={[['Sucursal', 'Cantidad de Facturas'], ...data]}
                                    options={{
                                        isStacked: true,
                                        legend: { position: 'none' },
                                        colors: ['#ff443c', '#7a92a3', '#4da74d'],
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '2' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="ms-panel ms-panel-fh">
                            <div className="ms-panel-header new">
                                <h6>Metodos de pago preferidos</h6>
                            </div>
                            <div className="ms-panel-body">
                                <GoogleChart
                                    height={'300px'}
                                    width={"100%"}
                                    chartType="PieChart"
                                    loader={<div>Cargano datos</div>}
                                    data={[['Metodo de pago', 'Pagos hechos'], ...data2]}
                                    options={{
                                        legend: { position: 'none' },
                                        // Just add this option
                                        pieHole: 0.6,
                                        colors: ['#ED2939', '#FF0800', '#B80F0A'],
                                    }}
                                    rootProps={{ 'data-testid': '3' }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Food Orders */}
                    <div className="col-md-12">
                        <Trendingorder />
                    </div>

                </div>
            </div>

        );
    }
}

export default Homecontent;