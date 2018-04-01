var gulp = require('gulp')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('build', function(){

    return gulp.src(
        [
            './public/js/jquery.js',
            './public/js/plugins.js',
            './public/js/functions.js',
        ]
    )
    .pipe(gp_concat('gulp-concat.js'))
    .pipe(gulp.dest('./public/min/'))
    .pipe(gp_rename('vendor.min.js'))
    .pipe(gp_uglify())  
    .pipe(gulp.dest('./public/build/'));        
})

gulp.task('css', function(){
    return gulp.src(
        [
            './public/css/bootstrap.css',
            './public/style.css',
            './public/css/swiper.css',
            './public/css/dark.css',
            './public/css/font-icons.css',
            './public/css/animate.css',
            './public/css/magnific-popup.css',
            './public/css/responsive.css'
        ]
    )
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gp_concat('style.min.css'))
    .pipe(gulp.dest('./public/build/css/'))

})

gulp.task('copy-fonts', function(){
    return gulp.src(
        [
            './public/css/fonts/**',
        ]
    )
    .pipe(gulp.dest('./public/build/css/fonts/'))
})

gulp.task('default', ['build'], function(){})






















// // including plugins
// var gulp = require('gulp')
// var minifyCSS = require('gulp-minify-css')
// var autoprefixer = require('gulp-autoprefixer')
// var gp_concat = require('gulp-concat')
// var gp_rename = require('gulp-rename')
// var gp_uglify = require('gulp-uglify')
// // var less = require('gulp-less')
// var to5 = require('gulp-6to5')
// var path = require('path')
// var sass = require('gulp-sass')

// gulp.task('css', ['sass'], function(){
//     return gulp.src(

//             [


//     // <link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
//     // <link rel="stylesheet" href="style.css" type="text/css" />
//     // <link rel="stylesheet" href="css/dark.css" type="text/css" />
//     // <link rel="stylesheet" href="css/font-icons.css" type="text/css" />
//     // <link rel="stylesheet" href="css/animate.css" type="text/css" />
//     // <link rel="stylesheet" href="css/magnific-popup.css" type="text/css" />
//     // <link rel="stylesheet" href="css/calendar.css" type="text/css" />
//     // <link rel="stylesheet" href="css/responsive.css" type="text/css" />


//                 './public/css/bootstrap.css',
//                 './public/style.css',
//                 './public/css/dark.css',
//                 './public/css/font-icons.css',
//                 './public/css/animate.css',
//                 './public/css/magnific-popup.css',
//                 './public/css/calendar.css',
//                 './public/css/responsive.css'
//             ]
//         )
//         .pipe(minifyCSS())
//         .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
//         .pipe(gp_concat('style.min.css'))
//         .pipe(gulp.dest('./public/dist/css/'))
// })

// gulp.task('sass', function(){
//   return gulp.src('./public/sass/paper-dashboard.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./public/css'));
// })

// gulp.task('copy-fonts', function(){
//     return gulp.src(
//             ['./public/css/fonts/**']
//         )
//         .pipe(gulp.dest('./public/dist/css/fonts/'))
// })

// gulp.task('style', ['css', 'copy-fonts'], function(){})


// gulp.task('js', function(){
//     return gulp.src(

//             [


//     // <script type="text/javascript" src="js/jquery.js"></script>
//     // <script type="text/javascript" src="js/plugins.js"></script>
//     // <script type="text/javascript" src="js/jquery.calendario.js"></script>
//     // <script type="text/javascript" src="js/events-data.js"></script>
//     // <script type="text/javascript" src="js/functions.js"></script>


//                 './public/js/jquery.js',
//                 './public/js/plugins.js',
//                 './public/js/jquery.calendario.js',
//                 './public/js/events-data.js',
//                 './public/js/functions.js',
                
//             ]
//         )
//         .pipe(gp_concat('vendor.min.js'))
//         .pipe(gulp.dest('./public/dist/js/'))
//         .pipe(gp_rename('vendor.min.js'))
//         .pipe(gp_uglify())
//         .pipe(gulp.dest('./public/dist/js/'))
// });

// gulp.task('es6-es5', ['js'], function(){
//     return gulp.src([
//                 './src/*/**.js',
//                 './src/*/*/**.js'
//             ]
//         )
//         .pipe(to5())
//         .pipe(gulp.dest('./public/dist/es5/'))
// });

// gulp.task('watch', function() {
//     gulp.watch(['./src/*/**.js', './src/*/*/**.js', './public/js/**.js'], ['es6-es5'])
// })

// gulp.task('prod', ['style', 'es6-es5'], function(){})

// gulp.task('default', ['es6-es5', 'watch'], function(){})
