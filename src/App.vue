<template>
  <div id="app">
    <header>
      <h1 class="text-center">Listado de usuarios.</h1>
    </header>

    <main class="container">
      <section>
        <h2>Tabla usuarios.</h2>

        <div v-if="usuarios.length">
          <table class="table listaUsuariosTable">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuarios" :key="usuario.id">
                <th scope="row">{{ usuario.id }}</th>
                <td>
                  <img
                    :src="usuario.avatar"
                    :alt="usuario.first_name + ' ' + usuario.last_name"
                  />
                </td>
                <td>{{ usuario.first_name }}</td>
                <td>{{ usuario.last_name }}</td>
                <td>{{ usuario.email }}</td>
              </tr>
            </tbody>
          </table>

          <div class="py-3">
            <nav class="d-flex justify-content-center">
              <ul class="pagination pagination-lg">
                <li
                  class="page-item"
                  aria-current="page"
                  v-for="(pagina, index) in paginas"
                  :key="index"
                >
                  <span
                    class="page-link"
                    :class="{ active: numeroPagina == index + 1 }"
                    @click="cambiarPagina(index + 1)"
                    >{{ index + 1 }}</span
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div v-else>
          <p>No se han encontrado registros de usuarios.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      usuarios: [],
      urlBase: "https://reqres.in/api/users",
      numeroPagina: 1,
      paginas: [],
    };
  },
  created() {
    fetch(`${this.urlBase}?page=${1}`)
      .then((response) => response.json())
      .then((data) => {
        this.usuarios = data.data;
        this.paginas.length = data.total_pages;
      })
      .catch((error) => {
        alert("Ha ocurrido un error.");
        console.log(error);
      });
  },
  methods: {
    cambiarPagina: function (pagina) {
      fetch(`${this.urlBase}?page=${pagina}`)
        .then((response) => response.json())
        .then((data) => {
          this.usuarios = data.data;
          this.paginas.length = data.total_pages;
          this.numeroPagina = pagina;
        })
        .catch((error) => {
          alert("Ha ocurrido un error.");
          console.log(error);
        });
    },
  },
};
</script>


<style>
.listaUsuariosTable img {
  width: 85px;
  aspect-ratio: 1/1;
}
</style>
