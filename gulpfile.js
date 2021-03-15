const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

function sassToCss(done) {
    gulp.src('./sass/main.sass')
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions'],
            cascade: false
        }))
        .pipe(rename({basename: 'style', suffix: '.min', extname: '.css'}))
        .pipe(gulp.dest('./style/'))
        .pipe(browserSync.stream())

    done()
}

function watchFile() {
    gulp.watch('./sass/**/*', sassToCss)
    gulp.watch('./**/*.html', browserReload)
    gulp.watch('./**/*.js', browserReload)
}

function browserReload(done) {
    browserSync.reload()

    done()
}

function sync(done) {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    })

    done()
}

gulp.task('default', gulp.parallel(sync, watchFile))
