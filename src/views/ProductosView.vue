<template>
  <div class="view-container">
    <h1 class="view-title">Catálogo de Productos</h1>
    <p v-if="loading" class="loading-message">Cargando productos...</p>
    <p v-if="error" class="error-message">{{ error }}</p>
    <div v-else-if="productos.length" class="product-grid">
      <div v-for="producto in productos" :key="producto.id" class="product-card">
        <div class="product-header">
          <h3 class="product-name">{{ producto.nombre }}</h3>
          <span class="product-id">ID: {{ producto.id }}</span>
        </div>
        <div class="product-body">
          <p class="product-price">${{ parseInt(producto.precio) }}</p>
          <p class="product-description">{{ producto.descripcion }}</p>
        </div>
      </div>
    </div>
    <p v-else-if="!loading" class="no-data-message">No hay productos disponibles.</p>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'ProductosView',
  data() {
    return {
      productos: [],
      loading: false,
      error: null
    };
  },
  created() {
    this.fetchProductos();
  },
  methods: {
    async fetchProductos() {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.getProductos();
        this.productos = response.data;
      } catch (err) {
        this.error = 'No se pudieron cargar los productos. Por favor, intente de nuevo más tarde.';
        console.error('Error al obtener productos:', err);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
}

.product-card {
  background-color: var(--color-white);
  border-radius: 12px;
  box-shadow: var(--shadow-light);
  padding: 25px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-medium);
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px dashed var(--color-border);
}

.product-name {
  color: var(--color-primary);
  font-size: 1.6em;
  margin: 0;
  font-weight: 600;
}

.product-id {
  font-size: 0.85em;
  color: var(--color-text-light);
  background-color: #f0f2f5;
  padding: 4px 8px;
  border-radius: 4px;
}

.product-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-price {
  color: var(--color-success);
  font-size: 2.2em;
  font-weight: 700;
  margin: 15px 0;
  text-align: center;
}

.product-description {
  color: var(--color-text-dark);
  font-size: 1em;
  line-height: 1.6;
  margin-top: 10px;
}
</style>