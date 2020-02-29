import { HttpRequest } from "@azure/functions";

export const buildODataQuery = function(req: HttpRequest): string {
  let result: string;
  for (var key in req.query) {
    if (
      key === "$select" ||
      key === "$top" ||
      key === "$skip" ||
      key === "$expand" ||
      key === "$filter"||
      key === "$orderby"||
      key === "$count"
    ) {
      const newParam = key + "=" + req.query[key];
      if (result) {
        result += "&" + newParam;
      } else {
        result = newParam;
      }
    }
  }
  return result;
};
