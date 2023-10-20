const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const autoprefixer = require('gulp-autoprefixer')
const remToPx = require('gulp-rem-to-px')
const csscombx = require('gulp-csscombx')
const minify = require('gulp-minify')

// Process individual component SCSS files
gulp.task('scss', function () {
  return gulp
    .src('./sass/components/**/*.scss')
    .pipe(sassGlob()) // Allows for wildcard @import in SCSS
    .pipe(csscombx()) // Combine matching CSS selectors
    .pipe(minify()) // Minify the CSS
    .pipe(gulp.dest('./dist/sass/components')) // Output to the dist directory
    .on('error', sass.logError) // Log SCSS errors
})

// Process and convert rem to px for CKEditor's stylesheet
gulp.task('ckeditor', function () {
  return gulp
    .src('./css/ckeditor.css', { allowEmpty: true })
    .pipe(
      remToPx({
        fontSize: 10,
      })
    )
    .pipe(minify())
    .pipe(gulp.dest('./dist/css'))
    .on('error', sass.logError)
})

// Compile main SCSS files
gulp.task('sass', function () {
  return gulp
    .src('./_sass/fsa-design-system.scss')
    .pipe(sassGlob())
    .pipe(sass()) // Compile SCSS to CSS
    .pipe(autoprefixer()) // Auto-prefix CSS for browser compatibility
    .pipe(csscombx())
    .pipe(minify())
    .pipe(gulp.dest('./dist/css'))
    .on('error', sass.logError)
})

// Watch for changes in SCSS files and recompile
function watchFiles() {
  gulp.watch('./sass/**/*.scss', gulp.series('sass', 'ckeditor'))
}

// Default task: compile and then watch for changes
gulp.task('default', gulp.series('sass', 'ckeditor', watchFiles))
