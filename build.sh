dir=docs
cp -r src/* $dir
minify src/index.html > $dir/index.html
minify src/index.js > $dir/index.js
minify src/sw.js > $dir/sw.js

