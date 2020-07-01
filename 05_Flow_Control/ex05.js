// return foo() ? 'bar' : qux();

if (foo()) {
  // noinspection JSAnnotator
  return 'bar';
} else {
  // noinspection JSAnnotator
  return qux();
}