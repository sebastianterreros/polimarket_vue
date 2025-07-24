import axios from 'axios';

const API_BASE_URL = 'https://mi-funcion-dotnet-c6237941.azurewebsites.net/api';

export default {
    getProductos() {
        return axios.get(`${API_BASE_URL}/productos`);
    },

    getClientes() {
        return axios.get(`${API_BASE_URL}/clientes`);
    },

    registrarVenta(ventaData) {
        return axios.post(`${API_BASE_URL}/ventas`, ventaData);
    }
};