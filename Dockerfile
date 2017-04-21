FROM node

RUN apt-get update -qq && \
  apt-get install -y --no-install-recommends \
  libgtk2.0-0 libx11-xcb1 libxtst6 libxss1 libgconf-2-4 libnss3 libnspr4 libasound2

CMD ["yarn", "run", "electron", "."]
