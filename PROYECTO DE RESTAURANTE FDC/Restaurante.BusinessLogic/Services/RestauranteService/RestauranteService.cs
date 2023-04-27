using Restaurante.DataAccess.Repositories.REST;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurante.BusinessLogic.Services.RestauranteService
{
   public  class RestauranteService
    {

        private readonly ClienteRepository _clienteRepository;
        private readonly EmpleadosRepository _empleadosRepository;
        private readonly FacturasRepository _facturasRepository;
        private readonly IngredientesRepository _ingredientesRepository;
        private readonly PlatillosRepository _platillosRepository;
        private readonly ProveedoresRepository _proveedoresRepository;
        private readonly ReservacionesRepository _reservacionesRepository;
        private readonly SucursalesRepository _sucursalesRepository;

        public RestauranteService(ClienteRepository clienteRepository,
                                  EmpleadosRepository empleadosRepository,
                                  FacturasRepository facturasRepository,
                                  IngredientesRepository ingredientesRepository,
                                  PlatillosRepository platillosRepository,
                                  ProveedoresRepository proveedoresRepository,
                                  ReservacionesRepository reservacionesRepository,
                                  SucursalesRepository sucursalesRepository
            )
        {
            _clienteRepository = clienteRepository;
            _empleadosRepository = empleadosRepository;
            _facturasRepository= facturasRepository;
            _ingredientesRepository = ingredientesRepository;
            _platillosRepository = platillosRepository;
            _proveedoresRepository = proveedoresRepository;
            _reservacionesRepository = reservacionesRepository;
            _sucursalesRepository = sucursalesRepository;
        }

    }
}
