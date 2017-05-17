let selectENV = (env) => {
  if (env === 'development') {
    return 'postgres://localhost:5432/todos';
  } else if (env === 'test') {
    return 'postgres://localhost:5432/todos_test_db';
  }
}

module.exports = { selectENV };
