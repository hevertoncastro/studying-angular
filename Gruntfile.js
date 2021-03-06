module.exports = function( grunt ) {

  grunt.initConfig({

    // Tasks que o Grunt deve executar
    watch : {
    	options: {
        livereload: true
      },
      target: {
        files: [
          '**/*'
          ]
      }
    }
  });

  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'watch' ] );

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};