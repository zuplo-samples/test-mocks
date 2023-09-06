import { ZuploContext } from "@zuplo/runtime";
import { randomUUID } from "crypto";

export const context: ZuploContext = {
  requestId: randomUUID(),
  log: {
    debug: console.debug,
    info: console.info,
    warn: console.warn,
    error: console.error,
    log: console.log,
  },
  route: {
    operationId: "my-mock-operation",
    raw: <T>() => ({} as T),
    path: "/my/path",
    methods: ["GET"],
    handler: {
      module: "@zuplo/runtime",
      export: "default",
    },
    version: "none",
  },
  custom: {},
  incomingRequestProperties: {
    asn: 12345,
    asOrganization: "Example, Inc.",
    city: "Seattle",
    colo: "SEA",
    continent: "NA",
    country: "US",
    latitude: "123",
    longitude: "456",
    metroCode: "12355",
    postalCode: "12345",
    region: "Washington",
    regionCode: "WA",
    timezone: "EST",
  },
  invokeInboundPolicy: async (policyName, request) => {
    return new Response("OK");
  },
  waitUntil: (promise: Promise<any>) => {},
  addResponseSendingFinalHook: (hook) => {},
  addEventListener: (type, handler, options) => {},
  removeEventListener: (type, handler, options) => {},
  dispatchEvent: (event) => true,
};
