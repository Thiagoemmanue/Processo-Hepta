var inicio = new Vue({
	el:"#inicio",
    data: {
        lista: []
    },
    created: function(){
        let vm =  this;
        vm.listarFuncionarios();
    },
    methods:{
        listarFuncionarios: function(){
			const vm = this;
			axios.get("/funcionarios/rs/funcionarios")
			.then(response => {vm.lista = response.data;
			}).catch(function (error) {
				vm.mostraAlertaErro("Erro interno", "Não foi listar natureza de serviços");
			}).finally(function() {
			});
		},
    }
});