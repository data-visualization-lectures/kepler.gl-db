type ErrorCause = { cause?: unknown };

type PublicError = {
  code: string;
  message: string;
};

type PublicErrorWithStatus = PublicError & {
  status: number;
};

type CorsHeaders = Record<string, string>;

const DEFAULT_ALLOWED_HEADERS = [
  "content-type",
  "x-dataviz-authorization",
];

export class HttpError extends Error {
  status: number;
  code: string;
  publicMessage: string;
  override cause?: unknown;

  constructor(
    status: number,
    code: string,
    message: string,
    options: ErrorCause = {},
  ) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.code = code;
    this.publicMessage = message;
    this.cause = options.cause;
  }
}

export function createCorsHeaders(methods: string[]) {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": DEFAULT_ALLOWED_HEADERS.join(", "),
    "Access-Control-Allow-Methods": methods.join(", "),
  };
}

export function noContentResponse(corsHeaders: CorsHeaders) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export function jsonResponse(
  payload: unknown,
  status: number,
  corsHeaders: CorsHeaders,
) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

export function errorResponse(error: unknown, corsHeaders: CorsHeaders) {
  const { status, code, message } = toPublicError(error);
  return jsonResponse({ error: { code, message } }, status, corsHeaders);
}

export function serializeUnknownError(error: unknown): Record<string, unknown> {
  if (error instanceof HttpError) {
    return {
      type: error.name,
      message: error.message,
      code: error.code,
      status: error.status,
      publicMessage: error.publicMessage,
      cause: error.cause ? serializeUnknownError(error.cause) : null,
      stack: error.stack || null,
    };
  }

  if (error instanceof Error) {
    return {
      type: error.name || "Error",
      message: error.message,
      stack: error.stack || null,
    };
  }

  if (error && typeof error === "object") {
    const record = error as Record<string, unknown>;
    return {
      type: "Object",
      message: typeof record.message === "string"
        ? record.message
        : String(error),
      code: typeof record.code === "string" ? record.code : null,
      details: typeof record.details === "string" ? record.details : null,
      hint: typeof record.hint === "string" ? record.hint : null,
      status: typeof record.status === "number" ? record.status : null,
      name: typeof record.name === "string" ? record.name : null,
    };
  }

  return {
    type: typeof error,
    message: String(error),
  };
}

function toPublicError(error: unknown): PublicErrorWithStatus {
  if (error instanceof HttpError) {
    return {
      status: error.status,
      code: error.code,
      message: error.publicMessage,
    };
  }

  return {
    status: 500,
    code: "internal_error",
    message: "Internal server error",
  };
}
