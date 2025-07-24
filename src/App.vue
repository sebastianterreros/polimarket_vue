<template>
  <div id="app">
    <header class="app-header">
      <div class="header-content">
        <h1 class="app-logo">PoliMarket</h1>
        <nav class="main-nav">
          <router-link to="/clientes" class="nav-link">
            <i class="icon-clients"></i> Clientes
          </router-link>
          <router-link to="/" class="nav-link">
            <i class="icon-products"></i> Productos
          </router-link>
          <router-link to="/ventas" class="nav-link">
            <i class="icon-sales"></i> Ventas
          </router-link>
        </nav>
      </div>
    </header>
    <main class="app-main">
      <router-view/>
    </main>
  </div>
</template>

<style>
:root {
  --color-primary: #2c3e50;
  --color-accent: #3498db;
  --color-success: #2ecc71;
  --color-warning: #f39c12;
  --color-error: #e74c3c;
  --color-text-dark: #333333;
  --color-text-light: #7f8c8d;
  --color-background-light: #f8f9fa;
  --color-white: #ffffff;
  --color-border: #e0e0e0;
  --shadow-light: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-medium: 0 4px 15px rgba(0, 0, 0, 0.1);
}

body {
  margin: 0;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--color-background-light);
  color: var(--color-text-dark);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 15px 25px;
  box-shadow: var(--shadow-light);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-logo {
  margin: 0;
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.main-nav {
  display: flex;
  gap: 25px;
}

.nav-link {
  font-weight: 600;
  color: var(--color-white);
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 6px;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.nav-link.router-link-exact-active {
  background-color: var(--color-accent);
  box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
  transform: translateY(-1px);
}

.icon-products::before { content: '📦'; margin-right: 5px; }
.icon-clients::before { content: '👤'; margin-right: 5px; }
.icon-sales::before { content: '📈'; margin-right: 5px; }

.app-main {
  flex-grow: 1;
  padding: 30px;
  max-width: 1200px;
  margin: 30px auto;
  background-color: var(--color-white);
  border-radius: 12px;
  box-shadow: var(--shadow-medium);
}

.view-container {
  padding: 0;
}

.view-title {
  color: var(--color-primary);
  margin-bottom: 35px;
  font-size: 2.5em;
  font-weight: 700;
  text-align: center;
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 15px;
  margin-top: 0;
}

.loading-message, .no-data-message {
  text-align: center;
  color: var(--color-text-light);
  font-style: italic;
  font-size: 1.1em;
  padding: 20px;
  background-color: var(--color-background-light);
  border-radius: 8px;
  margin-top: 20px;
}

.error-message {
  text-align: center;
  color: var(--color-error);
  font-weight: bold;
  background-color: rgba(231, 76, 60, 0.1);
  border: 1px solid var(--color-error);
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}
</style>
<script setup lang="ts">
</script>