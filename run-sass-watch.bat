@echo off

echo Running the SCSS compiler in watch mode...

sass --watch styles\main.scss:styles\main.css

echo SCSS compilation completed.
pause