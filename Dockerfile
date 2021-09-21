FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY favicon.ico *.html *.js *.css *.svg ./
