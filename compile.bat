@echo off
cd /d "%~dp0"
java -jar compiler.jar --js_output_file "js/script-compiled.js" --js "js/src/himu62-app.js"
