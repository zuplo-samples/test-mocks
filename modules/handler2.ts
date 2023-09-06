import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const arg = request.params.param1;

  const response = await fetch(`https://example.com/${arg}`);

  const result = await response.json();

  return result;
}
