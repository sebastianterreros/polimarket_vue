<template>
  <div class="view-container">
    <h1 class="view-title">Registrar Nueva Venta</h1>
    <form @submit.prevent="submitVenta" class="sales-form">
      <div class="form-group">
        <label for="vendedorId" class="form-label">ID del Vendedor:</label>
        <input type="number" id="vendedorId" v-model.number="venta.vendedorId" required class="form-input" placeholder="Ej: 123">
      </div>
      <div class="form-group">
        <label for="cliente" class="form-label">Nombre del Cliente:</label>
        <input type="text" id="cliente" v-model="venta.cliente" required class="form-input" placeholder="Ej: Cliente Final S.A.">
      </div>
      <div class="form-group">
        <label for="productosIds" class="form-label">IDs de Productos (separados por coma):</label>
        <input type="text" id="productosIds" v-model="productosInput" required class="form-input" placeholder="Ej: 101,105,203">
        <small class="form-hint">Ingrese los IDs de los productos a vender, separados por comas.</small>
      </div>
      <button type="submit" :disabled="submitting" class="submit-button">
        {{ submitting ? 'Registrando Venta...' : 'Registrar Venta' }}
      </button>
    </form>

    <p v-if="message" :class="{ 'success-message': isSuccess, 'error-message': !isSuccess }" class="form-status-message">{{ message }}</p>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'VentasView',
  data() {
    return {
      venta: {
        vendedorId: null,
        cliente: '',
        productosIds: []
      },
      productosInput: '',
      submitting: false,
      message: '',
      isSuccess: false
    };
  },
  methods: {
    async submitVenta() {
      this.submitting = true;
      this.message = '';
      this.isSuccess = false;

      this.venta.productosIds = this.productosInput
          .split(',')
          .map(id => parseInt(id.trim()))
          .filter(id => !isNaN(id) && id > 0);

      if (this.venta.productosIds.length === 0) {
        this.message = 'Debe ingresar al menos un ID de producto válido.';
        this.isSuccess = false;
        this.submitting = false;
        return;
      }

      if (this.venta.vendedorId === null) {
        this.message = 'Debe ingresar el ID del vendedor.';
        this.isSuccess = false;
        this.submitting = false;
        return;
      }

      try {
        await api.registrarVenta(this.venta);

        this.message = 'Venta registrada con éxito!';
        this.isSuccess = true;

        this.venta = { vendedorId: null, cliente: '', productosIds: [] };
        this.productosInput = '';

      } catch (err) {
        this.message = `Error al registrar la venta: ${err.response?.data || err.message}`;
        this.isSuccess = false;
        console.error('Error al registrar venta:', err);
      } finally {
        this.submitting = false;
      }
    }
  }
};
</script>

<style scoped>
.sales-form {
  background-color: var(--color-white);
  padding: 40px;
  border-radius: 12px;
  box-shadow: var(--shadow-medium);
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--color-border);
}

.form-group {
  margin-bottom: 25px;
  text-align: left;
}

.form-label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--color-primary);
  font-size: 1.1em;
}

.form-input {
  width: calc(100% - 24px);
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 1em;
  color: var(--color-text-dark);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  outline: none;
}

.form-hint {
  font-size: 0.9em;
  color: var(--color-text-light);
  margin-top: 5px;
  display: block;
}

.submit-button {
  background-color: var(--color-success);
  color: var(--color-white);
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 700;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  width: 100%;
  margin-top: 15px;
}

.submit-button:hover:not(:disabled) {
  background-color: #27ae60;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(46, 204, 113, 0.4);
}

.submit-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.form-status-message {
  margin-top: 30px;
  padding: 15px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1em;
  text-align: center;
}

.success-message {
  color: var(--color-success);
  background-color: rgba(46, 204, 113, 0.1);
  border: 1px solid var(--color-success);
}

.error-message {
  color: var(--color-error);
  background-color: rgba(231, 76, 60, 0.1);
  border: 1px solid var(--color-error);
}
</style>