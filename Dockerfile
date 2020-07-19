FROM hayd/alpine-deno:latest
WORKDIR /app

USER deno

COPY . .

EXPOSE 3000

ENTRYPOINT ["deno", "run"]
CMD ["--allow-net", "--unstable", "--allow-read", "--allow-write", "--allow-plugin", "app.ts"]