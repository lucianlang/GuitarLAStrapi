module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ced5gi4gqg4fe5adqi6g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_rsc2'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'MEtlBudDX1NUV7K8EN8WSB6hFDPH2GMS'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
