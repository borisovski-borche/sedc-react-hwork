const GeneratePagination = (total, num) => {
  const totalPages = Math.ceil(total / 10);
  const result = [];
  const chunked = [];
  for (let i = 1; i <= totalPages; i++) {
    result.push(i);
  }
  for (let j = 0; j < result.length; j += num) {
    chunked.push(result.slice(j, j + num));
  }
  return chunked;
};

export default GeneratePagination;
