const vm = new Vue({
	el: 'main',
	data: {
		nuevaTarea: null,
		tareas: [
			"Aprender VueJS",
		],
		personas: [],
	},
	mounted() {
		this.buscarPersonas();
	},
	methods: {
		agregarTarea () {
			this.tareas.unshift(this.nuevaTarea);
			this.nuevaTarea = null;
		},
		buscarPersonas() {
			// this.$http.get('https://randomuser.me/api/?results=500')
			// 	.then((respuesta) => {
			// 		this.personas = respuesta.body.results;
			// 	});
			axios.get('https://randomuser.me/api/?results=500')
				.then((respuesta) => {
					this.personas = respuesta.data.results;
				});
		}
	}
})