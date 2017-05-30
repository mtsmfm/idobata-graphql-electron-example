# idobata GraphQL electron example

## Usage

### Docker

#### macOS

If you're using macOS, you need additional setup to launch GUI application on docker.

1. Install Xquartz and socat

    brew cask install xquartz
    brew install socat

2. Setup Xquartz

  1. `$ open -a XQuartz`
  2. Open preferences by pressing Cmd-,
  3. Click Security tab
  4. Check "Allow connections from network clients"

3. Launch socat

    socat TCP-LISTEN:6000,reuseaddr,fork UNIX-CLIENT:\"$DISPLAY\" &

4. export `DISPLAY` env var

    ip=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}') && xhost + $ip && export DISPLAY=$i

#### Linux

If you're using Linux and X server, additional setup is only running `xhost local:user`

#### Clone and start application

    git clone https://github.com/mtsmfm/idobata-graphql-electron-example
    cd idobata-graphql-electron-example
    cp .env.example .env
    # get access token (https://idobata.io/en/api) and edit .env
    docker-compose build
    docker-compose run app

#### macOS

To launch GUI application with docker on macOS, you need

### Local

    git clone https://github.com/mtsmfm/idobata-graphql-electron-example
    cd idobata-graphql-electron-example
    cp .env.example .env
    # get access token (https://idobata.io/en/api) and edit .env
    electron .
