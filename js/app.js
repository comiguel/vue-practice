Vue.component('usuarios', {
	template: '#usuarios-template',
	data() {
		return {
			buscar: '',
			usuarios: []
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
					this.usuarios = respuesta.data.results;
				});
		}
	}
});

new Vue({
	el: 'main'
})