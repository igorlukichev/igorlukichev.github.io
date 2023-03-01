module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['style.less'],
                    dest: 'dist',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': ['dist/style.css']
                }
            }
        },
        clean: ['dist/style.css'],
        watch: {
            css: {
                files: 'src/css/*.less',
                tasks: ['less'],
                options: {
                    livereload: true,
                },
            },
        },

    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'cssmin', 'clean', 'watch']);


};