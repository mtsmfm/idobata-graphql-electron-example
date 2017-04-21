# idobata GraphQL electron example

## Usage

### Docker

    git clone https://github.com/mtsmfm/idobata-graphql-electron-example
    cd idobata-graphql-electron-example
    cp .env.example .env
    # get access token (https://idobata.io/en/api) and edit .env
    xhost local:user
    docker-compose build
    docker-compose run app

### Local

    git clone https://github.com/mtsmfm/idobata-graphql-electron-example
    cd idobata-graphql-electron-example
    cp .env.example .env
    # get access token (https://idobata.io/en/api) and edit .env
    electron .
