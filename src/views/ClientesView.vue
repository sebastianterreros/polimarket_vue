<template>
  <div class="view-container">
    <h1 class="view-title">Listado de Clientes</h1>
    <p v-if="loading" class="loading-message">Cargando clientes...</p>
    <p v-if="error" class="error-message">{{ error }}</p>
    <div v-else-if="clientes.length" class="client-grid">
      <div v-for="cliente in clientes" :key="cliente.id" class="client-card">
        <div class="client-icon-container">
          <i class="client-icon">👤</i>
        </div>
        <div class="client-details">
          <h3 class="client-name">{{ cliente.nombre }}</h3>
          <p class="client-id">ID: {{ cliente.id }}</p>
        </div>
      </div>
    </div>
    <p v-else-if="!loading" class="no-data-message">No hay clientes registrados.</p>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'ClientesView',
  data() {
    return {
      clientes: [],
      loading: false,
      error: null
    };
  },
  created() {
    this.fetchClientes();
  },
  methods: {
    async fetchClientes() {
      this.loading = true;
      this.error = null;
      try {
        const response = await api.getClientes();
        this.clientes = response.data;
      } catch (err) {
        this.error = 'No se pudieron cargar los clientes. Por favor, intente de nuevo más tarde.';
        console.error('Error al obtener clientes:', err);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.client-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding: 20px;
}

.client-card {
  background-color: var(--color-white);
  border-radius: 12px;
  box-shadow: var(--shadow-light);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid var(--color-border);
}

.client-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-medium);
}

.client-icon-container {
  background-color: var(--color-accent);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  color: var(--color-white);
  flex-shrink: 0;
}

.client-icon {
  line-height: 1;
}

.client-details {
  flex-grow: 1;
}

.client-name {
  color: var(--color-primary);
  font-size: 1.3em;
  margin: 0 0 5px 0;
  font-weight: 600;
}

.client-id {
  color: var(--color-text-light);
  font-size: 0.9em;
  margin: 0;
}
</style>