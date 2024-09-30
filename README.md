# AI Chatbot

+ Install [Docker](https://www.docker.com/get-started/)

+ Build images

  ```bash
  # make build
  ./build.sh
  ```

+ Run

  ```bash
  # make up
  docker compose up -d
  # make down
  docker compose down
  ```

  AI Chatbot [http://localhost:3000/](http://localhost:3000/)

+ Debug

  ```bash
  # https://reactjs.org/link/react-devtools
  docker compose down ai-chatbot

  #npm i -g vercel
  pnpm install
  pnpm dev
  # > Run and Debug > Launch Chrome
  ```

Please see the original [README.md](https://github.com/vercel/ai-chatbot/blob/main/README.md) for more information.
