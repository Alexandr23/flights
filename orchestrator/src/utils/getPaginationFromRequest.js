const MAX_LIMIT = 100;
const DEFAULT_LIMIT = 100;

const DEFAULT_PAGE = 1;

const getPaginationFromRequest = (req) => {
  return {
    page: getPage(req.query.page),
    limit: getLimit(req.query.limit),
  };
};

const getPage = (value) => {
  const parseValue = parseInt(value, 10);
  const page = parseValue || DEFAULT_PAGE;
  return page;
};

const getLimit = (value) => {
  const parseValue = parseInt(value, 10);
  const limit = parseValue ? Math.min(parseValue, MAX_LIMIT) : DEFAULT_LIMIT;
  return limit;
};

module.exports = getPaginationFromRequest;
