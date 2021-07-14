export default function handleError(e, setError) {
  const { errors } = e.data;
  Object.keys(errors).forEach((key) => {
    setError(key, { message: errors[key].join(' ') }, { shouldFocus: true });
  });
}
