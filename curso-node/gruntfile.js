module.exports = function(grunt) {

	// cofigurações dos plugins	
	grunt.initConfig({

		clean: {
			temp: [
				'2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/scripts.min.js',
				'2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/scripts.js',
				'2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/libs.min.js'
			],
			all:  ['2.0-projeto-MMORPG-GameOfThrones/application/public/dist/']
		},
		jshint: {
			dist: {
				src: ['2.0-projeto-MMORPG-GameOfThrones/application/public/js/**/*js']

			}
		},
		concat: {
			scripts: {
				src: ['2.0-projeto-MMORPG-GameOfThrones/application/public/js/**/*js'],
				dest: '2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/scripts.js'
			},
			libs: {
				src: [
					'2.0-projeto-MMORPG-GameOfThrones/application/public/components/bootstrap/dist/js/bootstrap.min.js',
					'2.0-projeto-MMORPG-GameOfThrones/application/public/components/datatables.net/js/jquery.dataTables.min.js',
					'2.0-projeto-MMORPG-GameOfThrones/application/public/components/izitoast/dist/js/iziToast.min.js',
					'2.0-projeto-MMORPG-GameOfThrones/application/public/components/jquery/dist/jquery.min.js',
					'2.0-projeto-MMORPG-GameOfThrones/application/public/components/jquery-ui/jquery-ui.min.js'
				],
				dest: '2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/libs.min.js'
			},
			all: {
				src:  ['2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/libs.min.js','2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/scripts.min.js'],
				dest: '2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/all.min.js'
			}
		},
		uglify: {
			scripts: {
				src:  ['2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/scripts.js'],
				dest: '2.0-projeto-MMORPG-GameOfThrones/application/public/dist/js/scripts.min.js'

			}
		},
		cssmin: {
			files: {
				src: ['2.0-projeto-MMORPG-GameOfThrones/application/public/components/bootstrap/dist/css/bootstrap.min.css','2.0-projeto-MMORPG-GameOfThrones/application/public/css/**/*css'],
				dest: '2.0-projeto-MMORPG-GameOfThrones/application/public/dist/css/styles.min.css'
			}
			
		},
		htmlmin: {
			options: {
				removeComments: true,
        		collapseWhitespace: true
			},
			views: {
				expand: true,
          		cwd: '2.0-projeto-MMORPG-GameOfThrones/application/views/',
          		src: ['*.ejs'],
          		dest: '2.0-projeto-MMORPG-GameOfThrones/application/public/dist/view'
			}
		}

	});

	// carregamentos dos plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// passos a ser executados
	//grunt.registerTask('dev', [jshint]);
	grunt.registerTask('dev', ['concat:scripts', 'uglify','concat:libs' ,'concat:all', 'cssmin:files', 'htmlmin','clean:temp']);

}// end 

