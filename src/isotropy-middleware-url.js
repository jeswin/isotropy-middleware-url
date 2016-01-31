/* @flow */
import parseurl from "parseurl";
import type { IncomingMessage, ServerResponse } from "./flow/http-types";

export default async function(req: IncomingMessage, res: ServerResponse) : Promise {
  const parsed = parseurl(req);
  req.href = parsed.href;
  req.pathname = parsed.pathname;
  req.query = parsed.query;
  req.search = parsed.search;
}
