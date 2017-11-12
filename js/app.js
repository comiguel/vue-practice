Vue.component('usuarios', {
	template: '#usuarios-template',
	data() {
		return {
			usuarios: [],
			busqueda: '',
		}
	},
	mounted() {
		this.traerUsuarios();
	},
	methods: {
		traerUsuarios(){
			axios.get('https://randomuser.me/api/?results=500')
				.then((respuesta) => {
					// console.log(resuesta);
					const listado = respuesta.data.results.map((usuario) => {
						return {
							nombre: `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`,
							correo: usuario.email,
							foto: usuario.picture.large
						};
					});
					this.usuarios = listado;
				});
		}
	},
	computed: {
		usuariosFiltrados() {
			return this.usuarios.filter((usuario) => {
				return usuario.nombre.includes(this.busqueda);
			});
		}
	}
});

Vue.component('usuario', {
	props: ['datos'],
	template: '#usuario-template',
});

new Vue({
	el: 'main'
})